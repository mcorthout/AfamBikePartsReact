webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PartStore = /** @class */ (function () {
    function PartStore() {
    }
    return PartStore;
}());
exports.PartStore = PartStore;


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var partservice_1 = __webpack_require__(80);
exports.PartService = partservice_1.PartService;
var bikeservice_1 = __webpack_require__(99);
exports.BikeService = bikeservice_1.BikeService;
var reverseservice_1 = __webpack_require__(100);
exports.ReverseService = reverseservice_1.ReverseService;


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(102);
exports.PartBrands = constants_1.PartBrands;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imagemodal_1 = __webpack_require__(112);
exports.ImageModal = imagemodal_1.ImageModal;
var reversemodal_1 = __webpack_require__(113);
exports.ReverseModal = reversemodal_1.ReverseModal;


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(4);
var models_1 = __webpack_require__(24);
var services_1 = __webpack_require__(9);
var BikeStore = /** @class */ (function () {
    function BikeStore(appStore) {
        this.appStore = appStore;
        this.bike = new models_1.BikeModel();
        this.selectBrand = this.selectBrand.bind(this);
        this.selectCc = this.selectCc.bind(this);
        this.selectModel = this.selectModel.bind(this);
        this.selectYear = this.selectYear.bind(this);
        this.updateBrands = this.updateBrands.bind(this);
        this.updateCcs = this.updateCcs.bind(this);
        this.updateModels = this.updateModels.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateBikes = this.updateBikes.bind(this);
        this.partbrand = this.appStore.parts;
        this.language = this.appStore.language;
        this.polyglot = this.appStore.polyglot;
        services_1.BikeService.GetBrands(this.partbrand, this.bike, this.updateBrands);
    }
    BikeStore.prototype.updateBrands = function (brands) {
        if (brands.length > 1) {
            brands.unshift(this.polyglot.t("SelectBrand"));
        }
        this.bike.brands = brands;
        this.bike.selectedBrand = brands[0];
        if (brands.length === 1) {
            this.selectBrand(this.bike.selectedBrand);
        }
    };
    BikeStore.prototype.selectBrand = function (brand) {
        this.bike.selectedBrand = brand;
        this.bike.ccs = [];
        this.bike.selectedCc = "";
        this.bike.models = [];
        this.bike.selectedModel = "";
        this.bike.years = [];
        this.bike.selectedYear = "";
        this.appStore.BikeId = 0;
        services_1.BikeService.GetCCs(this.partbrand, this.bike, this.updateCcs);
    };
    BikeStore.prototype.updateCcs = function (ccs) {
        if (ccs.length > 1) {
            ccs.unshift(this.polyglot.t("SelectCc"));
        }
        this.bike.ccs = ccs;
        this.bike.selectedCc = ccs[0];
        if (ccs.length === 1) {
            this.selectCc(this.bike.selectedCc);
        }
    };
    BikeStore.prototype.selectCc = function (cc) {
        this.bike.selectedCc = cc;
        this.bike.models = [];
        this.bike.selectedModel = "";
        this.bike.years = [];
        this.bike.selectedYear = "";
        this.appStore.BikeId = 0;
        services_1.BikeService.GetModels(this.partbrand, this.bike, this.updateModels);
    };
    BikeStore.prototype.updateModels = function (models) {
        if (models.length > 1) {
            models.unshift(this.polyglot.t("SelectModel"));
        }
        this.bike.models = models;
        this.bike.selectedModel = models[0];
        if (models.length === 1) {
            this.selectModel(this.bike.selectedModel);
        }
    };
    BikeStore.prototype.selectModel = function (model) {
        this.bike.selectedModel = model;
        this.bike.years = [];
        this.bike.selectedYear = "";
        this.appStore.BikeId = 0;
        services_1.BikeService.GetYears(this.partbrand, this.bike, this.updateYears);
    };
    BikeStore.prototype.updateYears = function (years) {
        if (years.length > 1) {
            years.unshift(this.polyglot.t("SelectYear"));
        }
        this.bike.years = years;
        this.bike.selectedYear = years[0];
        if (years.length === 1) {
            this.selectYear(this.bike.selectedYear);
        }
    };
    BikeStore.prototype.selectYear = function (year) {
        this.bike.selectedYear = year;
        this.appStore.BikeId = 0;
        services_1.BikeService.GetBikes(this.partbrand, this.bike, this.language, this.updateBikes);
    };
    BikeStore.prototype.updateBikes = function (bikes) {
        this.appStore.BikeId = (bikes.length > 0) ? bikes[0] : 0;
    };
    __decorate([
        mobx_1.observable
    ], BikeStore.prototype, "bike", void 0);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "updateBrands", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "selectBrand", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "updateCcs", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "selectCc", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "updateModels", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "selectModel", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "updateYears", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "selectYear", null);
    __decorate([
        mobx_1.action
    ], BikeStore.prototype, "updateBikes", null);
    return BikeStore;
}());
exports.BikeStore = BikeStore;
exports.default = BikeStore;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitmodel_1 = __webpack_require__(74);
exports.KitModel = kitmodel_1.KitModel;
var kitstate_1 = __webpack_require__(25);
exports.DefaultKitState = kitstate_1.DefaultKitState;
exports.KitState = kitstate_1.KitState;
var chainmodel_1 = __webpack_require__(26);
exports.ChainModel = chainmodel_1.ChainModel;
var sprocketmodel_1 = __webpack_require__(27);
exports.SprocketModel = sprocketmodel_1.SprocketModel;
var bikemodel_1 = __webpack_require__(75);
exports.BikeModel = bikemodel_1.BikeModel;
var batterymodel_1 = __webpack_require__(76);
exports.BatteryModel = batterymodel_1.BatteryModel;
var filtermodel_1 = __webpack_require__(77);
exports.FilterModel = filtermodel_1.FilterModel;
var bikereversemodel_1 = __webpack_require__(78);
exports.BikeReverseModel = bikereversemodel_1.BikeReverseModel;
var chaininfomodel_1 = __webpack_require__(79);
exports.ChainInfoModel = chaininfomodel_1.ChainInfoModel;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chainmodel_1 = __webpack_require__(26);
var sprocketmodel_1 = __webpack_require__(27);
exports.DefaultKitState = {
    CurrentChains: [chainmodel_1.DefaultChain],
    CurrentChainLength: 0,
    SelectedChain: chainmodel_1.DefaultChain,
    SelectedFrontSprocket: sprocketmodel_1.DefaultSprocket,
    SelectedRearSprocket: sprocketmodel_1.DefaultSprocket,
};
var KitState = /** @class */ (function () {
    function KitState() {
    }
    return KitState;
}());
exports.KitState = KitState;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultChain = {
    ChainType: "",
    ChainColor: "",
    ChainBaseName: "",
    ChainOrder: 0,
    IsStandard: 0,
    Length: 0,
    FullName: "",
};
var ChainModel = /** @class */ (function () {
    function ChainModel() {
    }
    return ChainModel;
}());
exports.ChainModel = ChainModel;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSprocket = {
    SprocketName: "",
    PartId: 0,
    Side: "",
    Base: "",
    Teeth: 0,
};
var SprocketModel = /** @class */ (function () {
    function SprocketModel() {
    }
    return SprocketModel;
}());
exports.SprocketModel = SprocketModel;


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(7);
var services_1 = __webpack_require__(9);
var infoservice_1 = __webpack_require__(101);
var KitStore = /** @class */ (function (_super) {
    __extends(KitStore, _super);
    function KitStore(appStore) {
        var _this = _super.call(this) || this;
        _this.appStore = appStore;
        _this.kits = [];
        _this.bikeId = 0;
        _this.polyglot = _this.appStore.polyglot;
        _this.SprocketImageTitle = "";
        _this.SprocketImageModalVisible = false;
        _this.SprocketImageUrl = "";
        _this.ChainImageTitle = "";
        _this.ChainImageModalVisible = false;
        _this.ChainImageUrl = "";
        _this.ChainInfoModalVisible = false;
        _this.ChainInfo = undefined;
        _this.handleChainChange = _this.handleChainChange.bind(_this);
        _this.handleSprocketChange = _this.handleSprocketChange.bind(_this);
        _this.setInitialKitState = _this.setInitialKitState.bind(_this);
        _this.updateChainLengths = _this.updateChainLengths.bind(_this);
        _this.updateKits = _this.updateKits.bind(_this);
        _this.updateSelectedChain = _this.updateSelectedChain.bind(_this);
        _this.loadChainInfo = _this.loadChainInfo.bind(_this);
        _this.HideChainInfo = _this.HideChainInfo.bind(_this);
        return _this;
    }
    KitStore.prototype.HideSprocketImage = function () {
        document.body.classList.remove("modal-showing");
        this.SprocketImageTitle = "";
        this.SprocketImageModalVisible = false;
    };
    KitStore.prototype.ShowSprocketImage = function (sprocket, url) {
        this.SprocketImageTitle = sprocket.SprocketName;
        this.SprocketImageUrl = url;
        this.SprocketImageModalVisible = true;
    };
    KitStore.prototype.HideChainImage = function () {
        document.body.classList.remove("modal-showing");
        this.ChainImageTitle = "";
        this.ChainImageModalVisible = false;
    };
    KitStore.prototype.ShowChainImage = function (chain, url) {
        this.ChainImageTitle = chain.FullName;
        this.ChainImageUrl = url;
        this.ChainImageModalVisible = true;
    };
    KitStore.prototype.HideChainInfo = function () {
        document.body.classList.remove("modal-showing");
        this.ChainInfoModalVisible = false;
    };
    KitStore.prototype.ShowChainInfo = function (chain) {
        infoservice_1.InfoService.GetChainInfo(chain.FullName, this.appStore.language, this.loadChainInfo);
    };
    Object.defineProperty(KitStore.prototype, "hasKits", {
        get: function () {
            if (this.kits) {
                return this.kits.length !== 0;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KitStore.prototype, "BikeId", {
        get: function () {
            return this.bikeId;
        },
        set: function (value) {
            this.bikeId = value;
            this.getKits();
        },
        enumerable: true,
        configurable: true
    });
    KitStore.prototype.handleSprocketChange = function (kit, side, sprocket) {
        var kitState = kit.CurrentState;
        var front = kitState.SelectedFrontSprocket;
        var rear = kitState.SelectedRearSprocket;
        var frontDefault = kit.FrontDefaultTeeth;
        var rearDefault = kit.RearDefaultTeeth;
        var defaultChainLength = kit.ChainLength;
        var currentChainLength = kitState.CurrentChainLength;
        if (side === "front") {
            front = sprocket;
        }
        else {
            rear = sprocket;
        }
        /*
           Calculate the number of links to add/subtract from the default chain length
           based on the number of teeth of the selected front and rear sprocket
        */
        var extraLinks = 0;
        var teethDifference = rear.Teeth - frontDefault + front.Teeth - rearDefault;
        if (teethDifference > 0) {
            extraLinks = (Math.floor((teethDifference - 1) / 3) + 1) * 2;
        }
        else if (teethDifference < 0) {
            extraLinks = Math.ceil((teethDifference + 1) / 3) * 2;
        }
        var newChains = kitState.CurrentChains;
        var newSelectedChain = kitState.SelectedChain;
        var newChainLength = defaultChainLength + extraLinks;
        /* Update the length of all chains if required */
        if (newChainLength !== currentChainLength) {
            newChains = this.updateChainLengths(newChains, newChainLength);
            newSelectedChain = this.updateSelectedChain(newChains, newSelectedChain, newChainLength);
        }
        /* Update the kit */
        kitState.CurrentChains = newChains;
        kitState.CurrentChainLength = newChainLength;
        kitState.SelectedChain = newSelectedChain;
        kitState.SelectedFrontSprocket = front;
        kitState.SelectedRearSprocket = rear;
    };
    KitStore.prototype.handleChainChange = function (kit, chain) {
        kit.CurrentState.SelectedChain = chain;
    };
    KitStore.prototype.getKits = function () {
        if (this.bikeId !== 0) {
            services_1.PartService.GetKits(this.appStore.parts, this.bikeId, this.appStore.language, this.updateKits);
        }
        else {
            this.updateKits([]);
        }
    };
    KitStore.prototype.updateKits = function (newKits) {
        this.setInitialKitState(newKits);
        this.kits = newKits;
    };
    KitStore.prototype.setInitialKitState = function (kits) {
        kits.forEach(function (k) {
            var state = {
                CurrentChainLength: k.ChainLength,
                CurrentChains: k.Chains,
                SelectedChain: k.Chains.find(function (c) { return c.FullName === k.Chain; }) || k.Chains[0],
                SelectedFrontSprocket: k.FrontSprockets.find(function (s) { return s.SprocketName === k.FrontSprocket; })
                    || k.FrontSprockets[0],
                SelectedRearSprocket: k.RearSprockets.find(function (s) { return s.SprocketName === k.RearSprocket; })
                    || k.RearSprockets[0],
            };
            k.CurrentState = state;
        });
    };
    /**
     * Update the length of all chains and return the new list of chains
     * @param {number} newChainLength - The new length
     */
    KitStore.prototype.updateChainLengths = function (chains, newChainLength) {
        var newChains = chains;
        newChains.forEach(function (c) {
            c.Length = newChainLength,
                c.FullName = c.ChainBaseName + " " + newChainLength.toFixed(0) + "L";
        });
        return newChains;
    };
    /**
     * Update the length of the selected chain and return the new chain
     * @param {number} newChainLength - The new length
     */
    KitStore.prototype.updateSelectedChain = function (chains, selectedChain, newChainLength) {
        return chains.find(function (c) { return c.ChainBaseName === selectedChain.ChainBaseName; }) || chains[0];
    };
    KitStore.prototype.loadChainInfo = function (info) {
        if (info && info.PitchMm) {
            this.ChainInfo = info;
            this.ChainInfoModalVisible = true;
        }
        else {
            this.ChainInfoModalVisible = false;
        }
    };
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "kits", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "SprocketImageTitle", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "SprocketImageModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "SprocketImageUrl", void 0);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "HideSprocketImage", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "ShowSprocketImage", null);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "ChainImageTitle", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "ChainImageModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "ChainImageUrl", void 0);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "HideChainImage", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "ShowChainImage", null);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "ChainInfoModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], KitStore.prototype, "ChainInfo", void 0);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "HideChainInfo", null);
    __decorate([
        mobx_1.computed
    ], KitStore.prototype, "hasKits", null);
    __decorate([
        mobx_1.computed
    ], KitStore.prototype, "BikeId", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "handleSprocketChange", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "handleChainChange", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "getKits", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "updateKits", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "setInitialKitState", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "updateChainLengths", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "updateSelectedChain", null);
    __decorate([
        mobx_1.action
    ], KitStore.prototype, "loadChainInfo", null);
    return KitStore;
}(partstore_1.PartStore));
exports.KitStore = KitStore;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(7);
var models_1 = __webpack_require__(24);
var services_1 = __webpack_require__(9);
var BatteryStore = /** @class */ (function (_super) {
    __extends(BatteryStore, _super);
    // Create a new store
    function BatteryStore(appStore) {
        var _this = _super.call(this) || this;
        _this.appStore = appStore;
        _this.batteries = [];
        _this.bikeId = 0;
        _this.polyglot = _this.appStore.polyglot;
        _this.BatteryImageModalVisible = false;
        _this.BatteryImageUrl = "";
        _this.BatteryImageTitle = "";
        _this.BatteryInfoModalVisible = false;
        _this.BatteryInfo = new models_1.BatteryModel();
        _this.BatteryReverseModalVisible = false;
        _this.ReversedBikes = [];
        _this.BatteryReverseTitle = "";
        _this.updateBatteries = _this.updateBatteries.bind(_this);
        _this.updateReverseBikes = _this.updateReverseBikes.bind(_this);
        return _this;
    }
    BatteryStore.prototype.HideBatteryImage = function () {
        document.body.classList.remove("modal-showing");
        this.BatteryImageModalVisible = false;
        this.BatteryImageTitle = "";
    };
    BatteryStore.prototype.ShowBatteryImage = function (battery) {
        this.BatteryImageUrl = battery.Photo;
        this.BatteryImageTitle = battery.Part;
        this.BatteryImageModalVisible = true;
    };
    BatteryStore.prototype.HideBatteryInfo = function () {
        document.body.classList.remove("modal-showing");
        this.BatteryInfoModalVisible = false;
    };
    BatteryStore.prototype.ShowBatteryInfo = function (battery) {
        this.BatteryInfo = battery;
        this.BatteryInfoModalVisible = true;
    };
    BatteryStore.prototype.HideReversedBikes = function () {
        document.body.classList.remove("modal-showing");
        this.BatteryReverseModalVisible = false;
        this.ReversedBikes = [];
        this.BatteryReverseTitle = "";
    };
    BatteryStore.prototype.ShowReversedBikes = function (battery) {
        this.ReversedBikes = [];
        this.BatteryReverseTitle = battery.Part;
        services_1.ReverseService.GetBikes(battery.PartId, this.updateReverseBikes);
    };
    BatteryStore.prototype.updateReverseBikes = function (newBikes) {
        this.ReversedBikes = newBikes;
        this.BatteryReverseModalVisible = true;
    };
    Object.defineProperty(BatteryStore.prototype, "hasBatteries", {
        // Determine whether or not this store contains batteries
        get: function () {
            if (this.batteries) {
                return this.batteries.length !== 0;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryStore.prototype, "BikeId", {
        get: function () {
            return this.bikeId;
        },
        set: function (value) {
            this.bikeId = value;
            this.getBatteries();
        },
        enumerable: true,
        configurable: true
    });
    // Request a new list of batteries
    BatteryStore.prototype.getBatteries = function () {
        if (this.bikeId !== 0) {
            services_1.PartService.GetBatteries(this.appStore.parts, this.bikeId, this.appStore.language, this.updateBatteries);
        }
        else {
            this.updateBatteries([]);
        }
    };
    // Process the retrieved list of batteries
    BatteryStore.prototype.updateBatteries = function (newBatteries) {
        for (var _i = 0, newBatteries_1 = newBatteries; _i < newBatteries_1.length; _i++) {
            var battery = newBatteries_1[_i];
            battery.LayoutDrawing = "https://service.afam.com/webshop/images/batteries/layout/" + battery.LayoutDrawing;
            battery.TerminalTop = "https://service.afam.com/webshop/images/batteries/terminal/t" + battery.TerminalType + "t.png";
            battery.TerminalFront = "https://service.afam.com/webshop/images/batteries/terminal/t" + battery.TerminalType + "f.png";
            battery.TerminalSide = "https://service.afam.com/webshop/images/batteries/terminal/t" + battery.TerminalType + "s.png";
        }
        this.batteries = newBatteries;
    };
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "batteries", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryImageTitle", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryImageModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryImageUrl", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryInfoModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryInfo", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryReverseTitle", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "BatteryReverseModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], BatteryStore.prototype, "ReversedBikes", void 0);
    __decorate([
        mobx_1.action
    ], BatteryStore.prototype, "updateReverseBikes", null);
    __decorate([
        mobx_1.computed
    ], BatteryStore.prototype, "hasBatteries", null);
    __decorate([
        mobx_1.computed
    ], BatteryStore.prototype, "BikeId", null);
    __decorate([
        mobx_1.action
    ], BatteryStore.prototype, "getBatteries", null);
    __decorate([
        mobx_1.action
    ], BatteryStore.prototype, "updateBatteries", null);
    return BatteryStore;
}(partstore_1.PartStore));
exports.BatteryStore = BatteryStore;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(7);
var services_1 = __webpack_require__(9);
var FilterStore = /** @class */ (function (_super) {
    __extends(FilterStore, _super);
    function FilterStore(appStore) {
        var _this = _super.call(this) || this;
        _this.appStore = appStore;
        _this.filters = [];
        _this.bikeId = 0;
        _this.polyglot = _this.appStore.polyglot;
        _this.FilterImageTitle = "";
        _this.FilterImageModalVisible = false;
        _this.FilterImageUrl = "";
        _this.FilterDrawingModalVisible = false;
        _this.FilterDrawingUrl = "";
        _this.FilterReverseModalVisible = false;
        _this.ReversedBikes = [];
        _this.FilterReverseTitle = "";
        _this.updateFilters = _this.updateFilters.bind(_this);
        _this.updateReverseBikes = _this.updateReverseBikes.bind(_this);
        return _this;
    }
    FilterStore.prototype.HideFilterImage = function () {
        document.body.classList.remove("modal-showing");
        this.FilterImageModalVisible = false;
        this.FilterImageTitle = "";
    };
    FilterStore.prototype.ShowFilterImage = function (filter, url) {
        this.FilterImageTitle = filter.Part;
        this.FilterImageUrl = url;
        this.FilterImageModalVisible = true;
    };
    FilterStore.prototype.HideFilterDrawing = function () {
        document.body.classList.remove("modal-showing");
        this.FilterDrawingModalVisible = false;
        this.FilterImageTitle = "";
    };
    FilterStore.prototype.ShowFilterDrawing = function (filter, url) {
        this.FilterImageTitle = filter.Part;
        this.FilterDrawingUrl = url;
        this.FilterDrawingModalVisible = true;
    };
    FilterStore.prototype.HideReversedBikes = function () {
        document.body.classList.remove("modal-showing");
        this.FilterReverseModalVisible = false;
        this.ReversedBikes = [];
        this.FilterReverseTitle = "";
    };
    FilterStore.prototype.ShowReversedBikes = function (filter) {
        this.ReversedBikes = [];
        this.FilterReverseTitle = filter.Part;
        services_1.ReverseService.GetBikes(filter.PartId, this.updateReverseBikes);
    };
    FilterStore.prototype.updateReverseBikes = function (newBikes) {
        this.ReversedBikes = newBikes;
        this.FilterReverseModalVisible = true;
    };
    Object.defineProperty(FilterStore.prototype, "hasFilters", {
        get: function () {
            if (this.filters) {
                return this.filters.length !== 0;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterStore.prototype, "BikeId", {
        get: function () {
            return this.bikeId;
        },
        set: function (value) {
            this.bikeId = value;
            this.getFilters();
        },
        enumerable: true,
        configurable: true
    });
    FilterStore.prototype.getFilters = function () {
        if (this.bikeId !== 0) {
            services_1.PartService.GetFilters(this.appStore.parts, this.bikeId, this.appStore.language, this.updateFilters);
        }
        else {
            this.updateFilters([]);
        }
    };
    FilterStore.prototype.updateFilters = function (newFilters) {
        this.filters = newFilters;
    };
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "filters", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterImageTitle", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterImageModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterImageUrl", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterDrawingModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterDrawingUrl", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterReverseTitle", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "FilterReverseModalVisible", void 0);
    __decorate([
        mobx_1.observable
    ], FilterStore.prototype, "ReversedBikes", void 0);
    __decorate([
        mobx_1.action
    ], FilterStore.prototype, "updateReverseBikes", null);
    __decorate([
        mobx_1.computed
    ], FilterStore.prototype, "hasFilters", null);
    __decorate([
        mobx_1.computed
    ], FilterStore.prototype, "BikeId", null);
    __decorate([
        mobx_1.action
    ], FilterStore.prototype, "getFilters", null);
    __decorate([
        mobx_1.action
    ], FilterStore.prototype, "updateFilters", null);
    return FilterStore;
}(partstore_1.PartStore));
exports.FilterStore = FilterStore;


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(10);
var parts_1 = __webpack_require__(52);
var constants_1 = __webpack_require__(14);
function renderApp() {
    var root = document.getElementById("react-app");
    if (root) {
        var language = root.dataset.language || "en";
        var parts = Number(root.dataset.parts);
        if (!parts) {
            var brands = root.dataset.parts;
            if (brands) {
                var brandArray = brands.replace(" ", "").split(",");
                parts = brandsToParts(brandArray);
            }
            else {
                parts = 0;
            }
        }
        ReactDOM.render(React.createElement(parts_1.Parts, { language: language, parts: parts }), root);
    }
}
function brandsToParts(brands) {
    var parts = 0;
    for (var _i = 0, brands_1 = brands; _i < brands_1.length; _i++) {
        var brand = brands_1[_i];
        parts += constants_1.PartBrands[brand];
    }
    return parts;
}
renderApp();


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var stores_1 = __webpack_require__(53);
var bikes_1 = __webpack_require__(103);
var kits_1 = __webpack_require__(106);
var batteries_1 = __webpack_require__(123);
var filters_1 = __webpack_require__(127);
var constants_1 = __webpack_require__(14);
var Parts = /** @class */ (function (_super) {
    __extends(Parts, _super);
    function Parts(props) {
        var _this = _super.call(this, props) || this;
        _this.store = new stores_1.AppStore(_this.props.parts, _this.props.language);
        return _this;
    }
    Parts.prototype.render = function () {
        if (this.validParts()) {
            return (React.createElement("div", { className: "App" },
                React.createElement(bikes_1.BikeSelect, { store: this.store.bikeStore }),
                this.renderParts()));
        }
        else {
            return React.createElement("div", null, "Invalid part categories");
        }
    };
    Parts.prototype.validParts = function () {
        var supported = constants_1.PartBrands.AFAM +
            constants_1.PartBrands.DC +
            constants_1.PartBrands.Threed +
            constants_1.PartBrands.Nitro +
            constants_1.PartBrands.Shido +
            constants_1.PartBrands.Ison;
        return ((this.props.parts & supported) !== 0);
    };
    Parts.prototype.renderParts = function () {
        if (this.store.partStore instanceof stores_1.KitStore) {
            return (React.createElement(kits_1.KitList, { store: this.store.partStore }));
        }
        else if (this.store.partStore instanceof stores_1.BatteryStore) {
            return (React.createElement(batteries_1.BatteryContainer, { store: this.store.partStore }));
        }
        else if (this.store.partStore instanceof stores_1.FilterStore) {
            return (React.createElement(filters_1.FilterContainer, { store: this.store.partStore }));
        }
        else {
            return null;
        }
    };
    Parts = __decorate([
        mobx_react_1.observer
    ], Parts);
    return Parts;
}(React.Component));
exports.Parts = Parts;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appstore_1 = __webpack_require__(54);
exports.AppStore = appstore_1.AppStore;
var bikestore_1 = __webpack_require__(23);
exports.BikeStore = bikestore_1.BikeStore;
var kitstore_1 = __webpack_require__(33);
exports.KitStore = kitstore_1.KitStore;
var partstore_1 = __webpack_require__(7);
exports.PartStore = partstore_1.PartStore;
var batterystore_1 = __webpack_require__(34);
exports.BatteryStore = batterystore_1.BatteryStore;
var filterstore_1 = __webpack_require__(35);
exports.FilterStore = filterstore_1.FilterStore;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Polyglot = __webpack_require__(19);
var translations_1 = __webpack_require__(72);
var bikestore_1 = __webpack_require__(23);
var partstore_1 = __webpack_require__(7);
var kitstore_1 = __webpack_require__(33);
var batterystore_1 = __webpack_require__(34);
var filterstore_1 = __webpack_require__(35);
var constants_1 = __webpack_require__(14);
var AppStore = /** @class */ (function () {
    function AppStore(parts, language) {
        if (parts === void 0) { parts = 1; }
        if (language === void 0) { language = "en"; }
        this.parts = parts;
        this.language = language;
        // Configure polyglot
        var translationTable = translations_1.Translations[language];
        if (!translationTable) {
            translationTable = translations_1.Translations.en;
        }
        this.polyglot = new Polyglot({
            locale: language,
            phrases: translationTable,
        });
        // Create the bike store
        this.bikeStore = new bikestore_1.BikeStore(this);
        // Create the parts store
        if (((parts & constants_1.PartBrands.AFAM) !== 0) ||
            ((parts & constants_1.PartBrands.DC) !== 0) ||
            ((parts & constants_1.PartBrands.Threed) !== 0)) {
            this.partStore = new kitstore_1.KitStore(this);
        }
        else if (((parts & constants_1.PartBrands.Shido) !== 0) || ((parts & constants_1.PartBrands.Nitro) !== 0)) {
            this.partStore = new batterystore_1.BatteryStore(this);
        }
        else if ((parts & constants_1.PartBrands.Ison) !== 0) {
            this.partStore = new filterstore_1.FilterStore(this);
        }
        else {
            this.partStore = new partstore_1.PartStore();
        }
    }
    Object.defineProperty(AppStore.prototype, "BikeId", {
        get: function () {
            return this.bikeId;
        },
        set: function (value) {
            this.bikeId = value;
            if (this.partStore) {
                this.partStore.BikeId = this.bikeId;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppStore;
}());
exports.AppStore = AppStore;
exports.default = AppStore;


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var translations_1 = __webpack_require__(73);
exports.Translations = translations_1.Translations;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Translations = {
    en: {
        BikeSelect: "Select a motorbike",
        Brand: "Brand",
        Cc: "Cc",
        Model: "Model",
        Year: "Year",
        SelectBrand: "<Please select a brand>",
        SelectCc: "<Please select a cc>",
        SelectModel: "<Please select a model>",
        SelectYear: "<Please select a year>",
        ApplicableKits: "Applicable kits",
        PartNumber: "Part number",
        FrontSprocket: "Front sprocket",
        RearSprocket: "Rear sprocket",
        Teeth: "Teeth",
        Part: "Part",
        Chains: "Chains",
        Type: "Type",
        Color: "Color",
        Length: "Length",
        Item: "Item",
        EAN: "EAN code",
        Voltage: "Voltage",
        Capacity: "Capacity",
        CCA: "Cold crank current",
        AGM: "AGM",
        Gel: "Gel",
        Acid: "Acid",
        Image: "Image",
        ApplicableBatteries: "Applicable batteries",
        Drawing: "Drawing",
        ApplicableFilters: "Applicable filters",
        Width: "Depth",
        Height: "Height",
        DryWeight: "Dry weight",
        FilledWeight: "Filled weight",
        AcidVolume: "Acid volume",
        LayoutDrawing: "Layout",
        ChargePreferred: "Preferred charging current",
        ChargeMax: "Maximum charging current",
        TerminalTop: "Terminal top view",
        TerminalFront: "Terminal front view",
        TerminalSide: "Terminal side view",
        Liter: "liter",
        Technology: "Technology",
        From: "From",
        To: "To",
        Previous: "Previous",
        Next: "Next",
        ApplicationList: "Application list",
        Applications: "Applications",
        ChainType: "Chain type",
        PitchMm: "Pitch",
        PitchWidth: "Width",
        Description: "Description",
        OuterColor: "Color",
        Application: "Application",
        FromCC: "From CC",
        ToCC: "To CC",
        BushType: "Bushing type",
        PinType: "Pin type",
        RollerDiameter: "Roller diameter",
        PinDiameter: "Pin diameter",
        InternalPlateThickness: "Internal plate thickness",
        ExternalPlateThickness: "External plate thickness",
        InternalPlateHeight: "Internal plate height",
        ExternalPlateHeight: "External plate height",
        L1: "L1",
        L2: "L2",
        TensileStrength: "Tensile strength",
        Weight: "Weight",
        StandardClip: "Standard clip",
        StandardRivet: "Standard rivet",
        SealType: "Seal type",
        KgPer100Links: "kg per 100 links",
        Close: "Close",
    },
    nl: {
        BikeSelect: "Kies een motorfiets",
        Brand: "Merk",
        Cc: "Cc",
        Model: "Model",
        Year: "Jaar",
        SelectBrand: "<Kies een merk>",
        SelectCc: "<Kies een cylinderinhoud>",
        SelectModel: "<Kies een model>",
        SelectYear: "<Kies een bouwjaar>",
        ApplicableKits: "Geschikte kits",
        PartNumber: "Artikel",
        FrontSprocket: "Kettingwiel voor",
        RearSprocket: "Kettingwiel achter",
        Teeth: "Vertanding",
        Part: "Artikel",
        Chains: "Ketting",
        Type: "Type",
        Color: "Kleur",
        Length: "Lengte",
        Item: "Artikel",
        EAN: "EAN code",
        Voltage: "Voltage",
        Capacity: "Capaciteit",
        CCA: "Koudstartstroom",
        AGM: "AGM",
        Gel: "Gel",
        Acid: "Zuur",
        Image: "Afbeelding",
        ApplicableBatteries: "Geschikte batterijen",
        Drawing: "Tekening",
        ApplicableFilters: "Geschikte filters",
        Width: "Diepte",
        Height: "Hoogte",
        DryWeight: "Droog gewicht",
        FilledWeight: "Gevuld gewicht",
        AcidVolume: "Zuur volume",
        LayoutDrawing: "Layout",
        ChargePreferred: "Optimale laadstroom",
        ChargeMax: "Maximum laadstroom",
        TerminalTop: "Terminal bovenaanzicht",
        TerminalFront: "Terminal vooraanzicht",
        TerminalSide: "Terminal zijaanzicht",
        Liter: "liter",
        Technology: "Technologie",
        From: "Van",
        To: "Tot",
        Previous: "Vorige",
        Next: "Volgende",
        ApplicationList: "Toepassingslijst",
        Applications: "Toepassingen",
        ChainType: "Kettingtype",
        PitchMm: "Stap",
        PitchWidth: "Breedte",
        Description: "Omschrijving",
        OuterColor: "Kleur",
        Application: "Toepassing",
        FromCC: "Van CC",
        ToCC: "Tot CC",
        BushType: "Bus type",
        PinType: "Pin type",
        RollerDiameter: "Rol diameter",
        PinDiameter: "Pin diameter",
        InternalPlateThickness: "Dikte interne plaat",
        ExternalPlateThickness: "Dikte externe plaat",
        InternalPlateHeight: "Hoogte interne plaat",
        ExternalPlateHeight: "Hoogte externe plaat",
        L1: "L1",
        L2: "L2",
        TensileStrength: "Treksterkte",
        Weight: "Gewicht",
        StandardClip: "Standaard sluitschakel",
        StandardRivet: "Standaard riveer sluitschakel",
        SealType: "Dichting type",
        KgPer100Links: "kg per 100 schakels",
        Close: "Sluiten",
    },
    de: {
        BikeSelect: "Motorradwahl",
        Brand: "Marke",
        Cc: "Hubram",
        Model: "Modell",
        Year: "Jahr",
        SelectBrand: "<Bitte wählen Sie die Marke>",
        SelectCc: "<Bitte wählen Sie der Hubraum>",
        SelectModel: "<Bitte wählen Sie das Modell>",
        SelectYear: "<Bitte wählen Sie das Baujahr>",
        ApplicableKits: "Geeignete Kits",
        PartNumber: "Artikel",
        FrontSprocket: "Ritzel",
        RearSprocket: "Kettenrad",
        Teeth: "Zähne",
        Part: "Teil",
        Chains: "Kette",
        Type: "Typ",
        Color: "Farbe",
        Length: "Länge",
        Item: "Artikel",
        EAN: "EAN Code",
        Voltage: "Spannung",
        Capacity: "Kapazität",
        CCA: "Kaltstartstrom",
        AGM: "AGM",
        Gel: "Gel",
        Acid: "Säure",
        Image: "Bild",
        ApplicableBatteries: "Geeignete Batterien",
        Drawing: "Zeichnung",
        ApplicableFilters: "Geeignete Filter",
        Width: "Tiefe",
        Height: "Höhe",
        DryWeight: "Trockengewicht",
        FilledWeight: "Gewicht gefüllt",
        AcidVolume: "Säurevolumen",
        LayoutDrawing: "Layout",
        ChargePreferred: "Bevorzugter Ladestrom",
        ChargeMax: "Maximaler Ladestrom",
        TerminalTop: "Batteriepol Aufsicht",
        TerminalFront: "Batteriepol Vorderansicht",
        TerminalSide: "Batteriepol Seitenansicht",
        Liter: "Liter",
        Technology: "Technologie",
        From: "Von",
        To: "Bis",
        Previous: "Vorherige",
        Next: "Nächste",
        ApplicationList: "Anwendungsliste",
        Applications: "Anwendungen",
        ChainType: "Ketten Typ",
        PitchMm: "Teilung",
        PitchWidth: "Breite",
        Description: "Umschreibung",
        OuterColor: "Farbe",
        Application: "Anwendung",
        FromCC: "Von Hubraum",
        ToCC: "Bis Hubraum",
        BushType: "Buchse Typ",
        PinType: "Bolzen Typ",
        RollerDiameter: "Walzendurchmesser",
        PinDiameter: "Bolzendurchmesser",
        InternalPlateThickness: "Dicke interne Platte",
        ExternalPlateThickness: "Dicke externe Platte",
        InternalPlateHeight: "Höhe interne Platte",
        ExternalPlateHeight: "Höhe externe Platte",
        L1: "L1",
        L2: "L2",
        TensileStrength: "Zugfestigkeit",
        Weight: "Gewicht",
        StandardClip: "Standard Bindegliet",
        StandardRivet: "Standaard Niet",
        SealType: "Dichtung Typ",
        KgPer100Links: "kg pro 100 Glieder",
        Close: "Schließen",
    },
    fr: {
        BikeSelect: "Choisissez une moto",
        Brand: "Marque",
        Cc: "Cylindrée",
        Model: "Modèle",
        Year: "Année",
        SelectBrand: "<S.v.p. choisir une marque>",
        SelectCc: "<S.v.p. choisir une cylindrée>",
        SelectModel: "<S.v.p. choisir un modèle>",
        SelectYear: "<S.v.p. choisir une année>",
        ApplicableKits: "Kits possible",
        PartNumber: "Article",
        FrontSprocket: "Pignon",
        RearSprocket: "Couronne",
        Teeth: "Denture",
        Part: "Pièce",
        Chains: "Chaîne",
        Type: "Type",
        Color: "Couleur",
        Length: "Longueur",
        Item: "Article",
        EAN: "Code EAN",
        Voltage: "Voltage",
        Capacity: "Capacité",
        CCA: "Courant de démarrage à froid",
        AGM: "AGM",
        Gel: "Gel",
        Acid: "Acide",
        Image: "Image",
        ApplicableBatteries: "Batteries possibles",
        Drawing: "Vignette",
        ApplicableFilters: "Filtres possibles",
        Width: "Profondeur",
        Height: "Hauteur",
        DryWeight: "Poids á sec",
        FilledWeight: "Poids rempli",
        AcidVolume: "Volume d'acide",
        LayoutDrawing: "Disposition",
        ChargePreferred: "Courant de charge normal",
        ChargeMax: "Courant de charge maximum",
        TerminalTop: "Borne, vue de dessus",
        TerminalFront: "Borne, vue de face",
        TerminalSide: "Borne, vue de côté",
        Liter: "litre",
        Technology: "Technologie",
        From: "De",
        To: "À",
        Previous: "Précédent",
        Next: "Suivant",
        ApplicationList: "Liste des applications",
        Applications: "Applications",
        ChainType: "Type de chaîne",
        PitchMm: "Pas",
        PitchWidth: "Largeur",
        Description: "Dénomination",
        OuterColor: "Couleur",
        Application: "Application",
        FromCC: "De cylindrée",
        ToCC: "A cylindrée",
        BushType: "Type de la bague",
        PinType: "Type de la goupille",
        RollerDiameter: "Diamètre rouleau",
        PinDiameter: "Diamètre de la goupille",
        InternalPlateThickness: "Épaisseur de la plaque interne",
        ExternalPlateThickness: "Épaisseur de la plaque externe",
        InternalPlateHeight: "Hauteur de la plaque interne",
        ExternalPlateHeight: "Hauteur de la plaque externe",
        L1: "L1",
        L2: "L2",
        TensileStrength: "Résistance à la traction",
        Weight: "Poids",
        StandardClip: "Attache rapide standard",
        StandardRivet: "Maillon standard",
        SealType: "Type de joint",
        KgPer100Links: "kg par 100 maillons",
        Close: "Fermer",
    },
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitstate_1 = __webpack_require__(25);
var KitModel = /** @class */ (function () {
    function KitModel() {
        this.CurrentState = kitstate_1.DefaultKitState;
    }
    return KitModel;
}());
exports.KitModel = KitModel;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(4);
var BikeModel = /** @class */ (function () {
    function BikeModel() {
        this.brands = [];
        this.selectedBrand = "";
        this.ccs = [];
        this.selectedCc = "";
        this.models = [];
        this.selectedModel = "";
        this.years = [];
        this.selectedYear = "";
    }
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "brands", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "selectedBrand", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "ccs", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "selectedCc", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "models", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "selectedModel", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "years", void 0);
    __decorate([
        mobx_1.observable
    ], BikeModel.prototype, "selectedYear", void 0);
    return BikeModel;
}());
exports.BikeModel = BikeModel;
exports.default = BikeModel;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BatteryModel = /** @class */ (function () {
    function BatteryModel() {
    }
    return BatteryModel;
}());
exports.BatteryModel = BatteryModel;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterModel = /** @class */ (function () {
    function FilterModel() {
    }
    return FilterModel;
}());
exports.FilterModel = FilterModel;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BikeReverseModel = /** @class */ (function () {
    function BikeReverseModel() {
    }
    return BikeReverseModel;
}());
exports.BikeReverseModel = BikeReverseModel;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChainInfoModel = /** @class */ (function () {
    function ChainInfoModel() {
    }
    return ChainInfoModel;
}());
exports.ChainInfoModel = ChainInfoModel;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(6);
var PartService = /** @class */ (function () {
    function PartService() {
    }
    PartService.GetKits = function (partBrands, bikeId, language, done) {
        if (language === void 0) { language = "en"; }
        PartService.Get("https://service.afam.com/api/applications/" + partBrands + "/bike/" + bikeId + "/" + language, done, []);
    };
    PartService.GetBatteries = function (partBrands, bikeId, language, done) {
        if (language === void 0) { language = "en"; }
        PartService.Get("https://service.afam.com/api/applications/" + partBrands + "/bike/" + bikeId + "/" + language, done, []);
    };
    PartService.GetFilters = function (partBrands, bikeId, language, done) {
        if (language === void 0) { language = "en"; }
        PartService.Get("https://service.afam.com/api/applications/" + partBrands + "/bike/" + bikeId + "/" + language, done, []);
    };
    PartService.Get = function (URL, done, errorValue) {
        axios_1.default
            .get(URL)
            .then(function (response) {
            done(response.data);
        })
            .catch(function (error) { return done(errorValue); });
    };
    return PartService;
}());
exports.PartService = PartService;


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(6);
var BikeService = /** @class */ (function () {
    function BikeService() {
    }
    BikeService.GetBrands = function (parts, bike, done) {
        BikeService.Get("https://service.afam.com/api/applications/" + parts, done, []);
    };
    BikeService.GetCCs = function (parts, bike, done) {
        BikeService.Get("https://service.afam.com/api/applications/" + parts + "?brand=" + bike.selectedBrand, done, []);
    };
    BikeService.GetModels = function (parts, bike, done) {
        BikeService.Get("https://service.afam.com/api/applications/" + parts + "?brand=" + bike.selectedBrand + "&cc=" + bike.selectedCc, done, []);
    };
    BikeService.GetYears = function (parts, bike, done) {
        BikeService.Get("https://service.afam.com/api/applications/" + parts + "?brand=" + bike.selectedBrand + "&cc=" + bike.selectedCc + "&model=" + bike.selectedModel, done, []);
    };
    BikeService.GetBikes = function (parts, bike, language, done) {
        if (language === void 0) { language = "en"; }
        BikeService.Get("https://service.afam.com/api/applications/" + parts + "/bikes?brand=" + bike.selectedBrand + "&cc=" + bike.selectedCc + "&model=" + bike.selectedModel + "&year=" + bike.selectedYear + "&language=" + language, done, []);
    };
    BikeService.Get = function (URL, done, errorValue) {
        axios_1.default
            .get(URL)
            .then(function (response) {
            done(response.data);
        })
            .catch(function (error) { return done(errorValue); });
    };
    return BikeService;
}());
exports.BikeService = BikeService;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(6);
var ReverseService = /** @class */ (function () {
    function ReverseService() {
    }
    ReverseService.GetBikes = function (partid, done) {
        ReverseService.Get("https://service.afam.com/api/reverse/" + partid, done, []);
    };
    ReverseService.Get = function (URL, done, errorValue) {
        axios_1.default
            .get(URL)
            .then(function (response) {
            done(response.data);
        })
            .catch(function (error) { return done(errorValue); });
    };
    return ReverseService;
}());
exports.ReverseService = ReverseService;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(6);
var InfoService = /** @class */ (function () {
    function InfoService() {
    }
    InfoService.GetChainInfo = function (chainName, language, done) {
        if (language === void 0) { language = "en"; }
        InfoService.Get("https://service.afam.com/api/info/chain/" + chainName + "/" + language, done, undefined);
    };
    InfoService.Get = function (URL, done, errorValue) {
        axios_1.default
            .get(URL)
            .then(function (response) {
            done(response.data);
        })
            .catch(function (error) { return done(errorValue); });
    };
    return InfoService;
}());
exports.InfoService = InfoService;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PartBrands;
(function (PartBrands) {
    PartBrands[PartBrands["AFAM"] = 1] = "AFAM";
    PartBrands[PartBrands["DC"] = 2] = "DC";
    PartBrands[PartBrands["Threed"] = 4] = "Threed";
    PartBrands[PartBrands["Shido"] = 8] = "Shido";
    PartBrands[PartBrands["Nitro"] = 16] = "Nitro";
    PartBrands[PartBrands["Yuasa"] = 32] = "Yuasa";
    PartBrands[PartBrands["Ison"] = 64] = "Ison";
    PartBrands[PartBrands["EBCBrakes"] = 128] = "EBCBrakes";
    PartBrands[PartBrands["EBCClutches"] = 256] = "EBCClutches";
    PartBrands[PartBrands["NGK"] = 512] = "NGK";
})(PartBrands = exports.PartBrands || (exports.PartBrands = {}));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bikeselect_1 = __webpack_require__(104);
exports.BikeSelect = bikeselect_1.BikeSelect;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var bikeselect_row_1 = __webpack_require__(105);
/**
 * Allow the user to select a specific motorbike
 */
var BikeSelect = /** @class */ (function (_super) {
    __extends(BikeSelect, _super);
    function BikeSelect(props) {
        return _super.call(this, props) || this;
    }
    BikeSelect.prototype.render = function () {
        var store = this.props.store;
        var bike = store.bike;
        var poly = this.props.store.appStore.polyglot;
        return (React.createElement("div", null,
            React.createElement("h2", null, poly.t("BikeSelect")),
            React.createElement("div", { className: "bike-select-container" },
                React.createElement(bikeselect_row_1.BikeSelectRow, { items: bike.brands, label: poly.t("Brand"), selectedOption: bike.selectedBrand, signalOptionChange: store.selectBrand }),
                React.createElement(bikeselect_row_1.BikeSelectRow, { items: bike.ccs, label: poly.t("Cc"), selectedOption: bike.selectedCc, signalOptionChange: store.selectCc }),
                React.createElement(bikeselect_row_1.BikeSelectRow, { items: bike.models, label: poly.t("Model"), selectedOption: bike.selectedModel, signalOptionChange: store.selectModel }),
                React.createElement(bikeselect_row_1.BikeSelectRow, { items: bike.years, label: poly.t("Year"), selectedOption: bike.selectedYear, signalOptionChange: store.selectYear }))));
    };
    BikeSelect = __decorate([
        mobx_react_1.observer
    ], BikeSelect);
    return BikeSelect;
}(React.Component));
exports.BikeSelect = BikeSelect;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
/**
 * Allow the user to select a specific motorbike
 */
var BikeSelectRow = /** @class */ (function (_super) {
    __extends(BikeSelectRow, _super);
    function BikeSelectRow(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelectChange = function (event) {
            _this.props.signalOptionChange(event.currentTarget.value);
        };
        return _this;
    }
    BikeSelectRow.prototype.render = function () {
        var select = null;
        var selectOptions = null;
        var span = null;
        if (this.props.items.length > 0) {
            selectOptions = this.props.items.map(function (b) { return React.createElement("option", { key: b, value: b }, b); });
            var selectClass = "";
            var spanClass = "";
            if (this.props.items.length === 1) {
                selectClass = "bike-select-cell-none";
                spanClass = "bike-select-cell";
            }
            else {
                selectClass = "bike-select-cell";
                spanClass = "bike-select-cell-none";
            }
            select =
                React.createElement("select", { className: selectClass, value: this.props.selectedOption, onChange: this.handleSelectChange }, selectOptions);
            span = React.createElement("span", { className: spanClass }, this.props.items[0]);
            return (React.createElement("div", { className: "bike-select-row" },
                React.createElement("div", { className: "bike-select-cell" },
                    React.createElement("span", null, this.props.label)),
                React.createElement("div", { className: "bike-select-cell" },
                    select,
                    span)));
        }
        else {
            return null;
        }
    };
    BikeSelectRow = __decorate([
        mobx_react_1.observer
    ], BikeSelectRow);
    return BikeSelectRow;
}(React.Component));
exports.BikeSelectRow = BikeSelectRow;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitlist_1 = __webpack_require__(107);
exports.KitList = kitlist_1.KitList;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var kit_1 = __webpack_require__(108);
var common_1 = __webpack_require__(15);
var chaininfomodal_1 = __webpack_require__(122);
/**
 * Container to display a list of kits
 */
var KitList = /** @class */ (function (_super) {
    __extends(KitList, _super);
    function KitList(props) {
        return _super.call(this, props) || this;
    }
    KitList.prototype.render = function () {
        var _this = this;
        if (this.props.store.hasKits) {
            var kitComponents = null;
            var kits = this.props.store.kits;
            if (kits) {
                kitComponents = kits.map(function (s, i) {
                    return React.createElement(kit_1.Kit, { key: "kit_" + s.PartId, kit: s, store: _this.props.store });
                });
            }
            return (React.createElement("div", { className: "kit-table-container" },
                React.createElement("h2", null, this.props.store.polyglot.t("ApplicableKits")),
                kitComponents,
                React.createElement(common_1.ImageModal, { imageUrl: this.props.store.SprocketImageUrl, show: this.props.store.SprocketImageModalVisible, onHide: function () { _this.props.store.HideSprocketImage(); }, modalId: "SprocketImageModal", imageId: "SprocketModalImage", title: this.props.store.SprocketImageTitle, closeText: this.props.store.polyglot.t("Close") }),
                React.createElement(common_1.ImageModal, { imageUrl: this.props.store.ChainImageUrl, show: this.props.store.ChainImageModalVisible, onHide: function () { _this.props.store.HideChainImage(); }, modalId: "ChainImageModal", imageId: "ChainModalImage", title: this.props.store.ChainImageTitle, closeText: this.props.store.polyglot.t("Close") }),
                React.createElement(chaininfomodal_1.ChainInfoModal, { store: this.props.store, info: this.props.store.ChainInfo, show: this.props.store.ChainInfoModalVisible, onHide: this.props.store.HideChainInfo })));
        }
        else {
            return null;
        }
    };
    KitList = __decorate([
        mobx_react_1.observer
    ], KitList);
    return KitList;
}(React.Component));
exports.KitList = KitList;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var kitbom_1 = __webpack_require__(109);
/**
 * This component renders a single kit
 * It displays the kit type, kit name and kit components (through a KitBom child component)
 */
var Kit = /** @class */ (function (_super) {
    __extends(Kit, _super);
    function Kit(props, _a) {
        return _super.call(this, props) || this;
    }
    Kit.prototype.render = function () {
        var kit = this.props.kit;
        return (React.createElement("div", { className: "kit-table-row" },
            React.createElement("div", { className: "kit-table-cell" },
                React.createElement("div", { className: "kit-title" }, kit.KitType)),
            React.createElement("div", { className: "kit-table-cell" },
                React.createElement("div", { className: "kit-table-kitpart" },
                    this.props.store.polyglot.t("PartNumber"),
                    ": ",
                    React.createElement("span", { className: "kit-table-kitname" }, kit.KitName)),
                React.createElement("div", { className: "kit-table-description" }, kit.Description),
                React.createElement(kitbom_1.KitBom, { key: "kitbom_" + kit.PartId, kit: kit, store: this.props.store }))));
    };
    Kit = __decorate([
        mobx_react_1.observer
    ], Kit);
    return Kit;
}(React.Component));
exports.Kit = Kit;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var chain_1 = __webpack_require__(110);
var sprocket_1 = __webpack_require__(111);
/**
 * A container for the parts that make up a kit: front sprocket, rear sprocket and chain
 */
var KitBom = /** @class */ (function (_super) {
    __extends(KitBom, _super);
    function KitBom(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: (window.innerWidth < 800),
        };
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        return _this;
    }
    KitBom.prototype.componentDidMount = function () {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    };
    KitBom.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.updateWindowDimensions);
    };
    KitBom.prototype.render = function () {
        if (this.state.collapsed) {
            return this.renderCollapsed();
        }
        else {
            return this.renderDefault();
        }
    };
    KitBom.prototype.updateWindowDimensions = function () {
        this.setState({
            collapsed: window.innerWidth < 800,
        });
    };
    KitBom.prototype.renderCollapsed = function () {
        var poly = this.props.store.polyglot;
        return (React.createElement("div", { className: "kit-parts" },
            React.createElement("div", { className: "kitpart-table" },
                React.createElement("div", { className: "kitpart-body" },
                    React.createElement("div", { className: "kitpart-row" },
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("FrontSprocket")),
                        React.createElement(sprocket_1.Sprocket, { kit: this.props.kit, store: this.props.store, side: "front" })),
                    React.createElement("div", { className: "kitpart-row" },
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("Chains")),
                        React.createElement(chain_1.Chain, { kit: this.props.kit, store: this.props.store })),
                    React.createElement("div", { className: "kitpart-row" },
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("RearSprocket")),
                        React.createElement(sprocket_1.Sprocket, { kit: this.props.kit, store: this.props.store, side: "rear" }))))));
    };
    KitBom.prototype.renderDefault = function () {
        var poly = this.props.store.polyglot;
        return (React.createElement("div", { className: "kit-parts" },
            React.createElement("div", { className: "kitpart-table" },
                React.createElement("div", { className: "kitpart-header" },
                    React.createElement("div", { className: "kitpart-row" },
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("FrontSprocket")),
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("Chains")),
                        React.createElement("div", { className: "kitpart-component-header" }, poly.t("RearSprocket")))),
                React.createElement("div", { className: "kitpart-body" },
                    React.createElement("div", { className: "kitpart-row" },
                        React.createElement(sprocket_1.Sprocket, { kit: this.props.kit, store: this.props.store, side: "front" }),
                        React.createElement(chain_1.Chain, { kit: this.props.kit, store: this.props.store }),
                        React.createElement(sprocket_1.Sprocket, { kit: this.props.kit, store: this.props.store, side: "rear" }))))));
    };
    KitBom = __decorate([
        mobx_react_1.observer
    ], KitBom);
    return KitBom;
}(React.Component));
exports.KitBom = KitBom;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
/**
 * A component displaying the chain that is part of a kit.
 * It allows the user to select a chain type and color where relevant
 */
var Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The user selected a new type of chain
         */
        _this.handleTypeChange = function (event) {
            var selectedColor = _this.props.kit.CurrentState.SelectedChain.ChainColor;
            var selectedType = event.currentTarget.value;
            var chains = _this.props.kit.CurrentState.CurrentChains;
            var newChain;
            /* Try to find a chain with the selected type and the color that is part of the props (i.e. the default color) */
            var typecolorchains = [];
            for (var _i = 0, chains_1 = chains; _i < chains_1.length; _i++) {
                var chain = chains_1[_i];
                // If the chain has the required type and color
                if (chain.ChainType === selectedType && chain.ChainColor === selectedColor) {
                    // And it is not yet present in the output array
                    if (!typecolorchains.find(function (p) { return (p.ChainType === selectedType && p.ChainColor === selectedColor); })) {
                        // Then add it to the output array
                        typecolorchains.push(chain);
                    }
                }
            }
            if (typecolorchains.length > 0) {
                newChain = typecolorchains[0];
            }
            /* If no chain could be found, select the first chain of the selected type */
            if (!newChain) {
                var typechains = [];
                for (var _a = 0, chains_2 = chains; _a < chains_2.length; _a++) {
                    var chain = chains_2[_a];
                    if (chain.ChainType === selectedType) {
                        if (!typechains.find(function (p) { return p.ChainType === selectedType; })) {
                            typechains.push(chain);
                        }
                    }
                }
                if (typechains.length > 0) {
                    newChain = typechains[0];
                }
            }
            /* If still no chain could be found, pick the first one */
            if (!newChain) {
                newChain = chains[0];
            }
            /* Set thumbnail back to visible */
            _this.setState({
                thumbnailVisible: true,
            });
            /* Signal the parent component that the chain was changed */
            _this.props.store.handleChainChange(_this.props.kit, newChain);
        };
        /**
         * The user selected a new chain color
         */
        _this.handleColorChange = function (event) {
            var selectedColor = event.currentTarget.value;
            var selectedType = _this.props.kit.CurrentState.SelectedChain.ChainType;
            var chains = _this.props.kit.CurrentState.CurrentChains;
            var newChain;
            /* Try to find a chain with the selected type and the color that is part of the props (i.e. the default color) */
            var typecolorchains = [];
            for (var _i = 0, chains_3 = chains; _i < chains_3.length; _i++) {
                var chain = chains_3[_i];
                if (chain.ChainType === selectedType && chain.ChainColor === selectedColor) {
                    if (!typecolorchains.find(function (p) { return p.ChainType === selectedType && p.ChainColor === selectedColor; })) {
                        typecolorchains.push(chain);
                    }
                }
            }
            if (typecolorchains.length > 0) {
                newChain = typecolorchains[0];
            }
            /* If no chain could be found, pick the first one */
            if (!newChain) {
                newChain = chains[0];
            }
            /* Set thumbnail back to visible */
            _this.setState({
                thumbnailVisible: true,
            });
            /* Signal the parent component that the chain was changed */
            _this.props.store.handleChainChange(_this.props.kit, newChain);
        };
        _this.state = {
            thumbnailVisible: true,
        };
        return _this;
    }
    Chain.prototype.render = function () {
        var _this = this;
        var poly = this.props.store.polyglot;
        var selectedChain = this.props.kit.CurrentState.SelectedChain;
        var chains = this.props.kit.CurrentState.CurrentChains;
        var chainTypes = this.getTypes(chains);
        var chainColors = this.getColors(chains, selectedChain.ChainType);
        var chainTypeOptions = null;
        var chainTypeSingle = null;
        var chainTypeSelect = null;
        var chainColorOptions = null;
        var chainColorSingle = null;
        var chainColorSelect = null;
        /*
           Build the select element to display the chain type
           Use a span instead of a select if there is only one item
        */
        if (chainTypes.length > 1) {
            chainTypeOptions = chainTypes.map(function (t) { return React.createElement("option", { key: t, value: t }, t); });
            chainTypeSelect =
                React.createElement("select", { className: "kitpart-component-cell-value kitpart-inline", value: selectedChain.ChainType, onChange: this.handleTypeChange }, chainTypeOptions);
        }
        else {
            var single = chainTypes[0];
            chainTypeSingle =
                React.createElement("div", { className: "kitpart-component-cell-value kitpart-inline" }, single);
        }
        /*
           Build the select element to display the chain color
           Use a span instead of a select if there is only one color
        */
        if (chainColors.length > 1) {
            chainColorOptions = chainColors.map(function (t) { return React.createElement("option", { key: t, value: t }, t); });
            chainColorSelect =
                React.createElement("select", { className: "kitpart-component-cell-value kitpart-inline", value: selectedChain.ChainColor, onChange: this.handleColorChange }, chainColorOptions);
        }
        else {
            var single = chainColors[0];
            chainColorSingle =
                React.createElement("div", { className: "kitpart-component-cell-value kitpart-inline" }, single);
        }
        var imageURL = "https://service.afam.com/webshop/images/chains/" + selectedChain.ChainBaseName + ".jpg";
        return (React.createElement("div", { className: "kitpart-component-cell" },
            React.createElement("div", { className: "kitpart-block" },
                React.createElement("div", { className: "kitpart-block" },
                    React.createElement("div", { className: "kitpart-inline-block" },
                        React.createElement("div", { className: "kitpart-component-cell-label kitpart-inline" },
                            poly.t("Type"),
                            ":"),
                        chainTypeSelect,
                        chainTypeSingle),
                    React.createElement("div", { className: "kitpart-inline-block" },
                        React.createElement("div", { className: "kitpart-component-cell-label kitpart-inline" },
                            poly.t("Color"),
                            ":"),
                        chainColorSelect,
                        chainColorSingle),
                    React.createElement("div", { className: "kitpart-inline-block" },
                        React.createElement("div", { className: "kitpart-component-cell-label kitpart-inline" },
                            poly.t("Length"),
                            ":"),
                        React.createElement("div", { className: "kitpart-component-cell-value kitpart-inline" }, selectedChain.Length))),
                React.createElement("div", { className: "kitpart-block" },
                    React.createElement("div", { className: "kitpart-component-cell-label kitpart-inline" },
                        poly.t("Part"),
                        ":"),
                    React.createElement("div", { className: "kitpart-component-cell-value kitpart-partname kitpart-inline" }, selectedChain.FullName),
                    React.createElement("a", { href: "#", onClick: function (e) { _this.props.store.ShowChainInfo(selectedChain); e.preventDefault(); } }, "\u24D8")),
                this.thumbnail(selectedChain, imageURL))));
    };
    Chain.prototype.ImageError = function (item) {
        this.setState({
            thumbnailVisible: false,
        });
    };
    Chain.prototype.thumbnail = function (chain, imageURL) {
        var _this = this;
        if (this.state.thumbnailVisible) {
            return (React.createElement("div", { className: "kitpart-thumbnail kitpart-block" },
                React.createElement("a", { href: "#" },
                    React.createElement("img", { src: imageURL, className: "chain-thumbnail", onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowChainImage(chain, imageURL); e.preventDefault(); } }))));
        }
        else {
            return null;
        }
    };
    /**
     * Extract the possible chain types from the list of chains
     */
    Chain.prototype.getTypes = function (chains) {
        var types = [];
        var _loop_1 = function (chain) {
            if (!types.find(function (p) { return p === chain.ChainType; })) {
                if (chain.ChainType !== "") {
                    types.push(chain.ChainType);
                }
            }
        };
        for (var _i = 0, chains_4 = chains; _i < chains_4.length; _i++) {
            var chain = chains_4[_i];
            _loop_1(chain);
        }
        return types;
    };
    /**
     * Extract the possible chain colors for a specific type of chain
     * @param {string} atype - The type to filter on
     */
    Chain.prototype.getColors = function (chains, atype) {
        var colors = [];
        var _loop_2 = function (chain) {
            if (chain.ChainType === atype) {
                if (!colors.find(function (p) { return p === chain.ChainColor; })) {
                    if (chain.ChainColor !== "") {
                        colors.push(chain.ChainColor);
                    }
                }
            }
        };
        for (var _i = 0, chains_5 = chains; _i < chains_5.length; _i++) {
            var chain = chains_5[_i];
            _loop_2(chain);
        }
        return colors;
    };
    Chain = __decorate([
        mobx_react_1.observer
    ], Chain);
    return Chain;
}(React.Component));
exports.Chain = Chain;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
/**
 * A component displaying a sprocket that is part of a kit
 * It allows the user to select the number of teeth
 */
var Sprocket = /** @class */ (function (_super) {
    __extends(Sprocket, _super);
    function Sprocket(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Inform the parent component that the user selected a different number of teeth (i.e. a different sprocket)
         */
        _this.handleChange = function (event) {
            _this.setState({
                thumbnailVisible: true,
            });
            var currentSprocketName = event.currentTarget.value;
            var sprockets = (_this.props.side === "front") ? _this.props.kit.FrontSprockets : _this.props.kit.RearSprockets;
            var selectedSprocket = sprockets.find(function (s) { return s.SprocketName === currentSprocketName; }) || sprockets[0];
            _this.props.store.handleSprocketChange(_this.props.kit, _this.props.side, selectedSprocket);
        };
        _this.state = {
            thumbnailVisible: true,
        };
        return _this;
    }
    Sprocket.prototype.render = function () {
        var sprockets = null;
        var selectedSprocket = null;
        var poly = this.props.store.appStore.polyglot;
        if (this.props.side === "front") {
            sprockets = this.props.kit.FrontSprockets;
            selectedSprocket = this.props.kit.CurrentState.SelectedFrontSprocket;
        }
        else {
            sprockets = this.props.kit.RearSprockets;
            selectedSprocket = this.props.kit.CurrentState.SelectedRearSprocket;
        }
        var sprocketOptions = sprockets.map(function (s) {
            return React.createElement("option", { key: s.PartId, value: s.SprocketName }, s.Teeth);
        });
        var imageURL = "https://service.afam.com/webshop/images/sprockets/3d/vignettes/" + selectedSprocket.SprocketName + ".jpg";
        return (React.createElement("div", { className: "kitpart-component-cell" },
            React.createElement("div", { className: "kitpart-block" },
                React.createElement("div", { className: "kitpart-inline" },
                    React.createElement("span", { className: "kitpart-component-cell-label kitpart-inline" },
                        poly.t("Teeth"),
                        ":"),
                    React.createElement("select", { className: "kitpart-component-cell-value kitpart-inline", value: selectedSprocket.SprocketName, onChange: this.handleChange }, sprocketOptions)),
                React.createElement("div", null,
                    React.createElement("div", { className: "kitpart-component-cell-label kitpart-inline" },
                        poly.t("Part"),
                        ":"),
                    React.createElement("div", { className: "kitpart-partname kitpart-component-cell-value kitpart-inline" }, selectedSprocket.SprocketName)),
                this.thumbnail(selectedSprocket, imageURL))));
    };
    Sprocket.prototype.ImageError = function (item) {
        this.setState({
            thumbnailVisible: false,
        });
    };
    Sprocket.prototype.thumbnail = function (sprocket, imageURL) {
        var _this = this;
        if (this.state.thumbnailVisible) {
            return (React.createElement("div", { className: "kitpart-thumbnail kitpart-block" },
                React.createElement("a", { href: "#" },
                    React.createElement("img", { src: imageURL, className: "sprocket-thumbnail", onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowSprocketImage(sprocket, imageURL); e.preventDefault(); } }))));
        }
        else {
            return null;
        }
    };
    Sprocket = __decorate([
        mobx_react_1.observer
    ], Sprocket);
    return Sprocket;
}(React.Component));
exports.Sprocket = Sprocket;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ImageModal = /** @class */ (function (_super) {
    __extends(ImageModal, _super);
    function ImageModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageModal.prototype.render = function () {
        var _this = this;
        if (this.props.show) {
            document.body.classList.add("modal-showing");
            return (React.createElement("div", { id: this.props.modalId, className: "modal_background" },
                React.createElement("div", { className: "modal_content" },
                    React.createElement("div", { className: "modal_header", onClick: function (e) {
                            _this.props.onHide();
                        } },
                        React.createElement("div", { className: "modal_title" }, this.props.title),
                        React.createElement("button", { type: "button", className: "close", onClick: function (e) {
                                _this.props.onHide();
                            } }, "\u00D7")),
                    React.createElement("div", { className: "modal_body" },
                        React.createElement("img", { id: this.props.imageId, src: this.props.imageUrl, className: "modal_image" })),
                    React.createElement("div", { className: "modal_footer" },
                        React.createElement("button", { type: "button", className: "close_button", onClick: function (e) {
                                _this.props.onHide();
                            } }, this.props.closeText)))));
        }
        else {
            return null;
        }
    };
    return ImageModal;
}(React.Component));
exports.ImageModal = ImageModal;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var react_paginate_1 = __webpack_require__(36);
var ReverseModal = /** @class */ (function (_super) {
    __extends(ReverseModal, _super);
    function ReverseModal(props) {
        var _this = _super.call(this, props) || this;
        _this.page_size = 20;
        _this.state = {
            selectedPage: 0,
        };
        _this.updatePage = _this.updatePage.bind(_this);
        return _this;
    }
    ReverseModal.prototype.updatePage = function (data) {
        this.setState({
            selectedPage: data.selected,
        });
    };
    ReverseModal.prototype.render = function () {
        var _this = this;
        if (this.props.show) {
            document.body.classList.add("modal-showing");
            var bikelist = null;
            var allBikes = this.props.store.ReversedBikes;
            var pageCount = Math.ceil(allBikes.length / this.page_size);
            var bikesToDisplay = allBikes.slice(this.state.selectedPage * this.page_size, (this.state.selectedPage + 1) * this.page_size);
            if (bikesToDisplay) {
                bikelist = bikesToDisplay.map(function (b, i) {
                    return React.createElement("div", { key: "reverse_" + i, className: "bike-reverse-row" },
                        React.createElement("div", { className: "bike-reverse-cell cell-left" }, b.Brand),
                        React.createElement("div", { className: "bike-reverse-cell cell-center" }, b.Cc),
                        React.createElement("div", { className: "bike-reverse-cell cell-left" }, b.Model),
                        React.createElement("div", { className: "bike-reverse-cell cell-center" }, b.From),
                        React.createElement("div", { className: "bike-reverse-cell cell-center" }, b.To));
                });
            }
            var poly = this.props.store.polyglot;
            return (React.createElement("div", { className: "modal_background" },
                React.createElement("div", { className: "modal_content" },
                    React.createElement("div", { className: "modal_header", onClick: function (e) {
                            _this.props.onHide();
                        } },
                        React.createElement("div", { className: "modal_title" }, this.props.title),
                        React.createElement("button", { type: "button", className: "close", onClick: function (e) {
                                _this.props.onHide();
                            } }, "\u00D7")),
                    React.createElement("div", { className: "modal_body" },
                        React.createElement("div", { className: "bike-reverse-table" },
                            React.createElement("div", { className: "bike-reverse-row" },
                                React.createElement("div", { className: "bike-reverse-header cell-center" }, poly.t("Brand")),
                                React.createElement("div", { className: "bike-reverse-header cell-center" }, poly.t("Cc")),
                                React.createElement("div", { className: "bike-reverse-header cell-center" }, poly.t("Model")),
                                React.createElement("div", { className: "bike-reverse-header cell-center" }, poly.t("From")),
                                React.createElement("div", { className: "bike-reverse-header cell-center" }, poly.t("To"))),
                            bikelist,
                            React.createElement("div", { className: "paginator" },
                                React.createElement(react_paginate_1.default, { previousLabel: poly.t("Previous"), nextLabel: poly.t("Next"), breakLabel: "...", breakClassName: "break-me", pageCount: pageCount, marginPagesDisplayed: 2, pageRangeDisplayed: 3, onPageChange: this.updatePage, activeClassName: "paginator-active", initialPage: 0, hrefBuilder: function () { return "#"; } })))),
                    React.createElement("div", { className: "modal_footer" },
                        React.createElement("button", { type: "button", className: "close_button", onClick: function (e) {
                                _this.props.onHide();
                            } }, poly.t("Close"))))));
        }
        else {
            return null;
        }
    };
    ReverseModal = __decorate([
        mobx_react_1.observer
    ], ReverseModal);
    return ReverseModal;
}(React.Component));
exports.ReverseModal = ReverseModal;


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var ChainInfoModal = /** @class */ (function (_super) {
    __extends(ChainInfoModal, _super);
    function ChainInfoModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChainInfoModal.prototype.render = function () {
        var _this = this;
        if (this.props.show && this.props.info) {
            var info = this.props.info;
            var poly = this.props.store.polyglot;
            document.body.classList.add("modal-showing");
            return (React.createElement("div", { className: "modal_background" },
                React.createElement("div", { className: "modal_content" },
                    React.createElement("div", { className: "modal_header", onClick: function (e) {
                            _this.props.onHide();
                        } },
                        React.createElement("div", { className: "modal_title" }, info.ChainName),
                        React.createElement("button", { type: "button", className: "close", onClick: function (e) {
                                _this.props.onHide();
                            } }, "\u00D7")),
                    React.createElement("div", { className: "modal_body" },
                        React.createElement("div", { className: "chain-info" },
                            React.createElement("div", { className: "chain-info-left" },
                                React.createElement("div", { id: "chain-info-table" },
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("ChainType"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoPitch" }, info.Pitch),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("Description"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoDescription" }, info.Description),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("OuterColor"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoOuterColor" }, info.OuterColor),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("PitchMm"),
                                            " (P):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoPitchMm" }, info.PitchMm),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("PitchWidth"),
                                            " (W):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoPitchWidth" }, info.PitchWidth),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("BushType"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoBush" }, info.Bush),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("PinType"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoPin" }, info.Pin),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("RollerDiameter"),
                                            " (R):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoRollerDiameter" }, info.RollerDiameter),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("PinDiameter"),
                                            " (D):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoPinDiameter" }, info.PinDiameter),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("InternalPlateThickness"),
                                            " (T):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoInternalPlateThickness" }, info.InternalPlateThickness),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("ExternalPlateThickness"),
                                            " (t):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoExternalPlateThickness" }, info.ExternalPlateThickness),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("InternalPlateHeight"),
                                            " (H):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoInternalPlateHeight" }, info.InternalPlateHeight),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("ExternalPlateHeight"),
                                            " (h):"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoExternalPlateHeight" }, info.ExternalPlateHeight),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("L1"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoL1" }, info.L1),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("L2"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoL2" }, info.L2),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "mm")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("TensileStrength"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoTensileStrength" }, info.TensileStrength),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, "daN")),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("Weight"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoWeight" }, info.Weight),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" }, poly.t("KgPer100Links"))),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("StandardClip"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoStandardClip" }, info.StandardClip),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("StandardRivet"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoStandardRivet" }, info.StandardRivet),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })),
                                    React.createElement("div", { className: "chain-info-row" },
                                        React.createElement("div", { className: "chain-info-cell-label cell-right" },
                                            poly.t("SealType"),
                                            ":"),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell cell-right", id: "chainInfoSealType" }, info.SealType),
                                        " ",
                                        React.createElement("div", { className: "chain-info-cell-label" })))),
                            React.createElement("div", { className: "chain-info-right" },
                                React.createElement("div", null,
                                    React.createElement("img", { src: "https://afam.com/wordpress/wp-content/themes/netAfam/afamparts/chain_dim.png" }))))),
                    React.createElement("div", { className: "modal_footer" },
                        React.createElement("button", { type: "button", className: "close_button", onClick: function (e) {
                                _this.props.onHide();
                            } }, poly.t("Close"))))));
        }
        else {
            return null;
        }
    };
    ChainInfoModal = __decorate([
        mobx_react_1.observer
    ], ChainInfoModal);
    return ChainInfoModal;
}(React.Component));
exports.ChainInfoModal = ChainInfoModal;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var batterycontainer_1 = __webpack_require__(124);
exports.BatteryContainer = batterycontainer_1.BatteryContainer;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var batterylist_1 = __webpack_require__(125);
var common_1 = __webpack_require__(15);
var batteryinfomodal_1 = __webpack_require__(126);
/**
 * A container managing a list of batteries
 */
var BatteryContainer = /** @class */ (function (_super) {
    __extends(BatteryContainer, _super);
    function BatteryContainer(props) {
        return _super.call(this, props) || this;
    }
    BatteryContainer.prototype.render = function () {
        var _this = this;
        if (this.props.store.batteries.length !== 0) {
            return (React.createElement("div", null,
                React.createElement(batterylist_1.BatteryList, { store: this.props.store }),
                React.createElement(common_1.ImageModal, { imageUrl: this.props.store.BatteryImageUrl, show: this.props.store.BatteryImageModalVisible, onHide: function () { _this.props.store.HideBatteryImage(); }, modalId: "BatteryModal", imageId: "BatteryModalImage", title: this.props.store.BatteryImageTitle, closeText: this.props.store.polyglot.t("Close") }),
                React.createElement(batteryinfomodal_1.BatteryInfoModal, { store: this.props.store, show: this.props.store.BatteryInfoModalVisible, battery: this.props.store.BatteryInfo, onHide: function () { _this.props.store.HideBatteryInfo(); } }),
                React.createElement(common_1.ReverseModal, { store: this.props.store, onHide: function () { _this.props.store.HideReversedBikes(); }, show: this.props.store.BatteryReverseModalVisible, title: this.props.store.BatteryReverseTitle })));
        }
        else {
            return null;
        }
    };
    BatteryContainer = __decorate([
        mobx_react_1.observer
    ], BatteryContainer);
    return BatteryContainer;
}(React.Component));
exports.BatteryContainer = BatteryContainer;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
/**
 * Container to display a list of batteries
 */
var BatteryList = /** @class */ (function (_super) {
    __extends(BatteryList, _super);
    function BatteryList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: (window.innerWidth < 800),
        };
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        return _this;
    }
    BatteryList.prototype.componentDidMount = function () {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    };
    BatteryList.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.updateWindowDimensions);
    };
    BatteryList.prototype.render = function () {
        if (this.state.collapsed) {
            return this.renderCollapsed();
        }
        else {
            return this.renderDefault();
        }
    };
    BatteryList.prototype.updateWindowDimensions = function () {
        var isCollapsed = (window.innerWidth < 800);
        if (this.state.collapsed != isCollapsed) {
            this.setState({
                collapsed: isCollapsed,
            });
        }
    };
    BatteryList.prototype.ImageError = function (item) {
        if (item) {
            var parent_1 = item.parentElement;
            if (parent_1) {
                parent_1.removeChild(item);
            }
        }
    };
    BatteryList.prototype.renderDefault = function () {
        var _this = this;
        var theParts = null;
        var translate = this.props.store.polyglot;
        var batteries = this.props.store.batteries;
        if (batteries) {
            theParts = batteries.map(function (s, i) {
                return React.createElement("tr", { key: i.toString() },
                    React.createElement("td", { "data-label": "Item", className: "cell-center" }, s.Part),
                    React.createElement("td", { "data-label": "EAN", className: "cell-center" }, s.EAN),
                    React.createElement("td", { "data-label": "Type", className: "cell-center" }, s.BatteryType),
                    React.createElement("td", { "data-label": "Volt", className: "cell-center" },
                        s.Volt,
                        " V"),
                    React.createElement("td", { "data-label": "Capacity", className: "cell-center" },
                        s.Capacity,
                        " Ah"),
                    React.createElement("td", { "data-label": "CCA", className: "cell-center" },
                        s.CCA,
                        " A"),
                    React.createElement("td", { "data-label": "AGM", className: "cell-center" }, s.AGM),
                    React.createElement("td", { "data-label": "Gel", className: "cell-center" }, s.Gel),
                    React.createElement("td", { "data-label": "Acid", className: "cell-center" }, s.Acid),
                    React.createElement("td", { "data-label": "Info", className: "cell-center" },
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { className: "info-image", src: "/images/info.png", onClick: function (e) { _this.props.store.ShowBatteryInfo(s); e.preventDefault(); } }))),
                    React.createElement("td", { "data-label": "Image", className: "cell-center" },
                        React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                            React.createElement("img", { src: s.Photo, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowBatteryImage(s); e.preventDefault(); } }))));
            });
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, translate.t("ApplicableBatteries")),
            React.createElement("table", { className: "part-table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "cell-center" }, translate.t("Item")),
                        React.createElement("th", { className: "cell-center" }, translate.t("EAN")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Technology")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Voltage")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Capacity")),
                        React.createElement("th", { className: "cell-center" }, translate.t("CCA")),
                        React.createElement("th", { className: "cell-center" }, translate.t("AGM")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Gel")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Acid")),
                        React.createElement("th", { className: "cell-center" }, "Info"),
                        React.createElement("th", { className: "cell-center" }, translate.t("Image")))),
                React.createElement("tbody", null, theParts))));
    };
    BatteryList.prototype.renderCollapsed = function () {
        var _this = this;
        var theTables = null;
        var translate = this.props.store.polyglot;
        var batteries = this.props.store.batteries;
        if (batteries) {
            theTables = batteries.map(function (s, i) {
                return React.createElement("table", { className: "part-table collapsed", key: i.toString() },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Item")),
                            React.createElement("td", null, s.Part)),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("EAN")),
                            React.createElement("td", null, s.EAN)),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Technology")),
                            React.createElement("td", { "data-label": "Type" }, s.BatteryType)),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Voltage")),
                            React.createElement("td", { "data-label": "Volt" },
                                s.Volt,
                                " V")),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Capacity")),
                            React.createElement("td", { "data-label": "Capacity" },
                                s.Capacity,
                                " Ah")),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("CCA")),
                            React.createElement("td", { "data-label": "CCA" },
                                s.CCA,
                                " A")),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("AGM")),
                            React.createElement("td", { "data-label": "AGM" }, s.AGM)),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Gel")),
                            React.createElement("td", { "data-label": "Gel" }, s.Gel)),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Acid")),
                            React.createElement("td", { "data-label": "Acid" }, s.Acid)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Info"),
                            React.createElement("td", { "data-label": "Info", className: "cell-center" },
                                React.createElement("a", { href: "#" },
                                    React.createElement("img", { src: "https://afam.com/wp-content/themes/netAfam/afamparts/info.png", onClick: function (e) { _this.props.store.ShowBatteryInfo(s); e.preventDefault(); } })))),
                        React.createElement("tr", null,
                            React.createElement("td", null, translate.t("Image")),
                            React.createElement("td", { "data-label": "Image", className: "cell-center" },
                                React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                                    React.createElement("img", { src: s.Photo, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowBatteryImage(s); e.preventDefault(); } }))))));
            });
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, translate.t("ApplicableBatteries")),
            theTables));
    };
    BatteryList = __decorate([
        mobx_react_1.observer
    ], BatteryList);
    return BatteryList;
}(React.Component));
exports.BatteryList = BatteryList;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var BatteryInfoModal = /** @class */ (function (_super) {
    __extends(BatteryInfoModal, _super);
    function BatteryInfoModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryInfoModal.prototype.render = function () {
        var _this = this;
        if (this.props.show) {
            var battery_1 = this.props.battery;
            var poly = this.props.store.polyglot;
            document.body.classList.add("modal-showing");
            return (React.createElement("div", { className: "modal_background" },
                React.createElement("div", { className: "modal_content" },
                    React.createElement("div", { className: "modal_header", onClick: function (e) {
                            _this.props.onHide();
                        } },
                        React.createElement("div", { className: "modal_title" }, battery_1.Part),
                        React.createElement("button", { type: "button", className: "close", onClick: function (e) {
                                _this.props.onHide();
                            } }, "\u00D7")),
                    React.createElement("div", { className: "modal_body" },
                        React.createElement("div", { className: "battery-info" },
                            React.createElement("div", { className: "battery-info-left" },
                                React.createElement("div", { id: "battery-info-table" },
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Voltage"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoVolt" }, battery_1.Volt),
                                        React.createElement("div", { className: "battery-info-cell" }, "V")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Capacity"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoCapacity" }, battery_1.Capacity),
                                        React.createElement("div", { className: "battery-info-cell" }, "Ah")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("CCA"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoCCA" }, battery_1.CCA),
                                        React.createElement("div", { className: "battery-info-cell" }, "A")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("AGM"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoAGM" }, battery_1.AGM),
                                        React.createElement("div", { className: "battery-info-cell" })),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Gel"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoGEL" }, battery_1.Gel),
                                        React.createElement("div", { className: "battery-info-cell" })),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Length"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoLength" }, battery_1.Length),
                                        React.createElement("div", { className: "battery-info-cell" }, "mm")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Width"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoWidth" }, battery_1.Width),
                                        React.createElement("div", { className: "battery-info-cell" }, "mm")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("Height"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoHeight" }, battery_1.Height),
                                        React.createElement("div", { className: "battery-info-cell" }, "mm")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("DryWeight"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoDryWeight" }, (battery_1.DryWeight == 0) ? "--" : battery_1.DryWeight),
                                        React.createElement("div", { className: "battery-info-cell" }, "kg")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("FilledWeight"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoFilledWeight" }, (battery_1.FilledWeight == 0) ? "--" : battery_1.FilledWeight),
                                        React.createElement("div", { className: "battery-info-cell" }, "kg")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("AcidVolume"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoAcidVolume" }, (battery_1.AcidVolume == 0) ? "--" : battery_1.AcidVolume),
                                        React.createElement("div", { className: "battery-info-cell" }, poly.t("Liter"))),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("ChargePreferred"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoChargePreferred" }, battery_1.ChargePreferred),
                                        React.createElement("div", { className: "battery-info-cell" }, "A")),
                                    React.createElement("div", { className: "battery-info-row" },
                                        React.createElement("div", { className: "battery-info-cell-label cell-right" },
                                            poly.t("ChargeMax"),
                                            ":"),
                                        React.createElement("div", { className: "battery-info-cell cell-right", id: "batterInfoChargeMax" }, battery_1.ChargeMax),
                                        React.createElement("div", { className: "battery-info-cell" }, "A")))),
                            React.createElement("div", { className: "battery-info-right" },
                                React.createElement("div", { className: "battery-info-drawing-row" },
                                    React.createElement("div", { className: "battery-info-cell-label cell-right" }, poly.t("LayoutDrawing")),
                                    React.createElement("img", { src: battery_1.LayoutDrawing, className: "battery-layout-image" })),
                                React.createElement("div", { className: "battery-info-drawing-row" },
                                    React.createElement("div", { className: "battery-info-cell-label cell-right" }, poly.t("TerminalTop")),
                                    React.createElement("img", { src: battery_1.TerminalTop, className: "battery-terminal-image" })),
                                React.createElement("div", { className: "battery-info-drawing-row" },
                                    React.createElement("div", { className: "battery-info-cell-label cell-right" }, poly.t("TerminalFront")),
                                    React.createElement("img", { src: battery_1.TerminalFront, className: "battery-terminal-image" })),
                                React.createElement("div", { className: "battery-info-drawing-row" },
                                    React.createElement("div", { className: "battery-info-cell-label cell-right" }, poly.t("TerminalSide")),
                                    React.createElement("img", { src: battery_1.TerminalSide, className: "battery-terminal-image" })),
                                React.createElement("div", { className: "reverse-link" },
                                    React.createElement("button", { type: "button", onClick: function (e) { _this.props.store.ShowReversedBikes(battery_1); e.preventDefault(); } }, poly.t("ApplicationList")))))),
                    React.createElement("div", { className: "modal_footer" },
                        React.createElement("button", { type: "button", className: "close_button", onClick: function (e) {
                                _this.props.onHide();
                            } }, poly.t("Close"))))));
        }
        else {
            return null;
        }
    };
    BatteryInfoModal = __decorate([
        mobx_react_1.observer
    ], BatteryInfoModal);
    return BatteryInfoModal;
}(React.Component));
exports.BatteryInfoModal = BatteryInfoModal;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filtercontainer_1 = __webpack_require__(128);
exports.FilterContainer = filtercontainer_1.FilterContainer;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
var filterlist_1 = __webpack_require__(129);
var common_1 = __webpack_require__(15);
/**
 * A container managing the state of a list of filters
 */
var FilterContainer = /** @class */ (function (_super) {
    __extends(FilterContainer, _super);
    function FilterContainer(props) {
        return _super.call(this, props) || this;
    }
    FilterContainer.prototype.render = function () {
        var _this = this;
        if (this.props.store.filters.length !== 0) {
            return (React.createElement("div", null,
                React.createElement(filterlist_1.FilterList, { store: this.props.store }),
                React.createElement(common_1.ImageModal, { imageUrl: this.props.store.FilterImageUrl, show: this.props.store.FilterImageModalVisible, onHide: function () { _this.props.store.HideFilterImage(); }, modalId: "FilterImageModal", imageId: "FilterImageModalImage", title: this.props.store.FilterImageTitle, closeText: this.props.store.polyglot.t("Close") }),
                React.createElement(common_1.ImageModal, { imageUrl: this.props.store.FilterDrawingUrl, show: this.props.store.FilterDrawingModalVisible, onHide: function () { _this.props.store.HideFilterDrawing(); }, modalId: "FilterDrawingModal", imageId: "FilterDrawingModalImage", title: this.props.store.FilterImageTitle, closeText: this.props.store.polyglot.t("Close") }),
                React.createElement(common_1.ReverseModal, { store: this.props.store, onHide: function () { _this.props.store.HideReversedBikes(); }, show: this.props.store.FilterReverseModalVisible, title: this.props.store.FilterReverseTitle })));
        }
        else {
            return null;
        }
    };
    FilterContainer = __decorate([
        mobx_react_1.observer
    ], FilterContainer);
    return FilterContainer;
}(React.Component));
exports.FilterContainer = FilterContainer;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(2);
/**
 * Container to display a list of batteries
 */
var FilterList = /** @class */ (function (_super) {
    __extends(FilterList, _super);
    function FilterList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: (window.innerWidth < 800),
        };
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        return _this;
    }
    FilterList.prototype.componentDidMount = function () {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    };
    FilterList.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.updateWindowDimensions);
    };
    FilterList.prototype.render = function () {
        if (this.state.collapsed) {
            return this.renderCollapsed();
        }
        else {
            return this.renderDefault();
        }
    };
    FilterList.prototype.updateWindowDimensions = function () {
        var isCollapsed = (window.innerWidth < 800);
        if (this.state.collapsed != isCollapsed) {
            this.setState({
                collapsed: isCollapsed,
            });
        }
    };
    FilterList.prototype.ImageError = function (item) {
        if (item) {
            var parent_1 = item.parentElement;
            if (parent_1) {
                parent_1.removeChild(item);
            }
        }
    };
    FilterList.prototype.renderDefault = function () {
        var _this = this;
        var theParts = null;
        var translate = this.props.store.polyglot;
        var filters = this.props.store.filters;
        if (filters) {
            theParts = filters.map(function (s, i) {
                return React.createElement("tr", { key: i.toString() },
                    React.createElement("td", { "data-label": "Item", className: "cell-center" }, s.Part),
                    React.createElement("td", { "data-label": "EAN", className: "cell-center" }, s.EAN),
                    React.createElement("td", { "data-label": "Type", className: "cell-center" }, s.Type),
                    React.createElement("td", { "data-label": "Applications", className: "cell-center" },
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "https://afam.com/wp-content/themes/netAfam/afamparts/bike.png", onClick: function (e) { _this.props.store.ShowReversedBikes(s); e.preventDefault(); } }))),
                    React.createElement("td", { "data-label": "Image", className: "cell-center" },
                        React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                            React.createElement("img", { src: s.Photo, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowFilterImage(s, s.Photo); e.preventDefault(); } }))),
                    React.createElement("td", { "data-label": "Image", className: "cell-center" },
                        React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                            React.createElement("img", { src: s.Drawing, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowFilterDrawing(s, s.Drawing); e.preventDefault(); } }))));
            });
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, translate.t("ApplicableFilters")),
            React.createElement("table", { className: "part-table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "cell-center" }, translate.t("Item")),
                        React.createElement("th", { className: "cell-center" }, translate.t("EAN")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Type")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Applications")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Image")),
                        React.createElement("th", { className: "cell-center" }, translate.t("Drawing")))),
                React.createElement("tbody", null, theParts))));
    };
    FilterList.prototype.renderCollapsed = function () {
        var _this = this;
        var theTables = null;
        var translate = this.props.store.polyglot;
        var filters = this.props.store.filters;
        if (filters) {
            theTables = filters.map(function (s, i) {
                return React.createElement("table", { className: "part-table collapsed", key: i.toString() },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("Item")),
                            React.createElement("td", null, s.Part)),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("EAN")),
                            React.createElement("td", null, s.EAN)),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("Type")),
                            React.createElement("td", { "data-label": "Type" }, s.Type)),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("Applications")),
                            React.createElement("td", { className: "cell-center" },
                                React.createElement("a", { href: "#" },
                                    React.createElement("img", { src: "https://afam.com/wp-content/themes/netAfam/afamparts/bike.png", onClick: function (e) { _this.props.store.ShowReversedBikes(s); e.preventDefault(); } })))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("Image")),
                            React.createElement("td", { "data-label": "Image", className: "cell-center" },
                                React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                                    React.createElement("img", { src: s.Photo, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowFilterImage(s, s.Photo); e.preventDefault(); } })))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "firstcol" }, translate.t("Drawing")),
                            React.createElement("td", { "data-label": "Drawing", className: "cell-center" },
                                React.createElement("a", { className: "image-popup-fit-width", href: "#" },
                                    React.createElement("img", { src: s.Drawing, style: { borderWidth: "0px", width: "4em" }, onError: function (e) { return _this.ImageError(e.currentTarget); }, onClick: function (e) { _this.props.store.ShowFilterDrawing(s, s.Drawing); e.preventDefault(); } }))))));
            });
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, translate.t("ApplicableFilters")),
            theTables));
    };
    FilterList = __decorate([
        mobx_react_1.observer
    ], FilterList);
    return FilterList;
}(React.Component));
exports.FilterList = FilterList;


/***/ })
],[38]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL3BhcnRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9iaWtlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMvY2hhaW5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL3Nwcm9ja2V0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9raXRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2JhdHRlcnlzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2ZpbHRlcnN0b3JlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hZmFtYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFydHMudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9hcHBzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHJhbnNsYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMva2l0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iaWtlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iYXR0ZXJ5bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9maWx0ZXJtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2Jpa2VyZXZlcnNlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9jaGFpbmluZm9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvcGFydHNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9yZXZlcnNlc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5mb3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRsaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRib20udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvc3Byb2NrZXQudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbWFnZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vcmV2ZXJzZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluaW5mb21vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnljb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5bGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVybGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBSUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQztBQUpZLDhCQUFTOzs7Ozs7Ozs7OztBQ0h0Qiw0Q0FBNEM7QUFBbkMsK0NBQVc7QUFDcEIsNENBQTRDO0FBQW5DLCtDQUFXO0FBQ3BCLGdEQUFrRDtBQUF6Qyx3REFBYzs7Ozs7Ozs7Ozs7Ozs7QUNGdkIsMkNBQXlDO0FBQWhDLDJDQUFVOzs7Ozs7Ozs7O0FDQW5CLDRDQUEwQztBQUFqQyw0Q0FBVTtBQUNuQiw4Q0FBOEM7QUFBckMsa0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHJCLG9DQUEwQztBQUcxQyx1Q0FBc0M7QUFDdEMsd0NBQTBDO0FBRTFDO0lBU0ksbUJBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakMsSUFBSSxDQUFD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LEVBQUMsVUFBVSxJQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQU07NEJBQ3RELDBDQUFlLFNBQVMsRUFBQyxTQUFTLEVBQUMsYUFBYTtnQ0FDNUMsMkJBQUcsU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBQyxHQUFHO29DQUN6Qyw2QkFDSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFDZCxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDM0MsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFlBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFoQyxDQUFnQyxFQUNoRCxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDLEdBQzFGLENBQ0YsQ0FDSCxDQUNKLENBQ0QsQ0FDSjtZQXBEUixDQW9EUSxDQUNYLENBQUM7U0FDTDtRQUVELE9BQU8sQ0FDSDtZQUNJLGdDQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBTTtZQUMxQyxTQUFTLENBQ1IsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQXpMUSxVQUFVO1FBRHRCLHFCQUFRO09BQ0ksVUFBVSxDQTJMdEI7SUFBRCxpQkFBQztDQUFBLENBM0wrQixLQUFLLENBQUMsU0FBUyxHQTJMOUM7QUEzTFksZ0NBQVUiLCJmaWxlIjoiYWZhbWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEJpa2VSZXZlcnNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydFN0b3JlIHtcclxuICAgIHB1YmxpYyBCaWtlSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZXZlcnNlZEJpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW107XHJcbiAgICBwdWJsaWMgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvcGFydHN0b3JlLnRzIiwiZXhwb3J0IHsgUGFydFNlcnZpY2UgfSBmcm9tIFwiLi9wYXJ0c2VydmljZVwiO1xyXG5leHBvcnQgeyBCaWtlU2VydmljZSB9IGZyb20gXCIuL2Jpa2VzZXJ2aWNlXCI7XHJcbmV4cG9ydCB7IFJldmVyc2VTZXJ2aWNlIH0gZnJvbSBcIi4vcmV2ZXJzZXNlcnZpY2VcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL2luZGV4LnRzIiwiZXhwb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29uc3RhbnRzL2luZGV4LnRzIiwiZXhwb3J0IHsgSW1hZ2VNb2RhbCB9IGZyb20gXCIuL2ltYWdlbW9kYWxcIjtcclxuZXhwb3J0IHsgUmV2ZXJzZU1vZGFsIH0gZnJvbSBcIi4vcmV2ZXJzZW1vZGFsXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgQmlrZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCaWtlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpa2VTdG9yZSB7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBiaWtlOiBCaWtlTW9kZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJ0YnJhbmQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTdG9yZTogQXBwU3RvcmUpIHtcclxuICAgICAgICB0aGlzLmJpa2UgPSBuZXcgQmlrZU1vZGVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0QnJhbmQgPSB0aGlzLnNlbGVjdEJyYW5kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDYyA9IHRoaXMuc2VsZWN0Q2MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsID0gdGhpcy5zZWxlY3RNb2RlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IHRoaXMuc2VsZWN0WWVhci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJyYW5kcyA9IHRoaXMudXBkYXRlQnJhbmRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDY3MgPSB0aGlzLnVwZGF0ZUNjcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxzID0gdGhpcy51cGRhdGVNb2RlbHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmlrZXMgPSB0aGlzLnVwZGF0ZUJpa2VzLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGFydGJyYW5kID0gdGhpcy5hcHBTdG9yZS5wYXJ0cztcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IHRoaXMuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldEJyYW5kcyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLnVwZGF0ZUJyYW5kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCcmFuZHMoYnJhbmRzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoYnJhbmRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgYnJhbmRzLnVuc2hpZnQodGhpcy5wb2x5Z2xvdC50KFwiU2VsZWN0QnJhbmRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLmJyYW5kcyA9IGJyYW5kcztcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRCcmFuZCA9IGJyYW5kc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGJyYW5kcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCcmFuZCh0aGlzLmJpa2Uuc2VsZWN0ZWRCcmFuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBzZWxlY3RCcmFuZChicmFuZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQnJhbmQgPSBicmFuZDtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLmNjcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZENjID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLm1vZGVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0Q0NzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMudXBkYXRlQ2NzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNjcyhjY3M6IHN0cmluZ1tdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChjY3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjY3MudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RDY1wiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UuY2NzID0gY2NzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZENjID0gY2NzWzBdO1xyXG5cclxuICAgICAgICBpZiAoY2NzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdENjKHRoaXMuYmlrZS5zZWxlY3RlZENjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdENjKGNjOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRDYyA9IGNjO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UubW9kZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UueWVhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAwO1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRNb2RlbHModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVNb2RlbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlTW9kZWxzKG1vZGVsczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgbW9kZWxzLnVuc2hpZnQodGhpcy5wb2x5Z2xvdC50KFwiU2VsZWN0TW9kZWxcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLm1vZGVscyA9IG1vZGVscztcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCA9IG1vZGVsc1swXTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlbCh0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBzZWxlY3RNb2RlbChtb2RlbDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsID0gbW9kZWw7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS55ZWFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IDA7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldFllYXJzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMudXBkYXRlWWVhcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlWWVhcnMoeWVhcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHllYXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgeWVhcnMudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RZZWFyXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS55ZWFycyA9IHllYXJzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSB5ZWFyc1swXTtcclxuXHJcbiAgICAgICAgaWYgKHllYXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFllYXIodGhpcy5iaWtlLnNlbGVjdGVkWWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBzZWxlY3RZZWFyKHllYXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSB5ZWFyO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IDA7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldEJpa2VzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMubGFuZ3VhZ2UsIHRoaXMudXBkYXRlQmlrZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQmlrZXMoYmlrZXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAoYmlrZXMubGVuZ3RoID4gMCkgPyBiaWtlc1swXSA6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpa2VTdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9iaWtlc3RvcmUudHMiLCJleHBvcnQgeyBLaXRNb2RlbCB9IGZyb20gXCIuL2tpdG1vZGVsXCI7XHJcbmV4cG9ydCB7IERlZmF1bHRLaXRTdGF0ZSwgS2l0U3RhdGUgfSBmcm9tIFwiLi9raXRzdGF0ZVwiO1xyXG5leHBvcnQgeyBDaGFpbk1vZGVsIH0gZnJvbSBcIi4vY2hhaW5tb2RlbFwiO1xyXG5leHBvcnQgeyBTcHJvY2tldE1vZGVsIH0gZnJvbSBcIi4vc3Byb2NrZXRtb2RlbFwiO1xyXG5leHBvcnQgeyBCaWtlTW9kZWwgfSBmcm9tIFwiLi9iaWtlbW9kZWxcIjtcclxuZXhwb3J0IHsgQmF0dGVyeU1vZGVsIH0gZnJvbSBcIi4vYmF0dGVyeW1vZGVsXCI7XHJcbmV4cG9ydCB7IEZpbHRlck1vZGVsIH0gZnJvbSBcIi4vZmlsdGVybW9kZWxcIjtcclxuZXhwb3J0IHsgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuL2Jpa2VyZXZlcnNlbW9kZWxcIjtcclxuZXhwb3J0IHsgQ2hhaW5JbmZvTW9kZWwgfSBmcm9tIFwiLi9jaGFpbmluZm9tb2RlbFwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ2hhaW5Nb2RlbCwgRGVmYXVsdENoYWluIH0gZnJvbSBcIi4vY2hhaW5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0U3Byb2NrZXQsIFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi9zcHJvY2tldG1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdEtpdFN0YXRlOiBLaXRTdGF0ZSA9IHtcclxuICAgIEN1cnJlbnRDaGFpbnM6IFtEZWZhdWx0Q2hhaW5dLFxyXG4gICAgQ3VycmVudENoYWluTGVuZ3RoOiAwLFxyXG4gICAgU2VsZWN0ZWRDaGFpbjogRGVmYXVsdENoYWluLFxyXG4gICAgU2VsZWN0ZWRGcm9udFNwcm9ja2V0OiBEZWZhdWx0U3Byb2NrZXQsXHJcbiAgICBTZWxlY3RlZFJlYXJTcHJvY2tldDogRGVmYXVsdFNwcm9ja2V0LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEtpdFN0YXRlIHtcclxuICAgIHB1YmxpYyBDdXJyZW50Q2hhaW5zOiBDaGFpbk1vZGVsW107XHJcbiAgICBwdWJsaWMgQ3VycmVudENoYWluTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2VsZWN0ZWRDaGFpbjogQ2hhaW5Nb2RlbDtcclxuICAgIHB1YmxpYyBTZWxlY3RlZEZyb250U3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWw7XHJcbiAgICBwdWJsaWMgU2VsZWN0ZWRSZWFyU3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWw7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9raXRzdGF0ZS50cyIsImV4cG9ydCBjb25zdCBEZWZhdWx0Q2hhaW46IENoYWluTW9kZWwgPSB7XHJcbiAgICBDaGFpblR5cGU6IFwiXCIsXHJcbiAgICBDaGFpbkNvbG9yOiBcIlwiLFxyXG4gICAgQ2hhaW5CYXNlTmFtZTogXCJcIixcclxuICAgIENoYWluT3JkZXI6IDAsXHJcbiAgICBJc1N0YW5kYXJkOiAwLFxyXG4gICAgTGVuZ3RoOiAwLFxyXG4gICAgRnVsbE5hbWU6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhaW5Nb2RlbCB7XHJcbiAgICBwdWJsaWMgQ2hhaW5UeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2hhaW5Db2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYWluQmFzZU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFpbk9yZGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgSXNTdGFuZGFyZDogbnVtYmVyO1xyXG4gICAgcHVibGljIExlbmd0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZ1bGxOYW1lOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9jaGFpbm1vZGVsLnRzIiwiZXhwb3J0IGNvbnN0IERlZmF1bHRTcHJvY2tldDogU3Byb2NrZXRNb2RlbCA9IHtcclxuICAgIFNwcm9ja2V0TmFtZTogXCJcIixcclxuICAgIFBhcnRJZDogMCxcclxuICAgIFNpZGU6IFwiXCIsXHJcbiAgICBCYXNlOiBcIlwiLFxyXG4gICAgVGVldGg6IDAsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU3Byb2NrZXRNb2RlbCB7XHJcbiAgICBwdWJsaWMgU3Byb2NrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGFydElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2lkZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEJhc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBUZWV0aDogbnVtYmVyO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvc3Byb2NrZXRtb2RlbC50cyIsImltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmltcG9ydCB7IENoYWluTW9kZWwsIEtpdE1vZGVsLCBLaXRTdGF0ZSwgU3Byb2NrZXRNb2RlbCwgQ2hhaW5JbmZvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBJbmZvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9pbmZvc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtpdFN0b3JlIGV4dGVuZHMgUGFydFN0b3JlIHtcclxuXHJcbiAgICBwdWJsaWMgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG5cclxuICAgIC8vIFRoZSBraXRzIG1hbmFnZWQgYnkgdGhpcyBzdG9yZVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBraXRzOiBLaXRNb2RlbFtdO1xyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBhIFwicGljdHVyZVwiIG9mIGEgc3Byb2NrZXRcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgU3Byb2NrZXRJbWFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBTcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgU3Byb2NrZXRJbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBIaWRlU3Byb2NrZXRJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgU2hvd1Nwcm9ja2V0SW1hZ2Uoc3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWwsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVGl0bGUgPSBzcHJvY2tldC5TcHJvY2tldE5hbWU7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGFuIGltYWdlIG9mIHRoZSBjaGFpblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBDaGFpbkltYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBDaGFpbkltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIEhpZGVDaGFpbkltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBTaG93Q2hhaW5JbWFnZShjaGFpbjogQ2hhaW5Nb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VUaXRsZSA9IGNoYWluLkZ1bGxOYW1lO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVVybCA9IHVybDtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBjaGFpbiB0ZWNobmljYWwgaW5mb3JtYXRpb24gIFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBDaGFpbkluZm9Nb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBDaGFpbkluZm86IENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBIaWRlQ2hhaW5JbmZvKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5DaGFpbkluZm9Nb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0NoYWluSW5mbyhjaGFpbjogQ2hhaW5Nb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIEluZm9TZXJ2aWNlLkdldENoYWluSW5mbyhjaGFpbi5GdWxsTmFtZSwgdGhpcy5hcHBTdG9yZS5sYW5ndWFnZSwgdGhpcy5sb2FkQ2hhaW5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYmlrZSBmb3Igd2hpY2gga2l0cyBhcmUgc2hvd25cclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMua2l0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gMDtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkluZm9Nb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNoYWluSW5mbyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbkNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhaW5DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwcm9ja2V0Q2hhbmdlID0gdGhpcy5oYW5kbGVTcHJvY2tldENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEtpdFN0YXRlID0gdGhpcy5zZXRJbml0aWFsS2l0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoYWluTGVuZ3RocyA9IHRoaXMudXBkYXRlQ2hhaW5MZW5ndGhzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVLaXRzID0gdGhpcy51cGRhdGVLaXRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENoYWluID0gdGhpcy51cGRhdGVTZWxlY3RlZENoYWluLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hhaW5JbmZvID0gdGhpcy5sb2FkQ2hhaW5JbmZvLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuSGlkZUNoYWluSW5mbyA9IHRoaXMuSGlkZUNoYWluSW5mby5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBoYXNLaXRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmtpdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2l0cy5sZW5ndGggIT09IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IEJpa2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpa2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEJpa2VJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdldEtpdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgaGFuZGxlU3Byb2NrZXRDaGFuZ2Uoa2l0OiBLaXRNb2RlbCwgc2lkZTogc3RyaW5nLCBzcHJvY2tldDogU3Byb2NrZXRNb2RlbCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBraXRTdGF0ZSA9IGtpdC5DdXJyZW50U3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBmcm9udCA9IGtpdFN0YXRlLlNlbGVjdGVkRnJvbnRTcHJvY2tldDtcclxuICAgICAgICBsZXQgcmVhciA9IGtpdFN0YXRlLlNlbGVjdGVkUmVhclNwcm9ja2V0O1xyXG5cclxuICAgICAgICBjb25zdCBmcm9udERlZmF1bHQgPSBraXQuRnJvbnREZWZhdWx0VGVldGg7XHJcbiAgICAgICAgY29uc3QgcmVhckRlZmF1bHQgPSBraXQuUmVhckRlZmF1bHRUZWV0aDtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2hhaW5MZW5ndGggPSBraXQuQ2hhaW5MZW5ndGg7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENoYWluTGVuZ3RoID0ga2l0U3RhdGUuQ3VycmVudENoYWluTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoc2lkZSA9PT0gXCJmcm9udFwiKSB7XHJcbiAgICAgICAgICAgIGZyb250ID0gc3Byb2NrZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVhciA9IHNwcm9ja2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBsaW5rcyB0byBhZGQvc3VidHJhY3QgZnJvbSB0aGUgZGVmYXVsdCBjaGFpbiBsZW5ndGhcclxuICAgICAgICAgICBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRlZXRoIG9mIHRoZSBzZWxlY3RlZCBmcm9udCBhbmQgcmVhciBzcHJvY2tldFxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IGV4dHJhTGlua3MgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCB0ZWV0aERpZmZlcmVuY2UgPSByZWFyLlRlZXRoIC0gZnJvbnREZWZhdWx0ICsgZnJvbnQuVGVldGggLSByZWFyRGVmYXVsdDtcclxuXHJcbiAgICAgICAgaWYgKHRlZXRoRGlmZmVyZW5jZSA+IDApIHtcclxuICAgICAgICAgICAgZXh0cmFMaW5rcyA9IChNYXRoLmZsb29yKCh0ZWV0aERpZmZlcmVuY2UgLSAxKSAvIDMpICsgMSkgKiAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGVldGhEaWZmZXJlbmNlIDwgMCkge1xyXG4gICAgICAgICAgICBleHRyYUxpbmtzID0gTWF0aC5jZWlsKCh0ZWV0aERpZmZlcmVuY2UgKyAxKSAvIDMpICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdDaGFpbnMgPSBraXRTdGF0ZS5DdXJyZW50Q2hhaW5zO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZENoYWluID0ga2l0U3RhdGUuU2VsZWN0ZWRDaGFpbjtcclxuICAgICAgICBjb25zdCBuZXdDaGFpbkxlbmd0aCA9IGRlZmF1bHRDaGFpbkxlbmd0aCArIGV4dHJhTGlua3M7XHJcblxyXG4gICAgICAgIC8qIFVwZGF0ZSB0aGUgbGVuZ3RoIG9mIGFsbCBjaGFpbnMgaWYgcmVxdWlyZWQgKi9cclxuICAgICAgICBpZiAobmV3Q2hhaW5MZW5ndGggIT09IGN1cnJlbnRDaGFpbkxlbmd0aCkge1xyXG4gICAgICAgICAgICBuZXdDaGFpbnMgPSB0aGlzLnVwZGF0ZUNoYWluTGVuZ3RocyhuZXdDaGFpbnMsIG5ld0NoYWluTGVuZ3RoKTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWRDaGFpbiA9IHRoaXMudXBkYXRlU2VsZWN0ZWRDaGFpbihuZXdDaGFpbnMsIG5ld1NlbGVjdGVkQ2hhaW4sIG5ld0NoYWluTGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFVwZGF0ZSB0aGUga2l0ICovXHJcbiAgICAgICAga2l0U3RhdGUuQ3VycmVudENoYWlucyA9IG5ld0NoYWlucztcclxuICAgICAgICBraXRTdGF0ZS5DdXJyZW50Q2hhaW5MZW5ndGggPSBuZXdDaGFpbkxlbmd0aDtcclxuICAgICAgICBraXRTdGF0ZS5TZWxlY3RlZENoYWluID0gbmV3U2VsZWN0ZWRDaGFpbjtcclxuICAgICAgICBraXRTdGF0ZS5TZWxlY3RlZEZyb250U3Byb2NrZXQgPSBmcm9udDtcclxuICAgICAgICBraXRTdGF0ZS5TZWxlY3RlZFJlYXJTcHJvY2tldCA9IHJlYXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIGhhbmRsZUNoYWluQ2hhbmdlKGtpdDogS2l0TW9kZWwsIGNoYWluOiBDaGFpbk1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAga2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZENoYWluID0gY2hhaW47XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSBnZXRLaXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJpa2VJZCAhPT0gMCkge1xyXG4gICAgICAgICAgICBQYXJ0U2VydmljZS5HZXRLaXRzKHRoaXMuYXBwU3RvcmUucGFydHMsIHRoaXMuYmlrZUlkLCB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlLCB0aGlzLnVwZGF0ZUtpdHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlS2l0cyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlS2l0cyhuZXdLaXRzOiBLaXRNb2RlbFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsS2l0U3RhdGUobmV3S2l0cyk7XHJcbiAgICAgICAgdGhpcy5raXRzID0gbmV3S2l0cztcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHNldEluaXRpYWxLaXRTdGF0ZShraXRzOiBLaXRNb2RlbFtdKTogdm9pZCB7XHJcbiAgICAgICAga2l0cy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlOiBLaXRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRDaGFpbkxlbmd0aDogay5DaGFpbkxlbmd0aCxcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRDaGFpbnM6IGsuQ2hhaW5zLFxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRDaGFpbjogay5DaGFpbnMuZmluZCgoYzogQ2hhaW5Nb2RlbCkgPT4gYy5GdWxsTmFtZSA9PT0gay5DaGFpbikgfHwgay5DaGFpbnNbMF0sXHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZEZyb250U3Byb2NrZXQ6IGsuRnJvbnRTcHJvY2tldHMuZmluZCgoczogU3Byb2NrZXRNb2RlbCkgPT4gcy5TcHJvY2tldE5hbWUgPT09IGsuRnJvbnRTcHJvY2tldClcclxuICAgICAgICAgICAgICAgICAgICB8fCBrLkZyb250U3Byb2NrZXRzWzBdLFxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRSZWFyU3Byb2NrZXQ6IGsuUmVhclNwcm9ja2V0cy5maW5kKChzOiBTcHJvY2tldE1vZGVsKSA9PiBzLlNwcm9ja2V0TmFtZSA9PT0gay5SZWFyU3Byb2NrZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgay5SZWFyU3Byb2NrZXRzWzBdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBrLkN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBsZW5ndGggb2YgYWxsIGNoYWlucyBhbmQgcmV0dXJuIHRoZSBuZXcgbGlzdCBvZiBjaGFpbnNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdDaGFpbkxlbmd0aCAtIFRoZSBuZXcgbGVuZ3RoXHJcbiAgICAgKi9cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQ2hhaW5MZW5ndGhzKGNoYWluczogQ2hhaW5Nb2RlbFtdLCBuZXdDaGFpbkxlbmd0aDogbnVtYmVyKTogQ2hhaW5Nb2RlbFtdIHtcclxuICAgICAgICBjb25zdCBuZXdDaGFpbnMgPSBjaGFpbnM7XHJcblxyXG4gICAgICAgIG5ld0NoYWlucy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGMuTGVuZ3RoID0gbmV3Q2hhaW5MZW5ndGgsXHJcbiAgICAgICAgICAgIGMuRnVsbE5hbWUgPSBjLkNoYWluQmFzZU5hbWUgKyBcIiBcIiArIG5ld0NoYWluTGVuZ3RoLnRvRml4ZWQoMCkgKyBcIkxcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0NoYWlucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBzZWxlY3RlZCBjaGFpbiBhbmQgcmV0dXJuIHRoZSBuZXcgY2hhaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdDaGFpbkxlbmd0aCAtIFRoZSBuZXcgbGVuZ3RoXHJcbiAgICAgKi9cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0ZWRDaGFpbihjaGFpbnM6IENoYWluTW9kZWxbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENoYWluOiBDaGFpbk1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoYWluTGVuZ3RoOiBudW1iZXIpOiBDaGFpbk1vZGVsIHtcclxuICAgICAgICByZXR1cm4gY2hhaW5zLmZpbmQoKGMpID0+IGMuQ2hhaW5CYXNlTmFtZSA9PT0gc2VsZWN0ZWRDaGFpbi5DaGFpbkJhc2VOYW1lKSB8fCBjaGFpbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIGxvYWRDaGFpbkluZm8oaW5mbzogQ2hhaW5JbmZvTW9kZWwpIHtcclxuICAgICAgICBpZiAoaW5mbyAmJiBpbmZvLlBpdGNoTW0pIHtcclxuICAgICAgICAgICAgdGhpcy5DaGFpbkluZm8gPSBpbmZvO1xyXG4gICAgICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5DaGFpbkluZm9Nb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2tpdHN0b3JlLnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBjb21wdXRlZCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlNb2RlbCwgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUGFydFNlcnZpY2UsIFJldmVyc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeVN0b3JlIGV4dGVuZHMgUGFydFN0b3JlIHtcclxuXHJcbiAgICBwdWJsaWMgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG5cclxuICAgIC8vIFRoZSBsaXN0IG9mIGJhdHRlcmllcyBtYW5hZ2VkIGJ5IHRoaXMgc3RvcmVcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgYmF0dGVyaWVzOiBCYXR0ZXJ5TW9kZWxbXTtcclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYSBwaG90byBvZiBhIHNwZWNpZmljIGJhdHRlcnlcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUltYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlJbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlQmF0dGVyeUltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0JhdHRlcnlJbWFnZShiYXR0ZXJ5OiBCYXR0ZXJ5TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVVybCA9IGJhdHRlcnkuUGhvdG87XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VUaXRsZSA9IGJhdHRlcnkuUGFydDtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGV4dHJhIHRlY2huaWNhbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgYSBzcGVjaWZpYyBiYXR0ZXJ5XHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUluZm86IEJhdHRlcnlNb2RlbDtcclxuXHJcbiAgICBwdWJsaWMgSGlkZUJhdHRlcnlJbmZvKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93QmF0dGVyeUluZm8oYmF0dGVyeTogQmF0dGVyeU1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mbyA9IGJhdHRlcnk7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGEgbGlzdCBvZiBiaWtlcyBpbiB3aGljaCBhIHNwZWNpZmljIGJhdHRlcnkgd291bGQgYWxzbyBmaXRcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeVJldmVyc2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBSZXZlcnNlZEJpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW107XHJcblxyXG4gICAgcHVibGljIEhpZGVSZXZlcnNlZEJpa2VzKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VUaXRsZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dSZXZlcnNlZEJpa2VzKGJhdHRlcnk6IEJhdHRlcnlNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VUaXRsZSA9IGJhdHRlcnkuUGFydDtcclxuICAgICAgICBSZXZlcnNlU2VydmljZS5HZXRCaWtlcyhiYXR0ZXJ5LlBhcnRJZCwgdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMpOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlUmV2ZXJzZUJpa2VzKG5ld0Jpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBuZXdCaWtlcztcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0aGlzIHN0b3JlIGNvbnRhaW5zIGJhdHRlcmllc1xyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0JhdHRlcmllcygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5iYXR0ZXJpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmF0dGVyaWVzLmxlbmd0aCAhPT0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgbW90b3JiaWtlIGlkIGZvciB3aGljaCB0aGlzIHN0b3JlIG1hbmFnZXMgYmF0dGVyaWVzXHJcbiAgICBwcml2YXRlIGJpa2VJZDogbnVtYmVyO1xyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBCaWtlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaWtlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBCaWtlSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nZXRCYXR0ZXJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXF1ZXN0IGEgbmV3IGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIGdldEJhdHRlcmllcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iaWtlSWQgIT09IDApIHtcclxuICAgICAgICAgICAgUGFydFNlcnZpY2UuR2V0QmF0dGVyaWVzKHRoaXMuYXBwU3RvcmUucGFydHMsIHRoaXMuYmlrZUlkLCB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlLCB0aGlzLnVwZGF0ZUJhdHRlcmllcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0ZXJpZXMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9jZXNzIHRoZSByZXRyaWV2ZWQgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQmF0dGVyaWVzKG5ld0JhdHRlcmllczogQmF0dGVyeU1vZGVsW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYmF0dGVyeSBvZiBuZXdCYXR0ZXJpZXMpIHtcclxuICAgICAgICAgICAgYmF0dGVyeS5MYXlvdXREcmF3aW5nID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL2xheW91dC9cIiArIGJhdHRlcnkuTGF5b3V0RHJhd2luZztcclxuICAgICAgICAgICAgYmF0dGVyeS5UZXJtaW5hbFRvcCA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL2JhdHRlcmllcy90ZXJtaW5hbC90XCIgKyBiYXR0ZXJ5LlRlcm1pbmFsVHlwZSArIFwidC5wbmdcIjtcclxuICAgICAgICAgICAgYmF0dGVyeS5UZXJtaW5hbEZyb250ID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL3Rlcm1pbmFsL3RcIiArIGJhdHRlcnkuVGVybWluYWxUeXBlICsgXCJmLnBuZ1wiO1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LlRlcm1pbmFsU2lkZSA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL2JhdHRlcmllcy90ZXJtaW5hbC90XCIgKyBiYXR0ZXJ5LlRlcm1pbmFsVHlwZSArIFwicy5wbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmF0dGVyaWVzID0gbmV3QmF0dGVyaWVzO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmF0dGVyaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSAwO1xyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSB0aGlzLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVRpdGxlID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUluZm8gPSBuZXcgQmF0dGVyeU1vZGVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlVGl0bGUgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJhdHRlcmllcyA9IHRoaXMudXBkYXRlQmF0dGVyaWVzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMgPSB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2JhdHRlcnlzdG9yZS50cyIsImltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJNb2RlbCwgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUGFydFNlcnZpY2UsIFJldmVyc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyU3RvcmUgZXh0ZW5kcyBQYXJ0U3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBmaWx0ZXJzOiBGaWx0ZXJNb2RlbFtdO1xyXG5cclxuICAgIC8qIEltYWdlIG1vZGFsICovXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckltYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckltYWdlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVySW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgSGlkZUZpbHRlckltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dGaWx0ZXJJbWFnZShmaWx0ZXI6IEZpbHRlck1vZGVsLCB1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VUaXRsZSA9IGZpbHRlci5QYXJ0O1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRHJhd2luZyBtb2RhbCAqL1xyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVyRHJhd2luZ1VybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlRmlsdGVyRHJhd2luZygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dGaWx0ZXJEcmF3aW5nKGZpbHRlcjogRmlsdGVyTW9kZWwsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gZmlsdGVyLlBhcnQ7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9IFxyXG5cclxuICAgIC8qIFJldmVyc2UgYXBwbGljYXRpb25zICovXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlclJldmVyc2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFJldmVyc2VkQmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXTtcclxuXHJcbiAgICBwdWJsaWMgSGlkZVJldmVyc2VkQmlrZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VUaXRsZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dSZXZlcnNlZEJpa2VzKGZpbHRlcjogRmlsdGVyTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VUaXRsZSA9IGZpbHRlci5QYXJ0O1xyXG4gICAgICAgIFJldmVyc2VTZXJ2aWNlLkdldEJpa2VzKGZpbHRlci5QYXJ0SWQsIHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZVJldmVyc2VCaWtlcyhuZXdCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gbmV3QmlrZXM7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJpa2VJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTdG9yZTogQXBwU3RvcmUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IDA7XHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IHRoaXMuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VVcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyRHJhd2luZ1VybCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzID0gdGhpcy51cGRhdGVGaWx0ZXJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMgPSB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBoYXNGaWx0ZXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5sZW5ndGggIT09IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IEJpa2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpa2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEJpa2VJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdldEZpbHRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIGdldEZpbHRlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmlrZUlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIFBhcnRTZXJ2aWNlLkdldEZpbHRlcnModGhpcy5hcHBTdG9yZS5wYXJ0cywgdGhpcy5iaWtlSWQsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMudXBkYXRlRmlsdGVycyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJzKG5ld0ZpbHRlcnM6IEZpbHRlck1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBuZXdGaWx0ZXJzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2ZpbHRlcnN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwiLi9wYXJ0c1wiO1xyXG5pbXBvcnQgeyBQYXJ0QnJhbmRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBcHAoKSB7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFjdC1hcHBcIik7XHJcblxyXG4gICAgaWYgKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZTogc3RyaW5nID0gcm9vdC5kYXRhc2V0Lmxhbmd1YWdlIHx8IFwiZW5cIjtcclxuICAgICAgICBsZXQgcGFydHM6IG51bWJlciB8IHVuZGVmaW5lZCA9IE51bWJlcihyb290LmRhdGFzZXQucGFydHMpO1xyXG5cclxuICAgICAgICBpZiAoIXBhcnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IHJvb3QuZGF0YXNldC5wYXJ0cztcclxuICAgICAgICAgICAgaWYgKGJyYW5kcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmRBcnJheSA9IGJyYW5kcy5yZXBsYWNlKFwiIFwiLFwiXCIpLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIHBhcnRzID0gYnJhbmRzVG9QYXJ0cyhicmFuZEFycmF5KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8UGFydHMgbGFuZ3VhZ2U9e2xhbmd1YWdlfSBwYXJ0cz17cGFydHN9PjwvUGFydHM+LCByb290LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJyYW5kc1RvUGFydHMoYnJhbmRzOiBzdHJpbmdbXSk6IG51bWJlciB7XHJcblxyXG4gICAgbGV0IHBhcnRzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgYnJhbmQgb2YgYnJhbmRzKSB7XHJcbiAgICAgICAgcGFydHMgKz0gUGFydEJyYW5kc1ticmFuZF1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFydHM7XHJcbn1cclxuXHJcbnJlbmRlckFwcCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWZhbWFwcC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSwgQmF0dGVyeVN0b3JlLCBGaWx0ZXJTdG9yZSwgS2l0U3RvcmUgfSBmcm9tIFwiLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQmlrZVNlbGVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmlrZXNcIjtcclxuaW1wb3J0IHsgS2l0TGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMva2l0c1wiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5Q29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXR0ZXJpZXNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IFBhcnRCcmFuZHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmludGVyZmFjZSBJUGFydHNQcm9wcyB7XHJcbiAgICBwYXJ0czogbnVtYmVyO1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBQYXJ0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUGFydHNQcm9wcywge30+IHtcclxuXHJcbiAgICBwcml2YXRlIHN0b3JlOiBBcHBTdG9yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVBhcnRzUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZSA9IG5ldyBBcHBTdG9yZSh0aGlzLnByb3BzLnBhcnRzLCB0aGlzLnByb3BzLmxhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkUGFydHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdCBzdG9yZT17dGhpcy5zdG9yZS5iaWtlU3RvcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGFydHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkludmFsaWQgcGFydCBjYXRlZ29yaWVzPC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkUGFydHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkID1cclxuICAgICAgICAgICAgUGFydEJyYW5kcy5BRkFNICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5EQyArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuVGhyZWVkICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5OaXRybyArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuU2hpZG8gK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLklzb247XHJcblxyXG4gICAgICAgIHJldHVybiAoKHRoaXMucHJvcHMucGFydHMgJiBzdXBwb3J0ZWQpICE9PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhcnRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlLnBhcnRTdG9yZSBpbnN0YW5jZW9mIEtpdFN0b3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEtpdExpc3Qgc3RvcmU9e3RoaXMuc3RvcmUucGFydFN0b3JlfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RvcmUucGFydFN0b3JlIGluc3RhbmNlb2YgQmF0dGVyeVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEJhdHRlcnlDb250YWluZXIgc3RvcmU9e3RoaXMuc3RvcmUucGFydFN0b3JlfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RvcmUucGFydFN0b3JlIGluc3RhbmNlb2YgRmlsdGVyU3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8RmlsdGVyQ29udGFpbmVyIHN0b3JlPXt0aGlzLnN0b3JlLnBhcnRTdG9yZX0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFydHMudHN4IiwiZXhwb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5leHBvcnQgeyBCaWtlU3RvcmUgfSBmcm9tIFwiLi9iaWtlc3RvcmVcIjtcclxuZXhwb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi9raXRzdG9yZVwiO1xyXG5leHBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuZXhwb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4vYmF0dGVyeXN0b3JlXCI7XHJcbmV4cG9ydCB7IEZpbHRlclN0b3JlIH0gZnJvbSBcIi4vZmlsdGVyc3RvcmVcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9ucyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnNcIjtcclxuaW1wb3J0IHsgQmlrZVN0b3JlIH0gZnJvbSBcIi4vYmlrZXN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuL2tpdHN0b3JlXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuL2JhdHRlcnlzdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJTdG9yZSB9IGZyb20gXCIuL2ZpbHRlcnN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRCcmFuZHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwU3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcbiAgICBwdWJsaWMgYmlrZVN0b3JlOiBCaWtlU3RvcmU7XHJcbiAgICBwdWJsaWMgcGFydFN0b3JlOiBQYXJ0U3RvcmU7XHJcblxyXG4gICAgcHJpdmF0ZSBiaWtlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFydHM6IG51bWJlciA9IDEsIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiKSB7XHJcblxyXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwb2x5Z2xvdFxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblRhYmxlID0gVHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvblRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uVGFibGUgPSBUcmFuc2xhdGlvbnMuZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gbmV3IFBvbHlnbG90KHtcclxuICAgICAgICAgICAgbG9jYWxlOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgcGhyYXNlczogdHJhbnNsYXRpb25UYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBiaWtlIHN0b3JlXHJcbiAgICAgICAgdGhpcy5iaWtlU3RvcmUgPSBuZXcgQmlrZVN0b3JlKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBhcnRzIHN0b3JlXHJcbiAgICAgICAgaWYgKCgocGFydHMgJiBQYXJ0QnJhbmRzLkFGQU0pICE9PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHBhcnRzICYgUGFydEJyYW5kcy5EQykgIT09IDApIHx8XHJcbiAgICAgICAgICAgICgocGFydHMgJiBQYXJ0QnJhbmRzLlRocmVlZCkgIT09IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydFN0b3JlID0gbmV3IEtpdFN0b3JlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoKHBhcnRzICYgUGFydEJyYW5kcy5TaGlkbykgIT09IDApIHx8ICgocGFydHMgJiBQYXJ0QnJhbmRzLk5pdHJvKSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgQmF0dGVyeVN0b3JlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgocGFydHMgJiBQYXJ0QnJhbmRzLklzb24pICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydFN0b3JlID0gbmV3IEZpbHRlclN0b3JlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgUGFydFN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJ0U3RvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUuQmlrZUlkID0gdGhpcy5iaWtlSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBTdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9hcHBzdG9yZS50cyIsImV4cG9ydCB7IFRyYW5zbGF0aW9ucyB9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdHJhbnNsYXRpb25zL2luZGV4LnRzIiwiZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9ucyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgQmlrZVNlbGVjdDogXCJTZWxlY3QgYSBtb3RvcmJpa2VcIixcclxuICAgICAgICBCcmFuZDogXCJCcmFuZFwiLFxyXG4gICAgICAgIENjOiBcIkNjXCIsXHJcbiAgICAgICAgTW9kZWw6IFwiTW9kZWxcIixcclxuICAgICAgICBZZWFyOiBcIlllYXJcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8UGxlYXNlIHNlbGVjdCBhIGJyYW5kPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxQbGVhc2Ugc2VsZWN0IGEgY2M+XCIsXHJcbiAgICAgICAgU2VsZWN0TW9kZWw6IFwiPFBsZWFzZSBzZWxlY3QgYSBtb2RlbD5cIixcclxuICAgICAgICBTZWxlY3RZZWFyOiBcIjxQbGVhc2Ugc2VsZWN0IGEgeWVhcj5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJBcHBsaWNhYmxlIGtpdHNcIixcclxuICAgICAgICBQYXJ0TnVtYmVyOiBcIlBhcnQgbnVtYmVyXCIsXHJcbiAgICAgICAgRnJvbnRTcHJvY2tldDogXCJGcm9udCBzcHJvY2tldFwiLFxyXG4gICAgICAgIFJlYXJTcHJvY2tldDogXCJSZWFyIHNwcm9ja2V0XCIsXHJcbiAgICAgICAgVGVldGg6IFwiVGVldGhcIixcclxuICAgICAgICBQYXJ0OiBcIlBhcnRcIixcclxuICAgICAgICBDaGFpbnM6IFwiQ2hhaW5zXCIsXHJcbiAgICAgICAgVHlwZTogXCJUeXBlXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiQ29sb3JcIixcclxuICAgICAgICBMZW5ndGg6IFwiTGVuZ3RoXCIsXHJcbiAgICAgICAgSXRlbTogXCJJdGVtXCIsXHJcbiAgICAgICAgRUFOOiBcIkVBTiBjb2RlXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJWb2x0YWdlXCIsXHJcbiAgICAgICAgQ2FwYWNpdHk6IFwiQ2FwYWNpdHlcIixcclxuICAgICAgICBDQ0E6IFwiQ29sZCBjcmFuayBjdXJyZW50XCIsXHJcbiAgICAgICAgQUdNOiBcIkFHTVwiLFxyXG4gICAgICAgIEdlbDogXCJHZWxcIixcclxuICAgICAgICBBY2lkOiBcIkFjaWRcIixcclxuICAgICAgICBJbWFnZTogXCJJbWFnZVwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVCYXR0ZXJpZXM6IFwiQXBwbGljYWJsZSBiYXR0ZXJpZXNcIixcclxuICAgICAgICBEcmF3aW5nOiBcIkRyYXdpbmdcIixcclxuICAgICAgICBBcHBsaWNhYmxlRmlsdGVyczogXCJBcHBsaWNhYmxlIGZpbHRlcnNcIixcclxuICAgICAgICBXaWR0aDogXCJEZXB0aFwiLFxyXG4gICAgICAgIEhlaWdodDogXCJIZWlnaHRcIixcclxuICAgICAgICBEcnlXZWlnaHQ6IFwiRHJ5IHdlaWdodFwiLFxyXG4gICAgICAgIEZpbGxlZFdlaWdodDogXCJGaWxsZWQgd2VpZ2h0XCIsXHJcbiAgICAgICAgQWNpZFZvbHVtZTogXCJBY2lkIHZvbHVtZVwiLFxyXG4gICAgICAgIExheW91dERyYXdpbmc6IFwiTGF5b3V0XCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIlByZWZlcnJlZCBjaGFyZ2luZyBjdXJyZW50XCIsXHJcbiAgICAgICAgQ2hhcmdlTWF4OiBcIk1heGltdW0gY2hhcmdpbmcgY3VycmVudFwiLFxyXG4gICAgICAgIFRlcm1pbmFsVG9wOiBcIlRlcm1pbmFsIHRvcCB2aWV3XCIsXHJcbiAgICAgICAgVGVybWluYWxGcm9udDogXCJUZXJtaW5hbCBmcm9udCB2aWV3XCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIlRlcm1pbmFsIHNpZGUgdmlld1wiLFxyXG4gICAgICAgIExpdGVyOiBcImxpdGVyXCIsXHJcbiAgICAgICAgVGVjaG5vbG9neTogXCJUZWNobm9sb2d5XCIsXHJcbiAgICAgICAgRnJvbTogXCJGcm9tXCIsXHJcbiAgICAgICAgVG86IFwiVG9cIixcclxuICAgICAgICBQcmV2aW91czogXCJQcmV2aW91c1wiLFxyXG4gICAgICAgIE5leHQ6IFwiTmV4dFwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uTGlzdDogXCJBcHBsaWNhdGlvbiBsaXN0XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25zOiBcIkFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgIENoYWluVHlwZTogXCJDaGFpbiB0eXBlXCIsXHJcbiAgICAgICAgUGl0Y2hNbTogXCJQaXRjaFwiLFxyXG4gICAgICAgIFBpdGNoV2lkdGg6IFwiV2lkdGhcIixcclxuICAgICAgICBEZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiQ29sb3JcIixcclxuICAgICAgICBBcHBsaWNhdGlvbjogXCJBcHBsaWNhdGlvblwiLFxyXG4gICAgICAgIEZyb21DQzogXCJGcm9tIENDXCIsXHJcbiAgICAgICAgVG9DQzogXCJUbyBDQ1wiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIkJ1c2hpbmcgdHlwZVwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiUGluIHR5cGVcIixcclxuICAgICAgICBSb2xsZXJEaWFtZXRlcjogXCJSb2xsZXIgZGlhbWV0ZXJcIixcclxuICAgICAgICBQaW5EaWFtZXRlcjogXCJQaW4gZGlhbWV0ZXJcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkludGVybmFsIHBsYXRlIHRoaWNrbmVzc1wiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IFwiRXh0ZXJuYWwgcGxhdGUgdGhpY2tuZXNzXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogXCJJbnRlcm5hbCBwbGF0ZSBoZWlnaHRcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkV4dGVybmFsIHBsYXRlIGhlaWdodFwiLFxyXG4gICAgICAgIEwxOiBcIkwxXCIsXHJcbiAgICAgICAgTDI6IFwiTDJcIixcclxuICAgICAgICBUZW5zaWxlU3RyZW5ndGg6IFwiVGVuc2lsZSBzdHJlbmd0aFwiLFxyXG4gICAgICAgIFdlaWdodDogXCJXZWlnaHRcIixcclxuICAgICAgICBTdGFuZGFyZENsaXA6IFwiU3RhbmRhcmQgY2xpcFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiU3RhbmRhcmQgcml2ZXRcIixcclxuICAgICAgICBTZWFsVHlwZTogXCJTZWFsIHR5cGVcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBlciAxMDAgbGlua3NcIixcclxuICAgICAgICBDbG9zZTogXCJDbG9zZVwiLFxyXG4gICAgfSxcclxuICAgIG5sOiB7XHJcbiAgICAgICAgQmlrZVNlbGVjdDogXCJLaWVzIGVlbiBtb3RvcmZpZXRzXCIsXHJcbiAgICAgICAgQnJhbmQ6IFwiTWVya1wiLFxyXG4gICAgICAgIENjOiBcIkNjXCIsXHJcbiAgICAgICAgTW9kZWw6IFwiTW9kZWxcIixcclxuICAgICAgICBZZWFyOiBcIkphYXJcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8S2llcyBlZW4gbWVyaz5cIixcclxuICAgICAgICBTZWxlY3RDYzogXCI8S2llcyBlZW4gY3lsaW5kZXJpbmhvdWQ+XCIsXHJcbiAgICAgICAgU2VsZWN0TW9kZWw6IFwiPEtpZXMgZWVuIG1vZGVsPlwiLFxyXG4gICAgICAgIFNlbGVjdFllYXI6IFwiPEtpZXMgZWVuIGJvdXdqYWFyPlwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVLaXRzOiBcIkdlc2NoaWt0ZSBraXRzXCIsXHJcbiAgICAgICAgUGFydE51bWJlcjogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRnJvbnRTcHJvY2tldDogXCJLZXR0aW5nd2llbCB2b29yXCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIktldHRpbmd3aWVsIGFjaHRlclwiLFxyXG4gICAgICAgIFRlZXRoOiBcIlZlcnRhbmRpbmdcIixcclxuICAgICAgICBQYXJ0OiBcIkFydGlrZWxcIixcclxuICAgICAgICBDaGFpbnM6IFwiS2V0dGluZ1wiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwZVwiLFxyXG4gICAgICAgIENvbG9yOiBcIktsZXVyXCIsXHJcbiAgICAgICAgTGVuZ3RoOiBcIkxlbmd0ZVwiLFxyXG4gICAgICAgIEl0ZW06IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIEVBTjogXCJFQU4gY29kZVwiLFxyXG4gICAgICAgIFZvbHRhZ2U6IFwiVm9sdGFnZVwiLFxyXG4gICAgICAgIENhcGFjaXR5OiBcIkNhcGFjaXRlaXRcIixcclxuICAgICAgICBDQ0E6IFwiS291ZHN0YXJ0c3Ryb29tXCIsXHJcbiAgICAgICAgQUdNOiBcIkFHTVwiLFxyXG4gICAgICAgIEdlbDogXCJHZWxcIixcclxuICAgICAgICBBY2lkOiBcIlp1dXJcIixcclxuICAgICAgICBJbWFnZTogXCJBZmJlZWxkaW5nXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUJhdHRlcmllczogXCJHZXNjaGlrdGUgYmF0dGVyaWplblwiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiVGVrZW5pbmdcIixcclxuICAgICAgICBBcHBsaWNhYmxlRmlsdGVyczogXCJHZXNjaGlrdGUgZmlsdGVyc1wiLFxyXG4gICAgICAgIFdpZHRoOiBcIkRpZXB0ZVwiLFxyXG4gICAgICAgIEhlaWdodDogXCJIb29ndGVcIixcclxuICAgICAgICBEcnlXZWlnaHQ6IFwiRHJvb2cgZ2V3aWNodFwiLFxyXG4gICAgICAgIEZpbGxlZFdlaWdodDogXCJHZXZ1bGQgZ2V3aWNodFwiLFxyXG4gICAgICAgIEFjaWRWb2x1bWU6IFwiWnV1ciB2b2x1bWVcIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkxheW91dFwiLFxyXG4gICAgICAgIENoYXJnZVByZWZlcnJlZDogXCJPcHRpbWFsZSBsYWFkc3Ryb29tXCIsXHJcbiAgICAgICAgQ2hhcmdlTWF4OiBcIk1heGltdW0gbGFhZHN0cm9vbVwiLFxyXG4gICAgICAgIFRlcm1pbmFsVG9wOiBcIlRlcm1pbmFsIGJvdmVuYWFuemljaHRcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIlRlcm1pbmFsIHZvb3JhYW56aWNodFwiLFxyXG4gICAgICAgIFRlcm1pbmFsU2lkZTogXCJUZXJtaW5hbCB6aWphYW56aWNodFwiLFxyXG4gICAgICAgIExpdGVyOiBcImxpdGVyXCIsXHJcbiAgICAgICAgVGVjaG5vbG9neTogXCJUZWNobm9sb2dpZVwiLFxyXG4gICAgICAgIEZyb206IFwiVmFuXCIsXHJcbiAgICAgICAgVG86IFwiVG90XCIsXHJcbiAgICAgICAgUHJldmlvdXM6IFwiVm9yaWdlXCIsXHJcbiAgICAgICAgTmV4dDogXCJWb2xnZW5kZVwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uTGlzdDogXCJUb2VwYXNzaW5nc2xpanN0XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25zOiBcIlRvZXBhc3NpbmdlblwiLFxyXG4gICAgICAgIENoYWluVHlwZTogXCJLZXR0aW5ndHlwZVwiLFxyXG4gICAgICAgIFBpdGNoTW06IFwiU3RhcFwiLFxyXG4gICAgICAgIFBpdGNoV2lkdGg6IFwiQnJlZWR0ZVwiLCAgICAgICAgXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiT21zY2hyaWp2aW5nXCIsXHJcbiAgICAgICAgT3V0ZXJDb2xvcjogXCJLbGV1clwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIlRvZXBhc3NpbmdcIixcclxuICAgICAgICBGcm9tQ0M6IFwiVmFuIENDXCIsXHJcbiAgICAgICAgVG9DQzogXCJUb3QgQ0NcIixcclxuICAgICAgICBCdXNoVHlwZTogXCJCdXMgdHlwZVwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiUGluIHR5cGVcIixcclxuICAgICAgICBSb2xsZXJEaWFtZXRlcjogXCJSb2wgZGlhbWV0ZXJcIixcclxuICAgICAgICBQaW5EaWFtZXRlcjogXCJQaW4gZGlhbWV0ZXJcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkRpa3RlIGludGVybmUgcGxhYXRcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkRpa3RlIGV4dGVybmUgcGxhYXRcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBcIkhvb2d0ZSBpbnRlcm5lIHBsYWF0XCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogXCJIb29ndGUgZXh0ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEwxOiBcIkwxXCIsXHJcbiAgICAgICAgTDI6IFwiTDJcIixcclxuICAgICAgICBUZW5zaWxlU3RyZW5ndGg6IFwiVHJla3N0ZXJrdGVcIixcclxuICAgICAgICBXZWlnaHQ6IFwiR2V3aWNodFwiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJTdGFuZGFhcmQgc2x1aXRzY2hha2VsXCIsXHJcbiAgICAgICAgU3RhbmRhcmRSaXZldDogXCJTdGFuZGFhcmQgcml2ZWVyIHNsdWl0c2NoYWtlbFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIkRpY2h0aW5nIHR5cGVcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBlciAxMDAgc2NoYWtlbHNcIixcclxuICAgICAgICBDbG9zZTogXCJTbHVpdGVuXCIsXHJcbiAgICB9LFxyXG4gICAgZGU6IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIk1vdG9ycmFkd2FobFwiLFxyXG4gICAgICAgIEJyYW5kOiBcIk1hcmtlXCIsXHJcbiAgICAgICAgQ2M6IFwiSHVicmFtXCIsXHJcbiAgICAgICAgTW9kZWw6IFwiTW9kZWxsXCIsXHJcbiAgICAgICAgWWVhcjogXCJKYWhyXCIsXHJcbiAgICAgICAgU2VsZWN0QnJhbmQ6IFwiPEJpdHRlIHfDpGhsZW4gU2llIGRpZSBNYXJrZT5cIixcclxuICAgICAgICBTZWxlY3RDYzogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGVyIEh1YnJhdW0+XCIsXHJcbiAgICAgICAgU2VsZWN0TW9kZWw6IFwiPEJpdHRlIHfDpGhsZW4gU2llIGRhcyBNb2RlbGw+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGFzIEJhdWphaHI+XCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUtpdHM6IFwiR2VlaWduZXRlIEtpdHNcIixcclxuICAgICAgICBQYXJ0TnVtYmVyOiBcIkFydGlrZWxcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIlJpdHplbFwiLFxyXG4gICAgICAgIFJlYXJTcHJvY2tldDogXCJLZXR0ZW5yYWRcIixcclxuICAgICAgICBUZWV0aDogXCJaw6RobmVcIixcclxuICAgICAgICBQYXJ0OiBcIlRlaWxcIixcclxuICAgICAgICBDaGFpbnM6IFwiS2V0dGVcIixcclxuICAgICAgICBUeXBlOiBcIlR5cFwiLFxyXG4gICAgICAgIENvbG9yOiBcIkZhcmJlXCIsXHJcbiAgICAgICAgTGVuZ3RoOiBcIkzDpG5nZVwiLFxyXG4gICAgICAgIEl0ZW06IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIEVBTjogXCJFQU4gQ29kZVwiLFxyXG4gICAgICAgIFZvbHRhZ2U6IFwiU3Bhbm51bmdcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJLYXBheml0w6R0XCIsXHJcbiAgICAgICAgQ0NBOiBcIkthbHRzdGFydHN0cm9tXCIsXHJcbiAgICAgICAgQUdNOiBcIkFHTVwiLFxyXG4gICAgICAgIEdlbDogXCJHZWxcIixcclxuICAgICAgICBBY2lkOiBcIlPDpHVyZVwiLFxyXG4gICAgICAgIEltYWdlOiBcIkJpbGRcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkdlZWlnbmV0ZSBCYXR0ZXJpZW5cIixcclxuICAgICAgICBEcmF3aW5nOiBcIlplaWNobnVuZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkdlZWlnbmV0ZSBGaWx0ZXJcIixcclxuICAgICAgICBXaWR0aDogXCJUaWVmZVwiLFxyXG4gICAgICAgIEhlaWdodDogXCJIw7ZoZVwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJUcm9ja2VuZ2V3aWNodFwiLFxyXG4gICAgICAgIEZpbGxlZFdlaWdodDogXCJHZXdpY2h0IGdlZsO8bGx0XCIsXHJcbiAgICAgICAgQWNpZFZvbHVtZTogXCJTw6R1cmV2b2x1bWVuXCIsXHJcbiAgICAgICAgTGF5b3V0RHJhd2luZzogXCJMYXlvdXRcIixcclxuICAgICAgICBDaGFyZ2VQcmVmZXJyZWQ6IFwiQmV2b3J6dWd0ZXIgTGFkZXN0cm9tXCIsXHJcbiAgICAgICAgQ2hhcmdlTWF4OiBcIk1heGltYWxlciBMYWRlc3Ryb21cIixcclxuICAgICAgICBUZXJtaW5hbFRvcDogXCJCYXR0ZXJpZXBvbCBBdWZzaWNodFwiLFxyXG4gICAgICAgIFRlcm1pbmFsRnJvbnQ6IFwiQmF0dGVyaWVwb2wgVm9yZGVyYW5zaWNodFwiLFxyXG4gICAgICAgIFRlcm1pbmFsU2lkZTogXCJCYXR0ZXJpZXBvbCBTZWl0ZW5hbnNpY2h0XCIsXHJcbiAgICAgICAgTGl0ZXI6IFwiTGl0ZXJcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ2llXCIsXHJcbiAgICAgICAgRnJvbTogXCJWb25cIixcclxuICAgICAgICBUbzogXCJCaXNcIixcclxuICAgICAgICBQcmV2aW91czogXCJWb3JoZXJpZ2VcIixcclxuICAgICAgICBOZXh0OiBcIk7DpGNoc3RlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIkFud2VuZHVuZ3NsaXN0ZVwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uczogXCJBbndlbmR1bmdlblwiLFxyXG4gICAgICAgIENoYWluVHlwZTogXCJLZXR0ZW4gVHlwXCIsXHJcbiAgICAgICAgUGl0Y2hNbTogXCJUZWlsdW5nXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJCcmVpdGVcIixcclxuICAgICAgICBEZXNjcmlwdGlvbjogXCJVbXNjaHJlaWJ1bmdcIixcclxuICAgICAgICBPdXRlckNvbG9yOiBcIkZhcmJlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb246IFwiQW53ZW5kdW5nXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIlZvbiBIdWJyYXVtXCIsXHJcbiAgICAgICAgVG9DQzogXCJCaXMgSHVicmF1bVwiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIkJ1Y2hzZSBUeXBcIixcclxuICAgICAgICBQaW5UeXBlOiBcIkJvbHplbiBUeXBcIixcclxuICAgICAgICBSb2xsZXJEaWFtZXRlcjogXCJXYWx6ZW5kdXJjaG1lc3NlclwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIkJvbHplbmR1cmNobWVzc2VyXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJEaWNrZSBpbnRlcm5lIFBsYXR0ZVwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlja2UgZXh0ZXJuZSBQbGF0dGVcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBcIkjDtmhlIGludGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogXCJIw7ZoZSBleHRlcm5lIFBsYXR0ZVwiLFxyXG4gICAgICAgIEwxOiBcIkwxXCIsXHJcbiAgICAgICAgTDI6IFwiTDJcIixcclxuICAgICAgICBUZW5zaWxlU3RyZW5ndGg6IFwiWnVnZmVzdGlna2VpdFwiLFxyXG4gICAgICAgIFdlaWdodDogXCJHZXdpY2h0XCIsXHJcbiAgICAgICAgU3RhbmRhcmRDbGlwOiBcIlN0YW5kYXJkIEJpbmRlZ2xpZXRcIixcclxuICAgICAgICBTdGFuZGFyZFJpdmV0OiBcIlN0YW5kYWFyZCBOaWV0XCIsXHJcbiAgICAgICAgU2VhbFR5cGU6IFwiRGljaHR1bmcgVHlwXCIsXHJcbiAgICAgICAgS2dQZXIxMDBMaW5rczogXCJrZyBwcm8gMTAwIEdsaWVkZXJcIixcclxuICAgICAgICBDbG9zZTogXCJTY2hsaWXDn2VuXCIsXHJcbiAgICB9LFxyXG4gICAgZnI6IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIkNob2lzaXNzZXogdW5lIG1vdG9cIixcclxuICAgICAgICBCcmFuZDogXCJNYXJxdWVcIixcclxuICAgICAgICBDYzogXCJDeWxpbmRyw6llXCIsXHJcbiAgICAgICAgTW9kZWw6IFwiTW9kw6hsZVwiLFxyXG4gICAgICAgIFllYXI6IFwiQW5uw6llXCIsXHJcbiAgICAgICAgU2VsZWN0QnJhbmQ6IFwiPFMudi5wLiBjaG9pc2lyIHVuZSBtYXJxdWU+XCIsXHJcbiAgICAgICAgU2VsZWN0Q2M6IFwiPFMudi5wLiBjaG9pc2lyIHVuZSBjeWxpbmRyw6llPlwiLFxyXG4gICAgICAgIFNlbGVjdE1vZGVsOiBcIjxTLnYucC4gY2hvaXNpciB1biBtb2TDqGxlPlwiLFxyXG4gICAgICAgIFNlbGVjdFllYXI6IFwiPFMudi5wLiBjaG9pc2lyIHVuZSBhbm7DqWU+XCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUtpdHM6IFwiS2l0cyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiQXJ0aWNsZVwiLFxyXG4gICAgICAgIEZyb250U3Byb2NrZXQ6IFwiUGlnbm9uXCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIkNvdXJvbm5lXCIsXHJcbiAgICAgICAgVGVldGg6IFwiRGVudHVyZVwiLFxyXG4gICAgICAgIFBhcnQ6IFwiUGnDqGNlXCIsXHJcbiAgICAgICAgQ2hhaW5zOiBcIkNoYcOubmVcIixcclxuICAgICAgICBUeXBlOiBcIlR5cGVcIixcclxuICAgICAgICBDb2xvcjogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgTGVuZ3RoOiBcIkxvbmd1ZXVyXCIsXHJcbiAgICAgICAgSXRlbTogXCJBcnRpY2xlXCIsXHJcbiAgICAgICAgRUFOOiBcIkNvZGUgRUFOXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJWb2x0YWdlXCIsXHJcbiAgICAgICAgQ2FwYWNpdHk6IFwiQ2FwYWNpdMOpXCIsXHJcbiAgICAgICAgQ0NBOiBcIkNvdXJhbnQgZGUgZMOpbWFycmFnZSDDoCBmcm9pZFwiLFxyXG4gICAgICAgIEFHTTogXCJBR01cIixcclxuICAgICAgICBHZWw6IFwiR2VsXCIsXHJcbiAgICAgICAgQWNpZDogXCJBY2lkZVwiLFxyXG4gICAgICAgIEltYWdlOiBcIkltYWdlXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUJhdHRlcmllczogXCJCYXR0ZXJpZXMgcG9zc2libGVzXCIsXHJcbiAgICAgICAgRHJhd2luZzogXCJWaWduZXR0ZVwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkZpbHRyZXMgcG9zc2libGVzXCIsXHJcbiAgICAgICAgV2lkdGg6IFwiUHJvZm9uZGV1clwiLFxyXG4gICAgICAgIEhlaWdodDogXCJIYXV0ZXVyXCIsXHJcbiAgICAgICAgRHJ5V2VpZ2h0OiBcIlBvaWRzIMOhIHNlY1wiLFxyXG4gICAgICAgIEZpbGxlZFdlaWdodDogXCJQb2lkcyByZW1wbGlcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIlZvbHVtZSBkJ2FjaWRlXCIsXHJcbiAgICAgICAgTGF5b3V0RHJhd2luZzogXCJEaXNwb3NpdGlvblwiLFxyXG4gICAgICAgIENoYXJnZVByZWZlcnJlZDogXCJDb3VyYW50IGRlIGNoYXJnZSBub3JtYWxcIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiQ291cmFudCBkZSBjaGFyZ2UgbWF4aW11bVwiLFxyXG4gICAgICAgIFRlcm1pbmFsVG9wOiBcIkJvcm5lLCB2dWUgZGUgZGVzc3VzXCIsXHJcbiAgICAgICAgVGVybWluYWxGcm9udDogXCJCb3JuZSwgdnVlIGRlIGZhY2VcIixcclxuICAgICAgICBUZXJtaW5hbFNpZGU6IFwiQm9ybmUsIHZ1ZSBkZSBjw7R0w6lcIixcclxuICAgICAgICBMaXRlcjogXCJsaXRyZVwiLFxyXG4gICAgICAgIFRlY2hub2xvZ3k6IFwiVGVjaG5vbG9naWVcIixcclxuICAgICAgICBGcm9tOiBcIkRlXCIsXHJcbiAgICAgICAgVG86IFwiw4BcIixcclxuICAgICAgICBQcmV2aW91czogXCJQcsOpY8OpZGVudFwiLFxyXG4gICAgICAgIE5leHQ6IFwiU3VpdmFudFwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uTGlzdDogXCJMaXN0ZSBkZXMgYXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25zOiBcIkFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgIENoYWluVHlwZTogXCJUeXBlIGRlIGNoYcOubmVcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlBhc1wiLFxyXG4gICAgICAgIFBpdGNoV2lkdGg6IFwiTGFyZ2V1clwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIkTDqW5vbWluYXRpb25cIixcclxuICAgICAgICBPdXRlckNvbG9yOiBcIkNvdWxldXJcIixcclxuICAgICAgICBBcHBsaWNhdGlvbjogXCJBcHBsaWNhdGlvblwiLFxyXG4gICAgICAgIEZyb21DQzogXCJEZSBjeWxpbmRyw6llXCIsXHJcbiAgICAgICAgVG9DQzogXCJBIGN5bGluZHLDqWVcIixcclxuICAgICAgICBCdXNoVHlwZTogXCJUeXBlIGRlIGxhIGJhZ3VlXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJUeXBlIGRlIGxhIGdvdXBpbGxlXCIsXHJcbiAgICAgICAgUm9sbGVyRGlhbWV0ZXI6IFwiRGlhbcOodHJlIHJvdWxlYXVcIixcclxuICAgICAgICBQaW5EaWFtZXRlcjogXCJEaWFtw6h0cmUgZGUgbGEgZ291cGlsbGVcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIsOJcGFpc3NldXIgZGUgbGEgcGxhcXVlIGludGVybmVcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIsOJcGFpc3NldXIgZGUgbGEgcGxhcXVlIGV4dGVybmVcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBcIkhhdXRldXIgZGUgbGEgcGxhcXVlIGludGVybmVcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkhhdXRldXIgZGUgbGEgcGxhcXVlIGV4dGVybmVcIixcclxuICAgICAgICBMMTogXCJMMVwiLFxyXG4gICAgICAgIEwyOiBcIkwyXCIsXHJcbiAgICAgICAgVGVuc2lsZVN0cmVuZ3RoOiBcIlLDqXNpc3RhbmNlIMOgIGxhIHRyYWN0aW9uXCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIlBvaWRzXCIsXHJcbiAgICAgICAgU3RhbmRhcmRDbGlwOiBcIkF0dGFjaGUgcmFwaWRlIHN0YW5kYXJkXCIsXHJcbiAgICAgICAgU3RhbmRhcmRSaXZldDogXCJNYWlsbG9uIHN0YW5kYXJkXCIsXHJcbiAgICAgICAgU2VhbFR5cGU6IFwiVHlwZSBkZSBqb2ludFwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcGFyIDEwMCBtYWlsbG9uc1wiLFxyXG4gICAgICAgIENsb3NlOiBcIkZlcm1lclwiLFxyXG4gICAgfSxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RyYW5zbGF0aW9ucy90cmFuc2xhdGlvbnMudHMiLCJpbXBvcnQgeyBEZWZhdWx0S2l0U3RhdGUsIEtpdFN0YXRlIH0gZnJvbSBcIi4va2l0c3RhdGVcIjtcclxuaW1wb3J0IHsgQ2hhaW5Nb2RlbCB9IGZyb20gXCIuL2NoYWlubW9kZWxcIjtcclxuaW1wb3J0IHsgU3Byb2NrZXRNb2RlbCB9IGZyb20gXCIuL3Nwcm9ja2V0bW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaXRNb2RlbCB7XHJcbiAgICBwdWJsaWMgS2l0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBLaXRCcmFuZDogc3RyaW5nO1xyXG4gICAgcHVibGljIFBhcnRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgS2l0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEZyb250U3Byb2NrZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBGcm9udERlZmF1bHRUZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFJlYXJTcHJvY2tldDogc3RyaW5nO1xyXG4gICAgcHVibGljIFJlYXJEZWZhdWx0VGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGFpbjogc3RyaW5nO1xyXG4gICAgcHVibGljICBDaGFpbkxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIENoYWluQmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFBpdGNoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgTWF0ZXJpYWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBLaXRib3g6IHN0cmluZztcclxuICAgIHB1YmxpYyBJc1N0YW5kYXJkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnJvbnRNaW5pbXVtVGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGcm9udE1heGltdW1UZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFJlYXJNaW5pbXVtVGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZWFyTWF4aW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnJvbnRTcHJvY2tldHM6IFNwcm9ja2V0TW9kZWxbXTtcclxuICAgIHB1YmxpYyBSZWFyU3Byb2NrZXRzOiBTcHJvY2tldE1vZGVsW107XHJcbiAgICBwdWJsaWMgQ2hhaW5zOiBDaGFpbk1vZGVsW107XHJcbiAgICBwdWJsaWMgTGFuZ3VhZ2U6IG51bWJlcjtcclxuICAgIHB1YmxpYyBLaXRUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ3VycmVudFN0YXRlOiBLaXRTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkN1cnJlbnRTdGF0ZSA9IERlZmF1bHRLaXRTdGF0ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2tpdG1vZGVsLnRzIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmlrZU1vZGVsIHtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgYnJhbmRzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZEJyYW5kOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIGNjczogc3RyaW5nW107XHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgc2VsZWN0ZWRDYzogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBtb2RlbHM6IHN0cmluZ1tdO1xyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHNlbGVjdGVkTW9kZWw6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgeWVhcnM6IHN0cmluZ1tdO1xyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHNlbGVjdGVkWWVhcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgdGhpcy5icmFuZHMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEJyYW5kID0gXCJcIjtcclxuXHJcbiAgICAgIHRoaXMuY2NzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYyA9IFwiXCI7XHJcblxyXG4gICAgICB0aGlzLm1vZGVscyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBcIlwiO1xyXG5cclxuICAgICAgdGhpcy55ZWFycyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkWWVhciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWtlTW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvYmlrZW1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIEJhdHRlcnlNb2RlbCB7XHJcbiAgICBwdWJsaWMgUGFydDogc3RyaW5nO1xyXG4gICAgcHVibGljIFBhcnRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEVBTjogc3RyaW5nO1xyXG4gICAgcHVibGljIEJhdHRlcnlUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVm9sdDogbnVtYmVyO1xyXG4gICAgcHVibGljIENhcGFjaXR5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ0NBOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQUdNOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgR2VsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQWNpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIFBob3RvOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBEcnlXZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGaWxsZWRXZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBBY2lkVm9sdW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVGVybWluYWxUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVGVybWluYWxEcmF3aW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTGF5b3V0RHJhd2luZzogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYXJnZVByZWZlcnJlZDogbnVtYmVyO1xyXG4gICAgcHVibGljIENoYXJnZU1heDogbnVtYmVyO1xyXG4gICAgcHVibGljIFRlcm1pbmFsVG9wOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVGVybWluYWxGcm9udDogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlcm1pbmFsU2lkZTogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvYmF0dGVyeW1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIEZpbHRlck1vZGVsIHtcclxuICAgIHB1YmxpYyBQYXJ0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGFydElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRUFOOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFBob3RvOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgRHJhd2luZzogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvZmlsdGVybW9kZWwudHMiLCJleHBvcnQgY2xhc3MgQmlrZVJldmVyc2VNb2RlbCB7XHJcbiAgICBwdWJsaWMgQnJhbmQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBDYzogbnVtYmVyO1xyXG4gICAgcHVibGljIE1vZGVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnJvbTogbnVtYmVyO1xyXG4gICAgcHVibGljIFRvOiBudW1iZXI7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2Jpa2VyZXZlcnNlbW9kZWwudHMiLCJleHBvcnQgY2xhc3MgQ2hhaW5JbmZvTW9kZWwge1xyXG4gICAgQ2hhaW5OYW1lOiBzdHJpbmc7XHJcbiAgICBQaXRjaDogbnVtYmVyO1xyXG4gICAgQnJhbmQ6IHN0cmluZztcclxuICAgIEJhc2VOYW1lOiBzdHJpbmc7XHJcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgQ29sb3JOYW1lOiBzdHJpbmc7XHJcbiAgICBPdXRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBJbm5lckNvbG9yOiBzdHJpbmc7XHJcbiAgICBBcHBsaWNhdGlvbjogbnVtYmVyO1xyXG4gICAgVXNlTW9wZWQ6IG51bWJlcjtcclxuICAgIFVzZUNyb3NzOiBudW1iZXI7XHJcbiAgICBVc2VPZmZyb2FkOiBudW1iZXI7XHJcbiAgICBVc2VTdHJlZXQ6IG51bWJlcjtcclxuICAgIFVzZVNwb3J0OiBudW1iZXI7XHJcbiAgICBVc2VSYWNpbmc6IG51bWJlcjtcclxuICAgIEZyb21DYzogbnVtYmVyO1xyXG4gICAgVG9DYzogbnVtYmVyO1xyXG4gICAgUGl0Y2hNbTogbnVtYmVyO1xyXG4gICAgUGl0Y2hXaWR0aDogbnVtYmVyO1xyXG4gICAgQnVzaDogc3RyaW5nO1xyXG4gICAgUGluOiBzdHJpbmc7XHJcbiAgICBSb2xsZXJEaWFtZXRlcjogbnVtYmVyO1xyXG4gICAgUGluRGlhbWV0ZXI6IG51bWJlcjtcclxuICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IG51bWJlcjtcclxuICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IG51bWJlcjtcclxuICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIEwxOiBudW1iZXI7XHJcbiAgICBMMjogbnVtYmVyO1xyXG4gICAgVGVuc2lsZVN0cmVuZ3RoOiBudW1iZXI7XHJcbiAgICBXZWlnaHQ6IG51bWJlcjtcclxuICAgIFN0YW5kYXJkQ2xpcDogc3RyaW5nO1xyXG4gICAgU2xpcEZpdENsaXA6IHN0cmluZztcclxuICAgIFByZXNzRml0Q2xpcDogc3RyaW5nO1xyXG4gICAgU3RhbmRhcmRSaXZldDogc3RyaW5nO1xyXG4gICAgU29mdFJpdmV0OiBzdHJpbmc7XHJcbiAgICBTZWFsVHlwZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9jaGFpbmluZm9tb2RlbC50cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQmF0dGVyeU1vZGVsLCBGaWx0ZXJNb2RlbCwgS2l0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydFNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0S2l0cyhwYXJ0QnJhbmRzOiBudW1iZXIsIGJpa2VJZDogbnVtYmVyLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAocGFydHM6IEtpdE1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBQYXJ0U2VydmljZS5HZXQ8S2l0TW9kZWxbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydEJyYW5kc30vYmlrZS8ke2Jpa2VJZH0vJHtsYW5ndWFnZX1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCYXR0ZXJpZXMocGFydEJyYW5kczogbnVtYmVyLCBiaWtlSWQ6IG51bWJlciwgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKHBhcnRzOiBCYXR0ZXJ5TW9kZWxbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIFBhcnRTZXJ2aWNlLkdldDxCYXR0ZXJ5TW9kZWxbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydEJyYW5kc30vYmlrZS8ke2Jpa2VJZH0vJHtsYW5ndWFnZX1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRGaWx0ZXJzKHBhcnRCcmFuZHM6IG51bWJlciwgYmlrZUlkOiBudW1iZXIsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChwYXJ0czogRmlsdGVyTW9kZWxbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIFBhcnRTZXJ2aWNlLkdldDxGaWx0ZXJNb2RlbFtdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0QnJhbmRzfS9iaWtlLyR7YmlrZUlkfS8ke2xhbmd1YWdlfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXQ8VD4oVVJMOiBzdHJpbmcsIGRvbmU6ICh2YWx1ZXM6IFQpID0+IHZvaWQsIGVycm9yVmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkb25lKGVycm9yVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL3BhcnRzZXJ2aWNlLnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCaWtlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmlrZVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnJhbmRzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgZG9uZTogKGJyYW5kczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBCaWtlU2VydmljZS5HZXQ8c3RyaW5nW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRzfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENDcyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6IChjY3M6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TW9kZWxzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgZG9uZTogKG1vZGVsczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBCaWtlU2VydmljZS5HZXQ8c3RyaW5nW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRzfT9icmFuZD0ke2Jpa2Uuc2VsZWN0ZWRCcmFuZH0mY2M9JHtiaWtlLnNlbGVjdGVkQ2N9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0WWVhcnMocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBkb25lOiAoeWVhcnM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9JmNjPSR7YmlrZS5zZWxlY3RlZENjfSZtb2RlbD0ke2Jpa2Uuc2VsZWN0ZWRNb2RlbH1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCaWtlcyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChiaWtlczogbnVtYmVyW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBCaWtlU2VydmljZS5HZXQ8bnVtYmVyW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRzfS9iaWtlcz9icmFuZD0ke2Jpa2Uuc2VsZWN0ZWRCcmFuZH0mY2M9JHtiaWtlLnNlbGVjdGVkQ2N9Jm1vZGVsPSR7YmlrZS5zZWxlY3RlZE1vZGVsfSZ5ZWFyPSR7YmlrZS5zZWxlY3RlZFllYXJ9Jmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldDxUPihVUkw6IHN0cmluZywgZG9uZTogKHZhbHVlczogVCkgPT4gdm9pZCwgZXJyb3JWYWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRvbmUoZXJyb3JWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvYmlrZXNlcnZpY2UudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJpa2VSZXZlcnNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QmlrZXMocGFydGlkOiBudW1iZXIsIGRvbmU6IChwYXJ0czogQmlrZVJldmVyc2VNb2RlbFtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgUmV2ZXJzZVNlcnZpY2UuR2V0PEJpa2VSZXZlcnNlTW9kZWxbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvcmV2ZXJzZS8ke3BhcnRpZH1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9yZXZlcnNlc2VydmljZS50cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2hhaW5JbmZvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5mb1NlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q2hhaW5JbmZvKGNoYWluTmFtZTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAoaW5mbzogQ2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBJbmZvU2VydmljZS5HZXQ8Q2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQ+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2luZm8vY2hhaW4vJHtjaGFpbk5hbWV9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXQ8VD4oVVJMOiBzdHJpbmcsIGRvbmU6ICh2YWx1ZXM6IFQpID0+IHZvaWQsIGVycm9yVmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkb25lKGVycm9yVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL2luZm9zZXJ2aWNlLnRzIiwiZXhwb3J0IGVudW0gUGFydEJyYW5kcyB7XHJcbiAgICBBRkFNID0gMSxcclxuICAgIERDID0gMixcclxuICAgIFRocmVlZCA9IDQsXHJcbiAgICBTaGlkbyA9IDgsXHJcbiAgICBOaXRybyA9IDE2LFxyXG4gICAgWXVhc2EgPSAzMixcclxuICAgIElzb24gPSA2NCxcclxuICAgIEVCQ0JyYWtlcyA9IDEyOCxcclxuICAgIEVCQ0NsdXRjaGVzID0gMjU2LFxyXG4gICAgTkdLID0gNTEyLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwiZXhwb3J0IHsgQmlrZVNlbGVjdCB9IGZyb20gXCIuL2Jpa2VzZWxlY3RcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCaWtlU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEJpa2VTZWxlY3RSb3cgfSBmcm9tIFwiLi9iaWtlc2VsZWN0X3Jvd1wiO1xyXG5cclxuaW50ZXJmYWNlIElCaWtlU2VsZWN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEJpa2VTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHNwZWNpZmljIG1vdG9yYmlrZVxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBCaWtlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCaWtlU2VsZWN0UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCaWtlU2VsZWN0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XHJcbiAgICAgICAgY29uc3QgYmlrZSA9IHN0b3JlLmJpa2U7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3BvbHkudChcIkJpa2VTZWxlY3RcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1zZWxlY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3RSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Jpa2UuYnJhbmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiQnJhbmRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtiaWtlLnNlbGVjdGVkQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbE9wdGlvbkNoYW5nZT17c3RvcmUuc2VsZWN0QnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YmlrZS5jY3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwb2x5LnQoXCJDY1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRDY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3B0aW9uQ2hhbmdlPXtzdG9yZS5zZWxlY3RDY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLm1vZGVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3BvbHkudChcIk1vZGVsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YmlrZS5zZWxlY3RlZE1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdE1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3RSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Jpa2UueWVhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwb2x5LnQoXCJZZWFyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YmlrZS5zZWxlY3RlZFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbE9wdGlvbkNoYW5nZT17c3RvcmUuc2VsZWN0WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2Jpa2VzL2Jpa2VzZWxlY3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJpa2VTZWxlY3RSb3dQcm9wZXJ0aWVzIHtcclxuICAgIGl0ZW1zOiBzdHJpbmdbXTtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xyXG4gICAgc2lnbmFsT3B0aW9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHNwZWNpZmljIG1vdG9yYmlrZVxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBCaWtlU2VsZWN0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCaWtlU2VsZWN0Um93UHJvcGVydGllcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUJpa2VTZWxlY3RSb3dQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gbnVsbDtcclxuICAgICAgICBsZXQgc3BhbiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChiKSA9PiA8b3B0aW9uIGtleT17Yn0gdmFsdWU9e2J9PntifTwvb3B0aW9uPik7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2xhc3MgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc3BhbkNsYXNzID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Q2xhc3MgPSBcImJpa2Utc2VsZWN0LWNlbGwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc3BhbkNsYXNzID0gXCJiaWtlLXNlbGVjdC1jZWxsXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RDbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbFwiO1xyXG4gICAgICAgICAgICAgICAgc3BhbkNsYXNzID0gXCJiaWtlLXNlbGVjdC1jZWxsLW5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0ID1cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzZWxlY3RDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWxlY3RlZE9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+O1xyXG5cclxuICAgICAgICAgICAgc3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17c3BhbkNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zWzBdfVxyXG4gICAgICAgICAgICA8L3NwYW4+O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1zZWxlY3Qtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXNlbGVjdC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNpZ25hbE9wdGlvbkNoYW5nZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iaWtlcy9iaWtlc2VsZWN0X3Jvdy50c3giLCJleHBvcnQgeyBLaXRMaXN0IH0gZnJvbSBcIi4va2l0bGlzdFwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdCB9IGZyb20gXCIuL2tpdFwiO1xyXG5pbXBvcnQgeyBJbWFnZU1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDaGFpbkluZm9Nb2RhbCB9IGZyb20gXCIuL2NoYWluaW5mb21vZGFsXCI7XHJcblxyXG5pbnRlcmZhY2UgSUtpdExpc3RQcm9wcyB7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgdG8gZGlzcGxheSBhIGxpc3Qgb2Yga2l0c1xyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBLaXRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElLaXRMaXN0UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElLaXRMaXN0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmhhc0tpdHMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBraXRDb21wb25lbnRzID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3Qga2l0cyA9IHRoaXMucHJvcHMuc3RvcmUua2l0cztcclxuXHJcbiAgICAgICAgICAgIGlmIChraXRzKSB7XHJcbiAgICAgICAgICAgICAgICBraXRDb21wb25lbnRzID0ga2l0cy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEtpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wia2l0X1wiICsgcy5QYXJ0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJBcHBsaWNhYmxlS2l0c1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtraXRDb21wb25lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLlNwcm9ja2V0SW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZVNwcm9ja2V0SW1hZ2UoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIlNwcm9ja2V0SW1hZ2VNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJTcHJvY2tldE1vZGFsSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5TcHJvY2tldEltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW1hZ2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVDaGFpbkltYWdlKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJDaGFpbkltYWdlTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiQ2hhaW5Nb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYWluSW5mb01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvPXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkluZm9Nb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5wcm9wcy5zdG9yZS5IaWRlQ2hhaW5JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYWluSW5mb01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRsaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBLaXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgS2l0Qm9tIH0gZnJvbSBcIi4va2l0Ym9tXCI7XHJcblxyXG5pbnRlcmZhY2UgSUtpdFByb3BzIHtcclxuICAgIGtpdDogS2l0TW9kZWw7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGtpdFxyXG4gKiBJdCBkaXNwbGF5cyB0aGUga2l0IHR5cGUsIGtpdCBuYW1lIGFuZCBraXQgY29tcG9uZW50cyAodGhyb3VnaCBhIEtpdEJvbSBjaGlsZCBjb21wb25lbnQpXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEtpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJS2l0UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElLaXRQcm9wcywge30pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qga2l0ID0gdGhpcy5wcm9wcy5raXQ7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRpdGxlXCI+e2tpdC5LaXRUeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUta2l0cGFydFwiPnt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJQYXJ0TnVtYmVyXCIpfTogPHNwYW4gY2xhc3NOYW1lPVwia2l0LXRhYmxlLWtpdG5hbWVcIj57a2l0LktpdE5hbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWRlc2NyaXB0aW9uXCI+e2tpdC5EZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8S2l0Qm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJraXRib21fXCIgKyBraXQuUGFydElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraXQ9e2tpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgS2l0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENoYWluIH0gZnJvbSBcIi4vY2hhaW5cIjtcclxuaW1wb3J0IHsgU3Byb2NrZXQgfSBmcm9tIFwiLi9zcHJvY2tldFwiO1xyXG5cclxuaW50ZXJmYWNlIElLaXRCb21Qcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUtpdEJvbUxpc3RTdGF0ZSB7XHJcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3IgdGhlIHBhcnRzIHRoYXQgbWFrZSB1cCBhIGtpdDogZnJvbnQgc3Byb2NrZXQsIHJlYXIgc3Byb2NrZXQgYW5kIGNoYWluXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEtpdEJvbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJS2l0Qm9tUHJvcHMsIElLaXRCb21MaXN0U3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUtpdEJvbVByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGFwc2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNvbGxhcHNlZCgpIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtcGFydHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJGcm9udFNwcm9ja2V0XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwiZnJvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJDaGFpbnNcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJSZWFyU3Byb2NrZXRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Byb2NrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9XCJyZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC1wYXJ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiRnJvbnRTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJDaGFpbnNcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiUmVhclNwcm9ja2V0XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Byb2NrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9XCJmcm9udFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJvY2tldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT1cInJlYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRib20udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IENoYWluTW9kZWwsIEtpdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElDaGFpblByb3BzIHtcclxuICAgIGtpdDogS2l0TW9kZWw7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2hhaW5TdGF0ZSB7XHJcbiAgICB0aHVtYm5haWxWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgZGlzcGxheWluZyB0aGUgY2hhaW4gdGhhdCBpcyBwYXJ0IG9mIGEga2l0LlxyXG4gKiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IGEgY2hhaW4gdHlwZSBhbmQgY29sb3Igd2hlcmUgcmVsZXZhbnRcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQ2hhaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUNoYWluUHJvcHMsIElDaGFpblN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElDaGFpblByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hhaW4gPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRDaGFpbjtcclxuICAgICAgICBjb25zdCBjaGFpbnMgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuQ3VycmVudENoYWlucztcclxuICAgICAgICBjb25zdCBjaGFpblR5cGVzID0gdGhpcy5nZXRUeXBlcyhjaGFpbnMpO1xyXG4gICAgICAgIGNvbnN0IGNoYWluQ29sb3JzID0gdGhpcy5nZXRDb2xvcnMoY2hhaW5zLCBzZWxlY3RlZENoYWluLkNoYWluVHlwZSk7XHJcblxyXG4gICAgICAgIGxldCBjaGFpblR5cGVPcHRpb25zID0gbnVsbDtcclxuICAgICAgICBsZXQgY2hhaW5UeXBlU2luZ2xlID0gbnVsbDtcclxuICAgICAgICBsZXQgY2hhaW5UeXBlU2VsZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGNoYWluQ29sb3JPcHRpb25zID0gbnVsbDtcclxuICAgICAgICBsZXQgY2hhaW5Db2xvclNpbmdsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluQ29sb3JTZWxlY3QgPSBudWxsO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgIEJ1aWxkIHRoZSBzZWxlY3QgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBjaGFpbiB0eXBlXHJcbiAgICAgICAgICAgVXNlIGEgc3BhbiBpbnN0ZWFkIG9mIGEgc2VsZWN0IGlmIHRoZXJlIGlzIG9ubHkgb25lIGl0ZW1cclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmIChjaGFpblR5cGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY2hhaW5UeXBlT3B0aW9ucyA9IGNoYWluVHlwZXMubWFwKCh0KSA9PiA8b3B0aW9uIGtleT17dH0gdmFsdWU9e3R9Pnt0fTwvb3B0aW9uPik7XHJcbiAgICAgICAgICAgIGNoYWluVHlwZVNlbGVjdCA9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENoYWluLkNoYWluVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUeXBlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhaW5UeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGUgPSBjaGFpblR5cGVzWzBdO1xyXG4gICAgICAgICAgICBjaGFpblR5cGVTaW5nbGUgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpbmdsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgQnVpbGQgdGhlIHNlbGVjdCBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGNoYWluIGNvbG9yXHJcbiAgICAgICAgICAgVXNlIGEgc3BhbiBpbnN0ZWFkIG9mIGEgc2VsZWN0IGlmIHRoZXJlIGlzIG9ubHkgb25lIGNvbG9yXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAoY2hhaW5Db2xvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjaGFpbkNvbG9yT3B0aW9ucyA9IGNoYWluQ29sb3JzLm1hcCgodCkgPT4gPG9wdGlvbiBrZXk9e3R9IHZhbHVlPXt0fT57dH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICBjaGFpbkNvbG9yU2VsZWN0ID1cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ2hhaW4uQ2hhaW5Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb2xvckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYWluQ29sb3JPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZSA9IGNoYWluQ29sb3JzWzBdO1xyXG4gICAgICAgICAgICBjaGFpbkNvbG9yU2luZ2xlID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaW5nbGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbWFnZVVSTCA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL2NoYWlucy9cIiArIHNlbGVjdGVkQ2hhaW4uQ2hhaW5CYXNlTmFtZSArIFwiLmpwZ1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiVHlwZVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5UeXBlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluVHlwZVNpbmdsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJDb2xvclwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5Db2xvclNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbkNvbG9yU2luZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIkxlbmd0aFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIj57c2VsZWN0ZWRDaGFpbi5MZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiUGFydFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LXBhcnRuYW1lIGtpdHBhcnQtaW5saW5lXCI+e3NlbGVjdGVkQ2hhaW4uRnVsbE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93Q2hhaW5JbmZvKHNlbGVjdGVkQ2hhaW4pOyBlLnByZXZlbnREZWZhdWx0KCk7IH19PiYjOTQzMjs8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudGh1bWJuYWlsKHNlbGVjdGVkQ2hhaW4sIGltYWdlVVJMKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW1hZ2VFcnJvcihpdGVtOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwcml2YXRlIHRodW1ibmFpbChjaGFpbjogQ2hhaW5Nb2RlbCwgaW1hZ2VVUkw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRodW1ibmFpbFZpc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10aHVtYm5haWwga2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGFpbi10aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93Q2hhaW5JbWFnZShjaGFpbiwgaW1hZ2VVUkwpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0IHRoZSBwb3NzaWJsZSBjaGFpbiB0eXBlcyBmcm9tIHRoZSBsaXN0IG9mIGNoYWluc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFR5cGVzKGNoYWluczogQ2hhaW5Nb2RlbFtdKTogc3RyaW5nW10ge1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0eXBlcy5maW5kKChwKSA9PiBwID09PSBjaGFpbi5DaGFpblR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXMucHVzaChjaGFpbi5DaGFpblR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHlwZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0IHRoZSBwb3NzaWJsZSBjaGFpbiBjb2xvcnMgZm9yIGEgc3BlY2lmaWMgdHlwZSBvZiBjaGFpblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0eXBlIC0gVGhlIHR5cGUgdG8gZmlsdGVyIG9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0Q29sb3JzKGNoYWluczogQ2hhaW5Nb2RlbFtdLCBhdHlwZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpblR5cGUgPT09IGF0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbG9ycy5maW5kKChwKSA9PiBwID09PSBjaGFpbi5DaGFpbkNvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpbkNvbG9yICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNoYWluLkNoYWluQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1c2VyIHNlbGVjdGVkIGEgbmV3IHR5cGUgb2YgY2hhaW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVUeXBlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZENoYWluLkNoYWluQ29sb3I7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjaGFpbnMgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuQ3VycmVudENoYWlucztcclxuXHJcbiAgICAgICAgbGV0IG5ld0NoYWluOiBDaGFpbk1vZGVsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKiBUcnkgdG8gZmluZCBhIGNoYWluIHdpdGggdGhlIHNlbGVjdGVkIHR5cGUgYW5kIHRoZSBjb2xvciB0aGF0IGlzIHBhcnQgb2YgdGhlIHByb3BzIChpLmUuIHRoZSBkZWZhdWx0IGNvbG9yKSAqL1xyXG4gICAgICAgIGNvbnN0IHR5cGVjb2xvcmNoYWluczogQ2hhaW5Nb2RlbFtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBjaGFpbiBoYXMgdGhlIHJlcXVpcmVkIHR5cGUgYW5kIGNvbG9yXHJcbiAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSAmJiBjaGFpbi5DaGFpbkNvbG9yID09PSBzZWxlY3RlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbmQgaXQgaXMgbm90IHlldCBwcmVzZW50IGluIHRoZSBvdXRwdXQgYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICghdHlwZWNvbG9yY2hhaW5zLmZpbmQoKHApID0+IChwLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlICYmIHAuQ2hhaW5Db2xvciA9PT0gc2VsZWN0ZWRDb2xvcikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlbiBhZGQgaXQgdG8gdGhlIG91dHB1dCBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVjb2xvcmNoYWlucy5wdXNoKGNoYWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVjb2xvcmNoYWlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWluID0gdHlwZWNvbG9yY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSWYgbm8gY2hhaW4gY291bGQgYmUgZm91bmQsIHNlbGVjdCB0aGUgZmlyc3QgY2hhaW4gb2YgdGhlIHNlbGVjdGVkIHR5cGUgKi9cclxuICAgICAgICBpZiAoIW5ld0NoYWluKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVjaGFpbnM6IENoYWluTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZWNoYWlucy5maW5kKChwKSA9PiBwLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlY2hhaW5zLnB1c2goY2hhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVjaGFpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hhaW4gPSB0eXBlY2hhaW5zWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBJZiBzdGlsbCBubyBjaGFpbiBjb3VsZCBiZSBmb3VuZCwgcGljayB0aGUgZmlyc3Qgb25lICovXHJcbiAgICAgICAgaWYgKCFuZXdDaGFpbikge1xyXG4gICAgICAgICAgICBuZXdDaGFpbiA9IGNoYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFNldCB0aHVtYm5haWwgYmFjayB0byB2aXNpYmxlICovXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qIFNpZ25hbCB0aGUgcGFyZW50IGNvbXBvbmVudCB0aGF0IHRoZSBjaGFpbiB3YXMgY2hhbmdlZCAqL1xyXG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFuZGxlQ2hhaW5DaGFuZ2UodGhpcy5wcm9wcy5raXQsIG5ld0NoYWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1c2VyIHNlbGVjdGVkIGEgbmV3IGNoYWluIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbG9yID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFR5cGUgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRDaGFpbi5DaGFpblR5cGU7XHJcbiAgICAgICAgY29uc3QgY2hhaW5zID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdDaGFpbjogQ2hhaW5Nb2RlbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyogVHJ5IHRvIGZpbmQgYSBjaGFpbiB3aXRoIHRoZSBzZWxlY3RlZCB0eXBlIGFuZCB0aGUgY29sb3IgdGhhdCBpcyBwYXJ0IG9mIHRoZSBwcm9wcyAoaS5lLiB0aGUgZGVmYXVsdCBjb2xvcikgKi9cclxuICAgICAgICBjb25zdCB0eXBlY29sb3JjaGFpbnM6IENoYWluTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgY2hhaW4uQ2hhaW5Db2xvciA9PT0gc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlY29sb3JjaGFpbnMuZmluZCgocCkgPT4gcC5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSAmJiBwLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZWNvbG9yY2hhaW5zLnB1c2goY2hhaW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZWNvbG9yY2hhaW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSB0eXBlY29sb3JjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBJZiBubyBjaGFpbiBjb3VsZCBiZSBmb3VuZCwgcGljayB0aGUgZmlyc3Qgb25lICovXHJcbiAgICAgICAgaWYgKCFuZXdDaGFpbikge1xyXG4gICAgICAgICAgICBuZXdDaGFpbiA9IGNoYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFNldCB0aHVtYm5haWwgYmFjayB0byB2aXNpYmxlICovXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qIFNpZ25hbCB0aGUgcGFyZW50IGNvbXBvbmVudCB0aGF0IHRoZSBjaGFpbiB3YXMgY2hhbmdlZCAqL1xyXG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFuZGxlQ2hhaW5DaGFuZ2UodGhpcy5wcm9wcy5raXQsIG5ld0NoYWluKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9jaGFpbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgS2l0TW9kZWwsIFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSVNwcm9ja2V0UHJvcHMge1xyXG4gICAga2l0OiBLaXRNb2RlbDtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxuICAgIHNpZGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElTcHJvY2tldFN0YXRlIHtcclxuICAgIHRodW1ibmFpbFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCBkaXNwbGF5aW5nIGEgc3Byb2NrZXQgdGhhdCBpcyBwYXJ0IG9mIGEga2l0XHJcbiAqIEl0IGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3QgdGhlIG51bWJlciBvZiB0ZWV0aFxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBTcHJvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU3Byb2NrZXRQcm9wcywgSVNwcm9ja2V0U3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVNwcm9ja2V0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzcHJvY2tldHMgPSBudWxsO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNwcm9ja2V0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2lkZSA9PT0gXCJmcm9udFwiKSB7XHJcbiAgICAgICAgICAgIHNwcm9ja2V0cyA9IHRoaXMucHJvcHMua2l0LkZyb250U3Byb2NrZXRzO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwcm9ja2V0ID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkRnJvbnRTcHJvY2tldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcHJvY2tldHMgPSB0aGlzLnByb3BzLmtpdC5SZWFyU3Byb2NrZXRzO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNwcm9ja2V0ID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkUmVhclNwcm9ja2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3Byb2NrZXRPcHRpb25zID0gc3Byb2NrZXRzLm1hcCgocykgPT5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtzLlBhcnRJZH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzLlNwcm9ja2V0TmFtZX0+e3MuVGVldGh9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPik7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlVVJMID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvc3Byb2NrZXRzLzNkL3ZpZ25ldHRlcy9cIiArIHNlbGVjdGVkU3Byb2NrZXQuU3Byb2NrZXROYW1lICsgXCIuanBnXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlRlZXRoXCIpfTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTcHJvY2tldC5TcHJvY2tldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PntzcHJvY2tldE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJQYXJ0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXBhcnRuYW1lIGtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIj57c2VsZWN0ZWRTcHJvY2tldC5TcHJvY2tldE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudGh1bWJuYWlsKHNlbGVjdGVkU3Byb2NrZXQsIGltYWdlVVJMKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW1hZ2VFcnJvcihpdGVtOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGh1bWJuYWlsKHNwcm9ja2V0OiBTcHJvY2tldE1vZGVsLCBpbWFnZVVSTDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGh1bWJuYWlsVmlzaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXRodW1ibmFpbCBraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVSTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcm9ja2V0LXRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dTcHJvY2tldEltYWdlKHNwcm9ja2V0LCBpbWFnZVVSTCk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZm9ybSB0aGUgcGFyZW50IGNvbXBvbmVudCB0aGF0IHRoZSB1c2VyIHNlbGVjdGVkIGEgZGlmZmVyZW50IG51bWJlciBvZiB0ZWV0aCAoaS5lLiBhIGRpZmZlcmVudCBzcHJvY2tldClcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3Byb2NrZXROYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzcHJvY2tldHMgPSAodGhpcy5wcm9wcy5zaWRlID09PSBcImZyb250XCIpID8gdGhpcy5wcm9wcy5raXQuRnJvbnRTcHJvY2tldHMgOiB0aGlzLnByb3BzLmtpdC5SZWFyU3Byb2NrZXRzO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3Byb2NrZXQgPSBzcHJvY2tldHMuZmluZCgoczogU3Byb2NrZXRNb2RlbCkgPT4gcy5TcHJvY2tldE5hbWUgPT09IGN1cnJlbnRTcHJvY2tldE5hbWUpIHx8IHNwcm9ja2V0c1swXTtcclxuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhbmRsZVNwcm9ja2V0Q2hhbmdlKHRoaXMucHJvcHMua2l0LCB0aGlzLnByb3BzLnNpZGUsIHNlbGVjdGVkU3Byb2NrZXQpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMvc3Byb2NrZXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSUltYWdlTW9kYWxQcm9wcyB7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgb25IaWRlOiBGdW5jdGlvbjtcclxuICAgIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgICBtb2RhbElkOiBzdHJpbmc7XHJcbiAgICBpbWFnZUlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY2xvc2VUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElJbWFnZU1vZGFsUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMubW9kYWxJZH0gY2xhc3NOYW1lPVwibW9kYWxfYmFja2dyb3VuZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9e3RoaXMucHJvcHMuaW1hZ2VJZH0gc3JjPXt0aGlzLnByb3BzLmltYWdlVXJsfSBjbGFzc05hbWU9XCJtb2RhbF9pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jbG9zZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW1hZ2Vtb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIElSZXZlcnNlTW9kYWxQcm9wcyB7XHJcbiAgICBzdG9yZTogUGFydFN0b3JlO1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxuICAgIG9uSGlkZTogRnVuY3Rpb247XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVJldmVyc2VNb2RhbFN0YXRlIHtcclxuICAgIHNlbGVjdGVkUGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIFJldmVyc2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmV2ZXJzZU1vZGFsUHJvcHMsIElSZXZlcnNlTW9kYWxTdGF0ZT4ge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFnZV9zaXplOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVJldmVyc2VNb2RhbFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQYWdlOiAwLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlID0gdGhpcy51cGRhdGVQYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFBhZ2U6IGRhdGEuc2VsZWN0ZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgICAgIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBiaWtlbGlzdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxCaWtlcyA9IHRoaXMucHJvcHMuc3RvcmUuUmV2ZXJzZWRCaWtlcztcclxuICAgICAgICAgICAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGFsbEJpa2VzLmxlbmd0aCAvIHRoaXMucGFnZV9zaXplKTtcclxuICAgICAgICAgICAgY29uc3QgYmlrZXNUb0Rpc3BsYXkgPSBhbGxCaWtlcy5zbGljZSh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSAqIHRoaXMucGFnZV9zaXplLCAodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgKyAxKSAqIHRoaXMucGFnZV9zaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiaWtlc1RvRGlzcGxheSkge1xyXG4gICAgICAgICAgICAgICAgYmlrZWxpc3QgPSBiaWtlc1RvRGlzcGxheS5tYXAoKGIsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wicmV2ZXJzZV9cIiArIGl9IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWxlZnRcIj57Yi5CcmFuZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWNlbnRlclwiPntiLkNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1jZWxsIGNlbGwtbGVmdFwiPntiLk1vZGVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1jZWxsIGNlbGwtY2VudGVyXCI+e2IuRnJvbX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWNlbnRlclwiPntiLlRvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYmFja2dyb3VuZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJCcmFuZFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIkNjXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiTW9kZWxcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJGcm9tXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiVG9cIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jpa2VsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtwb2x5LnQoXCJQcmV2aW91c1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbD17cG9seS50KFwiTmV4dFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0NsYXNzTmFtZT17XCJicmVhay1tZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy51cGRhdGVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcInBhZ2luYXRvci1hY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZkJ1aWxkZXI9eygpID0+IHsgcmV0dXJuIFwiI1wiOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9seS50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vcmV2ZXJzZW1vZGFsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBJQ2hhaW5JbmZvTW9kYWxQcm9wcyB7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbiAgICBpbmZvOiBDaGFpbkluZm9Nb2RlbCB8IHVuZGVmaW5lZDtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXIgZXhwb3J0IGNsYXNzIENoYWluSW5mb01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDaGFpbkluZm9Nb2RhbFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyAmJiB0aGlzLnByb3BzLmluZm8pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLnByb3BzLmluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLkNoYWluTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhaW4taW5mby10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ2hhaW5UeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGl0Y2hcIj57aW5mby5QaXRjaH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkRlc2NyaXB0aW9uXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvRGVzY3JpcHRpb25cIj57aW5mby5EZXNjcmlwdGlvbn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIk91dGVyQ29sb3JcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9PdXRlckNvbG9yXCI+e2luZm8uT3V0ZXJDb2xvcn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaXRjaE1tXCIpfSAoUCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpdGNoTW1cIj57aW5mby5QaXRjaE1tfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUGl0Y2hXaWR0aFwiKX0gKFcpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaXRjaFdpZHRoXCI+e2luZm8uUGl0Y2hXaWR0aH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQnVzaFR5cGVcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9CdXNoXCI+e2luZm8uQnVzaH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlBpblR5cGVcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaW5cIj57aW5mby5QaW59PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUm9sbGVyRGlhbWV0ZXJcIil9IChSKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUm9sbGVyRGlhbWV0ZXJcIj57aW5mby5Sb2xsZXJEaWFtZXRlcn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlBpbkRpYW1ldGVyXCIpfSAoRCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpbkRpYW1ldGVyXCI+e2luZm8uUGluRGlhbWV0ZXJ9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJJbnRlcm5hbFBsYXRlVGhpY2tuZXNzXCIpfSAoVCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0ludGVybmFsUGxhdGVUaGlja25lc3NcIj57aW5mby5JbnRlcm5hbFBsYXRlVGhpY2tuZXNzfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiKX0gKHQpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9FeHRlcm5hbFBsYXRlVGhpY2tuZXNzXCI+e2luZm8uRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzc308L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkludGVybmFsUGxhdGVIZWlnaHRcIil9IChIKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvSW50ZXJuYWxQbGF0ZUhlaWdodFwiPntpbmZvLkludGVybmFsUGxhdGVIZWlnaHR9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJFeHRlcm5hbFBsYXRlSGVpZ2h0XCIpfSAoaCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0V4dGVybmFsUGxhdGVIZWlnaHRcIj57aW5mby5FeHRlcm5hbFBsYXRlSGVpZ2h0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJMMVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0wxXCI+e2luZm8uTDF9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkwyXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvTDJcIj57aW5mby5MMn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVuc2lsZVN0cmVuZ3RoXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvVGVuc2lsZVN0cmVuZ3RoXCI+e2luZm8uVGVuc2lsZVN0cmVuZ3RofTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPmRhTjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiV2VpZ2h0XCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvV2VpZ2h0XCI+e2luZm8uV2VpZ2h0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPntwb2x5LnQoXCJLZ1BlcjEwMExpbmtzXCIpfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiU3RhbmRhcmRDbGlwXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvU3RhbmRhcmRDbGlwXCI+e2luZm8uU3RhbmRhcmRDbGlwfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiU3RhbmRhcmRSaXZldFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1N0YW5kYXJkUml2ZXRcIj57aW5mby5TdGFuZGFyZFJpdmV0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiU2VhbFR5cGVcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9TZWFsVHlwZVwiPntpbmZvLlNlYWxUeXBlfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC90aGVtZXMvbmV0QWZhbS9hZmFtcGFydHMvY2hhaW5fZGltLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2x5LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluaW5mb21vZGFsLnRzeCIsImV4cG9ydCB7IEJhdHRlcnlDb250YWluZXIgfSBmcm9tIFwiLi9iYXR0ZXJ5Y29udGFpbmVyXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQmF0dGVyeUxpc3QgfSBmcm9tIFwiLi9iYXR0ZXJ5bGlzdFwiO1xyXG5pbXBvcnQgeyBJbWFnZU1vZGFsLCBSZXZlcnNlTW9kYWwgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlJbmZvTW9kYWwgfSBmcm9tIFwiLi9iYXR0ZXJ5aW5mb21vZGFsXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJhdHRlcnlDb250YWluZXJQcm9wcyB7XHJcbiAgICBzdG9yZTogQmF0dGVyeVN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgbWFuYWdpbmcgYSBsaXN0IG9mIGJhdHRlcmllc1xyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCYXR0ZXJ5Q29udGFpbmVyUHJvcHMsIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUJhdHRlcnlDb250YWluZXJQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5iYXR0ZXJpZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXR0ZXJ5TGlzdCBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlQmF0dGVyeUltYWdlKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJCYXR0ZXJ5TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiQmF0dGVyeU1vZGFsSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXR0ZXJ5SW5mb01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXR0ZXJ5PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlQmF0dGVyeUluZm8oKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXR0ZXJ5SW5mb01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXZlcnNlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVSZXZlcnNlZEJpa2VzKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlSZXZlcnNlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmV2ZXJzZU1vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5Y29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuXHJcbmludGVyZmFjZSBJQmF0dGVyeUxpc3RQcm9wcyB7XHJcbiAgICBzdG9yZTogQmF0dGVyeVN0b3JlOyAgICBcclxufVxyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5TGlzdFN0YXRlIHtcclxuICAgIGNvbGxhcHNlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciB0byBkaXNwbGF5IGEgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJhdHRlcnlMaXN0UHJvcHMsIElCYXR0ZXJ5TGlzdFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCYXR0ZXJ5TGlzdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGFwc2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCAhPSBpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogaXNDb2xsYXBzZWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgIFxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGVmYXVsdCgpIHtcclxuICAgICAgICBsZXQgdGhlUGFydHMgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgIGNvbnN0IGJhdHRlcmllcyA9IHRoaXMucHJvcHMuc3RvcmUuYmF0dGVyaWVzO1xyXG5cclxuICAgICAgICBpZiAoYmF0dGVyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoZVBhcnRzID0gYmF0dGVyaWVzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2kudG9TdHJpbmcoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSXRlbVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuUGFydH08L3RkPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRUFOXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5FQU59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkJhdHRlcnlUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJWb2x0XCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5Wb2x0fSBWPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNhcGFjaXR5XCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5DYXBhY2l0eX0gQWg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ0NBXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5DQ0F9IEE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQUdNXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5BR019PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkdlbFwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuR2VsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBY2lkXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5BY2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbmZvXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2luZm8ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW5mbyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW1hZ2Uocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj4sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0cmFuc2xhdGUudChcIkFwcGxpY2FibGVCYXR0ZXJpZXNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJFQU5cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIlRlY2hub2xvZ3lcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIlZvbHRhZ2VcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkNhcGFjaXR5XCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJDQ0FcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkFHTVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiR2VsXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJBY2lkXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5JbmZvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkltYWdlXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGVQYXJ0c31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNvbGxhcHNlZCgpIHtcclxuICAgICAgICBsZXQgdGhlVGFibGVzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICBjb25zdCBiYXR0ZXJpZXMgPSB0aGlzLnByb3BzLnN0b3JlLmJhdHRlcmllcztcclxuXHJcbiAgICAgICAgaWYgKGJhdHRlcmllcykge1xyXG4gICAgICAgICAgICB0aGVUYWJsZXMgPSBiYXR0ZXJpZXMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBhcnQtdGFibGUgY29sbGFwc2VkXCIga2V5PXtpLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkl0ZW1cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cy5QYXJ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJFQU5cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cy5FQU59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIlRlY2hub2xvZ3lcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiID57cy5CYXR0ZXJ5VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiVm9sdGFnZVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJWb2x0XCI+e3MuVm9sdH0gVjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJDYXBhY2l0eVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDYXBhY2l0eVwiPntzLkNhcGFjaXR5fSBBaDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJDQ0FcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ0NBXCI+e3MuQ0NBfSBBPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkFHTVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBR01cIj57cy5BR019PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkdlbFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJHZWxcIj57cy5HZWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkFjaWRcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQWNpZFwiPntzLkFjaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkluZm88L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbmZvXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FmYW0uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25ldEFmYW0vYWZhbXBhcnRzL2luZm8ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0JhdHRlcnlJbmZvKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkltYWdlXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkltYWdlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0JhdHRlcnlJbWFnZShzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlQmF0dGVyaWVzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7dGhlVGFibGVzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvYmF0dGVyeWxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJhdHRlcnlJbmZvTW9kYWxQcm9wcyB7XHJcbiAgICBzdG9yZTogQmF0dGVyeVN0b3JlO1xyXG4gICAgYmF0dGVyeTogQmF0dGVyeU1vZGVsO1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxuICAgIG9uSGlkZTogRnVuY3Rpb247XHJcbn1cclxuXHJcbkBvYnNlcnZlciBleHBvcnQgY2xhc3MgQmF0dGVyeUluZm9Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmF0dGVyeUluZm9Nb2RhbFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmF0dGVyeSA9IHRoaXMucHJvcHMuYmF0dGVyeTtcclxuICAgICAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhdHRlcnkuUGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYXR0ZXJ5LWluZm8tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJWb2x0YWdlXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9Wb2x0XCI+e2JhdHRlcnkuVm9sdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+VjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ2FwYWNpdHlcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0NhcGFjaXR5XCI+e2JhdHRlcnkuQ2FwYWNpdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPkFoPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDQ0FcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0NDQVwiPntiYXR0ZXJ5LkNDQX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+QTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQUdNXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9BR01cIj57YmF0dGVyeS5BR019PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiR2VsXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9HRUxcIj57YmF0dGVyeS5HZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTGVuZ3RoXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9MZW5ndGhcIj57YmF0dGVyeS5MZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPm1tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJXaWR0aFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvV2lkdGhcIj57YmF0dGVyeS5XaWR0aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+bW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkhlaWdodFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvSGVpZ2h0XCI+e2JhdHRlcnkuSGVpZ2h0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5tbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRHJ5V2VpZ2h0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9EcnlXZWlnaHRcIj57KGJhdHRlcnkuRHJ5V2VpZ2h0ID09IDApID8gXCItLVwiIDogYmF0dGVyeS5EcnlXZWlnaHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPmtnPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJGaWxsZWRXZWlnaHRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0ZpbGxlZFdlaWdodFwiPnsoYmF0dGVyeS5GaWxsZWRXZWlnaHQgPT0gMCkgPyBcIi0tXCIgOiBiYXR0ZXJ5LkZpbGxlZFdlaWdodH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+a2c8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkFjaWRWb2x1bWVcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0FjaWRWb2x1bWVcIj57KGJhdHRlcnkuQWNpZFZvbHVtZSA9PSAwKSA/IFwiLS1cIiA6IGJhdHRlcnkuQWNpZFZvbHVtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+e3BvbHkudChcIkxpdGVyXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ2hhcmdlUHJlZmVycmVkXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DaGFyZ2VQcmVmZXJyZWRcIj57YmF0dGVyeS5DaGFyZ2VQcmVmZXJyZWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNoYXJnZU1heFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQ2hhcmdlTWF4XCI+e2JhdHRlcnkuQ2hhcmdlTWF4fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tZHJhd2luZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJMYXlvdXREcmF3aW5nXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhdHRlcnkuTGF5b3V0RHJhd2luZ30gY2xhc3NOYW1lPVwiYmF0dGVyeS1sYXlvdXQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tZHJhd2luZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJUZXJtaW5hbFRvcFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXR0ZXJ5LlRlcm1pbmFsVG9wfSBjbGFzc05hbWU9XCJiYXR0ZXJ5LXRlcm1pbmFsLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVybWluYWxGcm9udFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXR0ZXJ5LlRlcm1pbmFsRnJvbnR9IGNsYXNzTmFtZT1cImJhdHRlcnktdGVybWluYWwtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tZHJhd2luZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJUZXJtaW5hbFNpZGVcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5UZXJtaW5hbFNpZGV9IGNsYXNzTmFtZT1cImJhdHRlcnktdGVybWluYWwtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlcnNlLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd1JldmVyc2VkQmlrZXMoYmF0dGVyeSk7IGUucHJldmVudERlZmF1bHQoKTsgfX0+e3BvbHkudChcIkFwcGxpY2F0aW9uTGlzdFwiKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2x5LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvYmF0dGVyeWluZm9tb2RhbC50c3giLCJleHBvcnQgeyBGaWx0ZXJDb250YWluZXIgfSBmcm9tIFwiLi9maWx0ZXJjb250YWluZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEZpbHRlckxpc3QgfSBmcm9tIFwiLi9maWx0ZXJsaXN0XCI7XHJcbmltcG9ydCB7IEZpbHRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBJbWFnZU1vZGFsLCBSZXZlcnNlTW9kYWwgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbHRlckNvbnRhaW5lclByb3BzIHtcclxuICAgIHN0b3JlOiBGaWx0ZXJTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIG1hbmFnaW5nIHRoZSBzdGF0ZSBvZiBhIGxpc3Qgb2YgZmlsdGVyc1xyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUZpbHRlckNvbnRhaW5lclByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElGaWx0ZXJDb250YWluZXJQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmZpbHRlcnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVySW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVySW1hZ2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVGaWx0ZXJJbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiRmlsdGVySW1hZ2VNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJGaWx0ZXJJbWFnZU1vZGFsSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJJbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVyRHJhd2luZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlRmlsdGVyRHJhd2luZygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiRmlsdGVyRHJhd2luZ01vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkZpbHRlckRyYXdpbmdNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVySW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXZlcnNlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVSZXZlcnNlZEJpa2VzKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVyUmV2ZXJzZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1JldmVyc2VNb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuXHJcbmludGVyZmFjZSBJRmlsdGVyTGlzdFByb3BzIHtcclxuICAgIHN0b3JlOiBGaWx0ZXJTdG9yZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWx0ZXJMaXN0U3RhdGUge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJhdHRlcmllc1xyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGaWx0ZXJMaXN0UHJvcHMsIElGaWx0ZXJMaXN0U3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUZpbHRlckxpc3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAod2luZG93LmlubmVyV2lkdGggPCA4MDApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhcHNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXNDb2xsYXBzZWQgPSAod2luZG93LmlubmVyV2lkdGggPCA4MDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQgIT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGlzQ29sbGFwc2VkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbWFnZUVycm9yKGl0ZW06IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVBhcnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5wcm9wcy5zdG9yZS5maWx0ZXJzO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICB0aGVQYXJ0cyA9IGZpbHRlcnMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aS50b1N0cmluZygpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJdGVtXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5QYXJ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJFQU5cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkVBTn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQXBwbGljYXRpb25zXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FmYW0uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25ldEFmYW0vYWZhbXBhcnRzL2Jpa2UucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dSZXZlcnNlZEJpa2VzKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkltYWdlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0ZpbHRlckltYWdlKHMsIHMuUGhvdG8pOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkltYWdlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuRHJhd2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93RmlsdGVyRHJhd2luZyhzLCBzLkRyYXdpbmcpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlRmlsdGVyc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBhcnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkl0ZW1cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkVBTlwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiVHlwZVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYXRpb25zXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiRHJhd2luZ1wiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhlUGFydHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVRhYmxlcyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMucHJvcHMuc3RvcmUuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgdGhlVGFibGVzID0gZmlsdGVycy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGFydC10YWJsZSBjb2xsYXBzZWRcIiBrZXk9e2kudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuUGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJFQU5cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cy5FQU59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiVHlwZVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCIgPntzLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYXRpb25zXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FmYW0uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25ldEFmYW0vYWZhbXBhcnRzL2Jpa2UucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd1JldmVyc2VkQmlrZXMocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJJbWFnZShzLCBzLlBob3RvKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkRyYXdpbmdcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRHJhd2luZ1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLkRyYXdpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0ZpbHRlckRyYXdpbmcocywgcy5EcmF3aW5nKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT4sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0cmFuc2xhdGUudChcIkFwcGxpY2FibGVGaWx0ZXJzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7dGhlVGFibGVzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmxpc3QudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==