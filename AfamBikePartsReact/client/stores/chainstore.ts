﻿import { action, computed, makeObservable, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { BikeReverseModel, ChainInfoModel } from "../models";
import { PartService, InfoService, ReverseService } from "../services";
import { AppStore } from "./appstore";
import { PartStore } from "./partstore";

export class ChainStore implements PartStore {
    public polyglot: Polyglot;

    @observable
    public chains: ChainInfoModel[];

    // A modal to display an image of the chain
    @observable
    public ChainImageTitle: string;

    @observable
    public ChainImageModalVisible: boolean;

    @observable
    public ChainImageUrl: string;

    @action
    public HideChainImage(): void {
        document.body.classList.remove("modal-showing");
        this.ChainImageTitle = "";
        this.ChainImageModalVisible = false;
    }

    @action
    public ShowChainImage(chain: ChainInfoModel, url: string): void {
        this.ChainImageTitle = chain.ChainName;
        this.ChainImageUrl = url;
        this.ChainImageModalVisible = true;
    }

    // A modal to display chain technical information
    @observable
    public ChainInfoModalVisible: boolean;

    @observable
    public ChainInfo: ChainInfoModel | undefined;

    @action
    public HideChainInfo(): void {
        document.body.classList.remove("modal-showing");
        this.ChainInfoModalVisible = false;
    }

    public ShowChainInfo(chain: ChainInfoModel): void {
        InfoService.GetChainInfo(chain.ChainName, this.appStore.language, this.loadChainInfo);
    }

    /* Reverse applications */
    @observable
    public ChainReverseTitle: string;

    @observable
    public ChainReverseModalVisible: boolean;

    @observable
    public ReversedBikes: BikeReverseModel[];

    @action
    public HideReversedBikes(): void {
        document.body.classList.remove("modal-showing");
        this.ChainReverseModalVisible = false;
        this.ReversedBikes = [];
        this.ChainReverseTitle = "";
    }

    @action
    public ShowReversedBikes(chain: ChainInfoModel): void {
        this.ReversedBikes = [];
        this.ChainReverseTitle = chain.ChainName;
        ReverseService.GetBikes(chain.Id, this.updateReverseBikes);
    }

    @action
    private updateReverseBikes(newBikes: BikeReverseModel[]): void {
        this.ReversedBikes = newBikes;
        this.ChainReverseModalVisible = true;
    }

    private bikeId: number;

    constructor(public appStore: AppStore) {
        makeObservable(this);

        this.chains = [];
        this.bikeId = 0;
        this.polyglot = this.appStore.polyglot;

        this.ChainImageTitle = "";
        this.ChainImageModalVisible = false;
        this.ChainImageUrl = "";

        this.ChainInfoModalVisible = false;
        this.ChainInfo = undefined;

        this.ChainReverseModalVisible = false;
        this.ReversedBikes = [];
        this.ChainReverseTitle = "";

        this.updateChains = this.updateChains.bind(this);

        this.loadChainInfo = this.loadChainInfo.bind(this);
        this.HideChainInfo = this.HideChainInfo.bind(this);

        this.updateReverseBikes = this.updateReverseBikes.bind(this);
    }

    @computed
    public get hasChains(): boolean {
        if (this.chains) {
            return this.chains.length !== 0;
        } else {
            return false;
        }
    }

    @computed
    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;
        this.getChains();
    }

    @action
    private getChains(): void {
        if (this.bikeId !== 0) {
            PartService.GetChains(this.appStore.parts, this.bikeId, this.appStore.language, this.updateChains);
        } else {
            this.updateChains([]);
        }
    }

    @action
    private updateChains(newChains: ChainInfoModel[]): void {
        this.chains = newChains;
    }

    @action
    public loadChainInfo(info: ChainInfoModel | undefined) {
        this.ChainInfo = info;
        this.ChainInfoModalVisible = true;
    }
}