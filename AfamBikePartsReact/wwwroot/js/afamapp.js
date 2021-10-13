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
var partservice_1 = __webpack_require__(79);
exports.PartService = partservice_1.PartService;
var bikeservice_1 = __webpack_require__(97);
exports.BikeService = bikeservice_1.BikeService;
var reverseservice_1 = __webpack_require__(98);
exports.ReverseService = reverseservice_1.ReverseService;


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(100);
exports.PartBrands = constants_1.PartBrands;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imagemodal_1 = __webpack_require__(110);
exports.ImageModal = imagemodal_1.ImageModal;
var reversemodal_1 = __webpack_require__(111);
exports.ReverseModal = reversemodal_1.ReverseModal;


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
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
var models_1 = __webpack_require__(26);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitmodel_1 = __webpack_require__(73);
exports.KitModel = kitmodel_1.KitModel;
var kitstate_1 = __webpack_require__(27);
exports.DefaultKitState = kitstate_1.DefaultKitState;
exports.KitState = kitstate_1.KitState;
var chainmodel_1 = __webpack_require__(28);
exports.ChainModel = chainmodel_1.ChainModel;
var sprocketmodel_1 = __webpack_require__(29);
exports.SprocketModel = sprocketmodel_1.SprocketModel;
var bikemodel_1 = __webpack_require__(74);
exports.BikeModel = bikemodel_1.BikeModel;
var batterymodel_1 = __webpack_require__(75);
exports.BatteryModel = batterymodel_1.BatteryModel;
var filtermodel_1 = __webpack_require__(76);
exports.FilterModel = filtermodel_1.FilterModel;
var bikereversemodel_1 = __webpack_require__(77);
exports.BikeReverseModel = bikereversemodel_1.BikeReverseModel;
var chaininfomodel_1 = __webpack_require__(78);
exports.ChainInfoModel = chaininfomodel_1.ChainInfoModel;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chainmodel_1 = __webpack_require__(28);
var sprocketmodel_1 = __webpack_require__(29);
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
/* 28 */
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
/* 29 */
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
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
var infoservice_1 = __webpack_require__(99);
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
/* 36 */
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
var models_1 = __webpack_require__(26);
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
/* 37 */
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
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(10);
var parts_1 = __webpack_require__(54);
var constants_1 = __webpack_require__(13);
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
/* 52 */,
/* 53 */,
/* 54 */
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
var stores_1 = __webpack_require__(55);
var bikes_1 = __webpack_require__(101);
var kits_1 = __webpack_require__(104);
var batteries_1 = __webpack_require__(121);
var filters_1 = __webpack_require__(125);
var constants_1 = __webpack_require__(13);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appstore_1 = __webpack_require__(56);
exports.AppStore = appstore_1.AppStore;
var bikestore_1 = __webpack_require__(25);
exports.BikeStore = bikestore_1.BikeStore;
var kitstore_1 = __webpack_require__(35);
exports.KitStore = kitstore_1.KitStore;
var partstore_1 = __webpack_require__(7);
exports.PartStore = partstore_1.PartStore;
var batterystore_1 = __webpack_require__(36);
exports.BatteryStore = batterystore_1.BatteryStore;
var filterstore_1 = __webpack_require__(37);
exports.FilterStore = filterstore_1.FilterStore;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Polyglot = __webpack_require__(19);
var translations_1 = __webpack_require__(71);
var bikestore_1 = __webpack_require__(25);
var partstore_1 = __webpack_require__(7);
var kitstore_1 = __webpack_require__(35);
var batterystore_1 = __webpack_require__(36);
var filterstore_1 = __webpack_require__(37);
var constants_1 = __webpack_require__(13);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var translations_1 = __webpack_require__(72);
exports.Translations = translations_1.Translations;


/***/ }),
/* 72 */
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
        BushType: "Type de la douille",
        PinType: "Type d'axe",
        RollerDiameter: "Diamètre rouleau",
        PinDiameter: "Diamètre d'axe",
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitstate_1 = __webpack_require__(27);
var KitModel = /** @class */ (function () {
    function KitModel() {
        this.CurrentState = kitstate_1.DefaultKitState;
    }
    return KitModel;
}());
exports.KitModel = KitModel;


/***/ }),
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */,
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
/* 97 */
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
/* 98 */
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
/* 99 */
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
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bikeselect_1 = __webpack_require__(102);
exports.BikeSelect = bikeselect_1.BikeSelect;


/***/ }),
/* 102 */
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
var bikeselect_row_1 = __webpack_require__(103);
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
/* 103 */
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitlist_1 = __webpack_require__(105);
exports.KitList = kitlist_1.KitList;


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
var kit_1 = __webpack_require__(106);
var common_1 = __webpack_require__(14);
var chaininfomodal_1 = __webpack_require__(120);
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
/* 106 */
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
var kitbom_1 = __webpack_require__(107);
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
var chain_1 = __webpack_require__(108);
var sprocket_1 = __webpack_require__(109);
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
var react_paginate_1 = __webpack_require__(38);
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
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var batterycontainer_1 = __webpack_require__(122);
exports.BatteryContainer = batterycontainer_1.BatteryContainer;


/***/ }),
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
var batterylist_1 = __webpack_require__(123);
var common_1 = __webpack_require__(14);
var batteryinfomodal_1 = __webpack_require__(124);
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
/* 123 */
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
                            React.createElement("img", { className: "info-image", src: "https://afam.com/wp-content/themes/netAfam/afamparts/info.png", onClick: function (e) { _this.props.store.ShowBatteryInfo(s); e.preventDefault(); } }))),
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filtercontainer_1 = __webpack_require__(126);
exports.FilterContainer = filtercontainer_1.FilterContainer;


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
var filterlist_1 = __webpack_require__(127);
var common_1 = __webpack_require__(14);
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
/* 127 */
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
],[40]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL3BhcnRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9iaWtlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMvY2hhaW5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL3Nwcm9ja2V0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9raXRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2JhdHRlcnlzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2ZpbHRlcnN0b3JlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hZmFtYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFydHMudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9hcHBzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHJhbnNsYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMva2l0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iaWtlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iYXR0ZXJ5bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9maWx0ZXJtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2Jpa2VyZXZlcnNlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9jaGFpbmluZm9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvcGFydHNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9yZXZlcnNlc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5mb3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRsaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRib20udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvc3Byb2NrZXQudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbWFnZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vcmV2ZXJzZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluaW5mb21vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnljb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5bGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVybGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBSUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQztBQUpZLDhCQUFTOzs7Ozs7Ozs7OztBQ0h0Qiw0Q0FBNEM7QUFBbkMsK0NBQVc7QUFDcEIsNENBQTRDO0FBQW5DLCtDQUFXO0FBQ3BCLCtDQUFrRDtBQUF6Qyx3REFBYzs7Ozs7Ozs7Ozs7OztBQ0Z2QiwyQ0FBeUM7QUFBaEMsMkNBQVU7Ozs7Ozs7Ozs7QUNBbkIsNENBQTBDO0FBQWpDLDRDQUFVO0FBQ25CLDhDQUE4QztBQUFyQyxrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckIsb0NBQTBDO0FBRzFDLHVDQUFzQztBQUN0Qyx3Q0FBMEM7QUFFMUM7SUFTSSxtQkFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQVMsRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXZDLHNCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElB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QyxVQUFVLElBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBTTs0QkFDdEQsMENBQWUsU0FBUyxFQUFDLFNBQVMsRUFBQyxhQUFhO2dDQUM1QywyQkFBRyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsSUFBSSxFQUFDLEdBQUc7b0NBQ3pDLDZCQUNJLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUNkLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUMzQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQWhDLENBQWdDLEVBQ2hELE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsR0FDMUYsQ0FDRixDQUNILENBQ0osQ0FDRCxDQUNKO1lBcERSLENBb0RRLENBQ1gsQ0FBQztTQUNMO1FBRUQsT0FBTyxDQUNIO1lBQ0ksZ0NBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFNO1lBQzFDLFNBQVMsQ0FDUixDQUNULENBQUM7SUFDTixDQUFDO0lBekxRLFVBQVU7UUFEdEIscUJBQVE7T0FDSSxVQUFVLENBMkx0QjtJQUFELGlCQUFDO0NBQUEsQ0EzTCtCLEtBQUssQ0FBQyxTQUFTLEdBMkw5QztBQTNMWSxnQ0FBVSIsImZpbGUiOiJhZmFtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0U3RvcmUge1xyXG4gICAgcHVibGljIEJpa2VJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIFJldmVyc2VkQmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXTtcclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9wYXJ0c3RvcmUudHMiLCJleHBvcnQgeyBQYXJ0U2VydmljZSB9IGZyb20gXCIuL3BhcnRzZXJ2aWNlXCI7XHJcbmV4cG9ydCB7IEJpa2VTZXJ2aWNlIH0gZnJvbSBcIi4vYmlrZXNlcnZpY2VcIjtcclxuZXhwb3J0IHsgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi9yZXZlcnNlc2VydmljZVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJleHBvcnQgeyBQYXJ0QnJhbmRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvaW5kZXgudHMiLCJleHBvcnQgeyBJbWFnZU1vZGFsIH0gZnJvbSBcIi4vaW1hZ2Vtb2RhbFwiO1xyXG5leHBvcnQgeyBSZXZlcnNlTW9kYWwgfSBmcm9tIFwiLi9yZXZlcnNlbW9kYWxcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL2luZGV4LnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBCaWtlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJpa2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmlrZVN0b3JlIHtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGJpa2U6IEJpa2VNb2RlbDtcclxuXHJcbiAgICBwcml2YXRlIHBhcnRicmFuZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHRoaXMuYmlrZSA9IG5ldyBCaWtlTW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RCcmFuZCA9IHRoaXMuc2VsZWN0QnJhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdENjID0gdGhpcy5zZWxlY3RDYy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9kZWwgPSB0aGlzLnNlbGVjdE1vZGVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gdGhpcy5zZWxlY3RZZWFyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQnJhbmRzID0gdGhpcy51cGRhdGVCcmFuZHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNjcyA9IHRoaXMudXBkYXRlQ2NzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbHMgPSB0aGlzLnVwZGF0ZU1vZGVscy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCaWtlcyA9IHRoaXMudXBkYXRlQmlrZXMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0YnJhbmQgPSB0aGlzLmFwcFN0b3JlLnBhcnRzO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gdGhpcy5hcHBTdG9yZS5sYW5ndWFnZTtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0QnJhbmRzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMudXBkYXRlQnJhbmRzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJyYW5kcyhicmFuZHM6IHN0cmluZ1tdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChicmFuZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBicmFuZHMudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RCcmFuZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UuYnJhbmRzID0gYnJhbmRzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZEJyYW5kID0gYnJhbmRzWzBdO1xyXG5cclxuICAgICAgICBpZiAoYnJhbmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJyYW5kKHRoaXMuYmlrZS5zZWxlY3RlZEJyYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdEJyYW5kKGJyYW5kOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRCcmFuZCA9IGJyYW5kO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UuY2NzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQ2MgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UubW9kZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UueWVhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAwO1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRDQ3ModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVDY3MpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQ2NzKGNjczogc3RyaW5nW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNjcy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdENjXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5jY3MgPSBjY3M7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQ2MgPSBjY3NbMF07XHJcblxyXG4gICAgICAgIGlmIChjY3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2ModGhpcy5iaWtlLnNlbGVjdGVkQ2MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2MoY2M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZENjID0gY2M7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5tb2RlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS55ZWFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IDA7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldE1vZGVscyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLnVwZGF0ZU1vZGVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVNb2RlbHMobW9kZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChtb2RlbHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBtb2RlbHMudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RNb2RlbFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UubW9kZWxzID0gbW9kZWxzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsID0gbW9kZWxzWzBdO1xyXG5cclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdE1vZGVsKG1vZGVsOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBtb2RlbDtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0WWVhcnModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVZZWFycyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVZZWFycyh5ZWFyczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoeWVhcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB5ZWFycy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdFllYXJcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0geWVhcnM7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IHllYXJzWzBdO1xyXG5cclxuICAgICAgICBpZiAoeWVhcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0WWVhcih0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdFllYXIoeWVhcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IHllYXI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0QmlrZXModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy5sYW5ndWFnZSwgdGhpcy51cGRhdGVCaWtlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCaWtlcyhiaWtlczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IChiaWtlcy5sZW5ndGggPiAwKSA/IGJpa2VzWzBdIDogMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlrZVN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2Jpa2VzdG9yZS50cyIsImV4cG9ydCB7IEtpdE1vZGVsIH0gZnJvbSBcIi4va2l0bW9kZWxcIjtcclxuZXhwb3J0IHsgRGVmYXVsdEtpdFN0YXRlLCBLaXRTdGF0ZSB9IGZyb20gXCIuL2tpdHN0YXRlXCI7XHJcbmV4cG9ydCB7IENoYWluTW9kZWwgfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmV4cG9ydCB7IFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi9zcHJvY2tldG1vZGVsXCI7XHJcbmV4cG9ydCB7IEJpa2VNb2RlbCB9IGZyb20gXCIuL2Jpa2Vtb2RlbFwiO1xyXG5leHBvcnQgeyBCYXR0ZXJ5TW9kZWwgfSBmcm9tIFwiLi9iYXR0ZXJ5bW9kZWxcIjtcclxuZXhwb3J0IHsgRmlsdGVyTW9kZWwgfSBmcm9tIFwiLi9maWx0ZXJtb2RlbFwiO1xyXG5leHBvcnQgeyBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4vYmlrZXJldmVyc2Vtb2RlbFwiO1xyXG5leHBvcnQgeyBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuL2NoYWluaW5mb21vZGVsXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvaW5kZXgudHMiLCJpbXBvcnQgeyBDaGFpbk1vZGVsLCBEZWZhdWx0Q2hhaW4gfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmltcG9ydCB7IERlZmF1bHRTcHJvY2tldCwgU3Byb2NrZXRNb2RlbCB9IGZyb20gXCIuL3Nwcm9ja2V0bW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0S2l0U3RhdGU6IEtpdFN0YXRlID0ge1xyXG4gICAgQ3VycmVudENoYWluczogW0RlZmF1bHRDaGFpbl0sXHJcbiAgICBDdXJyZW50Q2hhaW5MZW5ndGg6IDAsXHJcbiAgICBTZWxlY3RlZENoYWluOiBEZWZhdWx0Q2hhaW4sXHJcbiAgICBTZWxlY3RlZEZyb250U3Byb2NrZXQ6IERlZmF1bHRTcHJvY2tldCxcclxuICAgIFNlbGVjdGVkUmVhclNwcm9ja2V0OiBEZWZhdWx0U3Byb2NrZXQsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0U3RhdGUge1xyXG4gICAgcHVibGljIEN1cnJlbnRDaGFpbnM6IENoYWluTW9kZWxbXTtcclxuICAgIHB1YmxpYyBDdXJyZW50Q2hhaW5MZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTZWxlY3RlZENoYWluOiBDaGFpbk1vZGVsO1xyXG4gICAgcHVibGljIFNlbGVjdGVkRnJvbnRTcHJvY2tldDogU3Byb2NrZXRNb2RlbDtcclxuICAgIHB1YmxpYyBTZWxlY3RlZFJlYXJTcHJvY2tldDogU3Byb2NrZXRNb2RlbDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwiZXhwb3J0IGNvbnN0IERlZmF1bHRDaGFpbjogQ2hhaW5Nb2RlbCA9IHtcclxuICAgIENoYWluVHlwZTogXCJcIixcclxuICAgIENoYWluQ29sb3I6IFwiXCIsXHJcbiAgICBDaGFpbkJhc2VOYW1lOiBcIlwiLFxyXG4gICAgQ2hhaW5PcmRlcjogMCxcclxuICAgIElzU3RhbmRhcmQ6IDAsXHJcbiAgICBMZW5ndGg6IDAsXHJcbiAgICBGdWxsTmFtZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFpbk1vZGVsIHtcclxuICAgIHB1YmxpYyBDaGFpblR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFpbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2hhaW5CYXNlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYWluT3JkZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBJc1N0YW5kYXJkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnVsbE5hbWU6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2NoYWlubW9kZWwudHMiLCJleHBvcnQgY29uc3QgRGVmYXVsdFNwcm9ja2V0OiBTcHJvY2tldE1vZGVsID0ge1xyXG4gICAgU3Byb2NrZXROYW1lOiBcIlwiLFxyXG4gICAgUGFydElkOiAwLFxyXG4gICAgU2lkZTogXCJcIixcclxuICAgIEJhc2U6IFwiXCIsXHJcbiAgICBUZWV0aDogMCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJvY2tldE1vZGVsIHtcclxuICAgIHB1YmxpYyBTcHJvY2tldE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTaWRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlZXRoOiBudW1iZXI7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9zcHJvY2tldG1vZGVsLnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBjb21wdXRlZCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgQ2hhaW5Nb2RlbCwgS2l0TW9kZWwsIEtpdFN0YXRlLCBTcHJvY2tldE1vZGVsLCBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEluZm9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2luZm9zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0U3RvcmUgZXh0ZW5kcyBQYXJ0U3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgLy8gVGhlIGtpdHMgbWFuYWdlZCBieSB0aGlzIHN0b3JlXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGtpdHM6IEtpdE1vZGVsW107XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGEgXCJwaWN0dXJlXCIgb2YgYSBzcHJvY2tldFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBTcHJvY2tldEltYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBTcHJvY2tldEltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIEhpZGVTcHJvY2tldEltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBTaG93U3Byb2NrZXRJbWFnZShzcHJvY2tldDogU3Byb2NrZXRNb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VUaXRsZSA9IHNwcm9ja2V0LlNwcm9ja2V0TmFtZTtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYW4gaW1hZ2Ugb2YgdGhlIGNoYWluXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgSGlkZUNoYWluSW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIFNob3dDaGFpbkltYWdlKGNoYWluOiBDaGFpbk1vZGVsLCB1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVRpdGxlID0gY2hhaW4uRnVsbE5hbWU7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGNoYWluIHRlY2huaWNhbCBpbmZvcm1hdGlvbiAgXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW5mb01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW5mbzogQ2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIEhpZGVDaGFpbkluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93Q2hhaW5JbmZvKGNoYWluOiBDaGFpbk1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgSW5mb1NlcnZpY2UuR2V0Q2hhaW5JbmZvKGNoYWluLkZ1bGxOYW1lLCB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlLCB0aGlzLmxvYWRDaGFpbkluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiaWtlIGZvciB3aGljaCBraXRzIGFyZSBzaG93blxyXG4gICAgcHJpdmF0ZSBiaWtlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5raXRzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSAwO1xyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSB0aGlzLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbmZvID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFpbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Byb2NrZXRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwcm9ja2V0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsS2l0U3RhdGUgPSB0aGlzLnNldEluaXRpYWxLaXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhaW5MZW5ndGhzID0gdGhpcy51cGRhdGVDaGFpbkxlbmd0aHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUtpdHMgPSB0aGlzLnVwZGF0ZUtpdHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2hhaW4gPSB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2hhaW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxvYWRDaGFpbkluZm8gPSB0aGlzLmxvYWRDaGFpbkluZm8uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5IaWRlQ2hhaW5JbmZvID0gdGhpcy5IaWRlQ2hhaW5JbmZvLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0tpdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMua2l0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5raXRzLmxlbmd0aCAhPT0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2V0S2l0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBoYW5kbGVTcHJvY2tldENoYW5nZShraXQ6IEtpdE1vZGVsLCBzaWRlOiBzdHJpbmcsIHNwcm9ja2V0OiBTcHJvY2tldE1vZGVsKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGtpdFN0YXRlID0ga2l0LkN1cnJlbnRTdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0ga2l0U3RhdGUuU2VsZWN0ZWRGcm9udFNwcm9ja2V0O1xyXG4gICAgICAgIGxldCByZWFyID0ga2l0U3RhdGUuU2VsZWN0ZWRSZWFyU3Byb2NrZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250RGVmYXVsdCA9IGtpdC5Gcm9udERlZmF1bHRUZWV0aDtcclxuICAgICAgICBjb25zdCByZWFyRGVmYXVsdCA9IGtpdC5SZWFyRGVmYXVsdFRlZXRoO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDaGFpbkxlbmd0aCA9IGtpdC5DaGFpbkxlbmd0aDtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q2hhaW5MZW5ndGggPSBraXRTdGF0ZS5DdXJyZW50Q2hhaW5MZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChzaWRlID09PSBcImZyb250XCIpIHtcclxuICAgICAgICAgICAgZnJvbnQgPSBzcHJvY2tldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWFyID0gc3Byb2NrZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGxpbmtzIHRvIGFkZC9zdWJ0cmFjdCBmcm9tIHRoZSBkZWZhdWx0IGNoYWluIGxlbmd0aFxyXG4gICAgICAgICAgIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdGVldGggb2YgdGhlIHNlbGVjdGVkIGZyb250IGFuZCByZWFyIHNwcm9ja2V0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgZXh0cmFMaW5rcyA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlZXRoRGlmZmVyZW5jZSA9IHJlYXIuVGVldGggLSBmcm9udERlZmF1bHQgKyBmcm9udC5UZWV0aCAtIHJlYXJEZWZhdWx0O1xyXG5cclxuICAgICAgICBpZiAodGVldGhEaWZmZXJlbmNlID4gMCkge1xyXG4gICAgICAgICAgICBleHRyYUxpbmtzID0gKE1hdGguZmxvb3IoKHRlZXRoRGlmZmVyZW5jZSAtIDEpIC8gMykgKyAxKSAqIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZWV0aERpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIGV4dHJhTGlua3MgPSBNYXRoLmNlaWwoKHRlZXRoRGlmZmVyZW5jZSArIDEpIC8gMykgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0NoYWlucyA9IGtpdFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkQ2hhaW4gPSBraXRTdGF0ZS5TZWxlY3RlZENoYWluO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYWluTGVuZ3RoID0gZGVmYXVsdENoYWluTGVuZ3RoICsgZXh0cmFMaW5rcztcclxuXHJcbiAgICAgICAgLyogVXBkYXRlIHRoZSBsZW5ndGggb2YgYWxsIGNoYWlucyBpZiByZXF1aXJlZCAqL1xyXG4gICAgICAgIGlmIChuZXdDaGFpbkxlbmd0aCAhPT0gY3VycmVudENoYWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWlucyA9IHRoaXMudXBkYXRlQ2hhaW5MZW5ndGhzKG5ld0NoYWlucywgbmV3Q2hhaW5MZW5ndGgpO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZENoYWluID0gdGhpcy51cGRhdGVTZWxlY3RlZENoYWluKG5ld0NoYWlucywgbmV3U2VsZWN0ZWRDaGFpbiwgbmV3Q2hhaW5MZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVXBkYXRlIHRoZSBraXQgKi9cclxuICAgICAgICBraXRTdGF0ZS5DdXJyZW50Q2hhaW5zID0gbmV3Q2hhaW5zO1xyXG4gICAgICAgIGtpdFN0YXRlLkN1cnJlbnRDaGFpbkxlbmd0aCA9IG5ld0NoYWluTGVuZ3RoO1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkQ2hhaW4gPSBuZXdTZWxlY3RlZENoYWluO1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkRnJvbnRTcHJvY2tldCA9IGZyb250O1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkUmVhclNwcm9ja2V0ID0gcmVhcjtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgaGFuZGxlQ2hhaW5DaGFuZ2Uoa2l0OiBLaXRNb2RlbCwgY2hhaW46IENoYWluTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBraXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW4gPSBjaGFpbjtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIGdldEtpdHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmlrZUlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIFBhcnRTZXJ2aWNlLkdldEtpdHModGhpcy5hcHBTdG9yZS5wYXJ0cywgdGhpcy5iaWtlSWQsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMudXBkYXRlS2l0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVLaXRzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVLaXRzKG5ld0tpdHM6IEtpdE1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEluaXRpYWxLaXRTdGF0ZShuZXdLaXRzKTtcclxuICAgICAgICB0aGlzLmtpdHMgPSBuZXdLaXRzO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgc2V0SW5pdGlhbEtpdFN0YXRlKGtpdHM6IEtpdE1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICBraXRzLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGU6IEtpdFN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgQ3VycmVudENoYWluTGVuZ3RoOiBrLkNoYWluTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgQ3VycmVudENoYWluczogay5DaGFpbnMsXHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZENoYWluOiBrLkNoYWlucy5maW5kKChjOiBDaGFpbk1vZGVsKSA9PiBjLkZ1bGxOYW1lID09PSBrLkNoYWluKSB8fCBrLkNoYWluc1swXSxcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkRnJvbnRTcHJvY2tldDogay5Gcm9udFNwcm9ja2V0cy5maW5kKChzOiBTcHJvY2tldE1vZGVsKSA9PiBzLlNwcm9ja2V0TmFtZSA9PT0gay5Gcm9udFNwcm9ja2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGsuRnJvbnRTcHJvY2tldHNbMF0sXHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFJlYXJTcHJvY2tldDogay5SZWFyU3Byb2NrZXRzLmZpbmQoKHM6IFNwcm9ja2V0TW9kZWwpID0+IHMuU3Byb2NrZXROYW1lID09PSBrLlJlYXJTcHJvY2tldClcclxuICAgICAgICAgICAgICAgICAgICB8fCBrLlJlYXJTcHJvY2tldHNbMF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGsuQ3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGxlbmd0aCBvZiBhbGwgY2hhaW5zIGFuZCByZXR1cm4gdGhlIG5ldyBsaXN0IG9mIGNoYWluc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0NoYWluTGVuZ3RoIC0gVGhlIG5ldyBsZW5ndGhcclxuICAgICAqL1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGFpbkxlbmd0aHMoY2hhaW5zOiBDaGFpbk1vZGVsW10sIG5ld0NoYWluTGVuZ3RoOiBudW1iZXIpOiBDaGFpbk1vZGVsW10ge1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYWlucyA9IGNoYWlucztcclxuXHJcbiAgICAgICAgbmV3Q2hhaW5zLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgYy5MZW5ndGggPSBuZXdDaGFpbkxlbmd0aCxcclxuICAgICAgICAgICAgYy5GdWxsTmFtZSA9IGMuQ2hhaW5CYXNlTmFtZSArIFwiIFwiICsgbmV3Q2hhaW5MZW5ndGgudG9GaXhlZCgwKSArIFwiTFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3Q2hhaW5zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBsZW5ndGggb2YgdGhlIHNlbGVjdGVkIGNoYWluIGFuZCByZXR1cm4gdGhlIG5ldyBjaGFpblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0NoYWluTGVuZ3RoIC0gVGhlIG5ldyBsZW5ndGhcclxuICAgICAqL1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENoYWluKGNoYWluczogQ2hhaW5Nb2RlbFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2hhaW46IENoYWluTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhaW5MZW5ndGg6IG51bWJlcik6IENoYWluTW9kZWwge1xyXG4gICAgICAgIHJldHVybiBjaGFpbnMuZmluZCgoYykgPT4gYy5DaGFpbkJhc2VOYW1lID09PSBzZWxlY3RlZENoYWluLkNoYWluQmFzZU5hbWUpIHx8IGNoYWluc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgbG9hZENoYWluSW5mbyhpbmZvOiBDaGFpbkluZm9Nb2RlbCkge1xyXG4gICAgICAgIGlmIChpbmZvICYmIGluZm8uUGl0Y2hNbSkge1xyXG4gICAgICAgICAgICB0aGlzLkNoYWluSW5mbyA9IGluZm87XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMva2l0c3RvcmUudHMiLCJpbXBvcnQgeyBhY3Rpb24sIGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuaW1wb3J0IHsgQmF0dGVyeU1vZGVsLCBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQYXJ0U2VydmljZSwgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RvcmUgZXh0ZW5kcyBQYXJ0U3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgLy8gVGhlIGxpc3Qgb2YgYmF0dGVyaWVzIG1hbmFnZWQgYnkgdGhpcyBzdG9yZVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBiYXR0ZXJpZXM6IEJhdHRlcnlNb2RlbFtdO1xyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBhIHBob3RvIG9mIGEgc3BlY2lmaWMgYmF0dGVyeVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIEhpZGVCYXR0ZXJ5SW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93QmF0dGVyeUltYWdlKGJhdHRlcnk6IEJhdHRlcnlNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVXJsID0gYmF0dGVyeS5QaG90bztcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVRpdGxlID0gYmF0dGVyeS5QYXJ0O1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgZXh0cmEgdGVjaG5pY2FsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBhIHNwZWNpZmljIGJhdHRlcnlcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUluZm9Nb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW5mbzogQmF0dGVyeU1vZGVsO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlQmF0dGVyeUluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dCYXR0ZXJ5SW5mbyhiYXR0ZXJ5OiBCYXR0ZXJ5TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvID0gYmF0dGVyeTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJpa2VzIGluIHdoaWNoIGEgc3BlY2lmaWMgYmF0dGVyeSB3b3VsZCBhbHNvIGZpdFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5UmV2ZXJzZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFJldmVyc2VkQmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXTtcclxuXHJcbiAgICBwdWJsaWMgSGlkZVJldmVyc2VkQmlrZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd1JldmVyc2VkQmlrZXMoYmF0dGVyeTogQmF0dGVyeU1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZVRpdGxlID0gYmF0dGVyeS5QYXJ0O1xyXG4gICAgICAgIFJldmVyc2VTZXJ2aWNlLkdldEJpa2VzKGJhdHRlcnkuUGFydElkLCB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyk7ICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXZlcnNlQmlrZXMobmV3QmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IG5ld0Jpa2VzO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RvcmUgY29udGFpbnMgYmF0dGVyaWVzXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgaGFzQmF0dGVyaWVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmJhdHRlcmllcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXR0ZXJpZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBtb3RvcmJpa2UgaWQgZm9yIHdoaWNoIHRoaXMgc3RvcmUgbWFuYWdlcyBiYXR0ZXJpZXNcclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IEJpa2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpa2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEJpa2VJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdldEJhdHRlcmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlcXVlc3QgYSBuZXcgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgZ2V0QmF0dGVyaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJpa2VJZCAhPT0gMCkge1xyXG4gICAgICAgICAgICBQYXJ0U2VydmljZS5HZXRCYXR0ZXJpZXModGhpcy5hcHBTdG9yZS5wYXJ0cywgdGhpcy5iaWtlSWQsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMudXBkYXRlQmF0dGVyaWVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRlcmllcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgdGhlIHJldHJpZXZlZCBsaXN0IG9mIGJhdHRlcmllc1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXR0ZXJpZXMobmV3QmF0dGVyaWVzOiBCYXR0ZXJ5TW9kZWxbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiYXR0ZXJ5IG9mIG5ld0JhdHRlcmllcykge1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LkxheW91dERyYXdpbmcgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvbGF5b3V0L1wiICsgYmF0dGVyeS5MYXlvdXREcmF3aW5nO1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LlRlcm1pbmFsVG9wID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL3Rlcm1pbmFsL3RcIiArIGJhdHRlcnkuVGVybWluYWxUeXBlICsgXCJ0LnBuZ1wiO1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LlRlcm1pbmFsRnJvbnQgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvdGVybWluYWwvdFwiICsgYmF0dGVyeS5UZXJtaW5hbFR5cGUgKyBcImYucG5nXCI7XHJcbiAgICAgICAgICAgIGJhdHRlcnkuVGVybWluYWxTaWRlID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL3Rlcm1pbmFsL3RcIiArIGJhdHRlcnkuVGVybWluYWxUeXBlICsgXCJzLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYXR0ZXJpZXMgPSBuZXdCYXR0ZXJpZXM7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXR0ZXJpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IDA7XHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IHRoaXMuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VVcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVGl0bGUgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mbyA9IG5ldyBCYXR0ZXJ5TW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VUaXRsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQmF0dGVyaWVzID0gdGhpcy51cGRhdGVCYXR0ZXJpZXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyA9IHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvYmF0dGVyeXN0b3JlLnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBjb21wdXRlZCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlck1vZGVsLCBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQYXJ0U2VydmljZSwgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTdG9yZSBleHRlbmRzIFBhcnRTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGZpbHRlcnM6IEZpbHRlck1vZGVsW107XHJcblxyXG4gICAgLyogSW1hZ2UgbW9kYWwgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVySW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVySW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJJbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlRmlsdGVySW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0ZpbHRlckltYWdlKGZpbHRlcjogRmlsdGVyTW9kZWwsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gZmlsdGVyLlBhcnQ7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVVybCA9IHVybDtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBEcmF3aW5nIG1vZGFsICovXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckRyYXdpbmdNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJEcmF3aW5nVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIEhpZGVGaWx0ZXJEcmF3aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0ZpbHRlckRyYXdpbmcoZmlsdGVyOiBGaWx0ZXJNb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBmaWx0ZXIuUGFydDtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG4gICAgLyogUmV2ZXJzZSBhcHBsaWNhdGlvbnMgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVyUmV2ZXJzZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgUmV2ZXJzZWRCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlUmV2ZXJzZWRCaWtlcygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd1JldmVyc2VkQmlrZXMoZmlsdGVyOiBGaWx0ZXJNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZVRpdGxlID0gZmlsdGVyLlBhcnQ7XHJcbiAgICAgICAgUmV2ZXJzZVNlcnZpY2UuR2V0QmlrZXMoZmlsdGVyLlBhcnRJZCwgdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlUmV2ZXJzZUJpa2VzKG5ld0Jpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBuZXdCaWtlcztcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gMDtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nVXJsID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlVGl0bGUgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMgPSB0aGlzLnVwZGF0ZUZpbHRlcnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyA9IHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0ZpbHRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmxlbmd0aCAhPT0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2V0RmlsdGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgZ2V0RmlsdGVycygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iaWtlSWQgIT09IDApIHtcclxuICAgICAgICAgICAgUGFydFNlcnZpY2UuR2V0RmlsdGVycyh0aGlzLmFwcFN0b3JlLnBhcnRzLCB0aGlzLmJpa2VJZCwgdGhpcy5hcHBTdG9yZS5sYW5ndWFnZSwgdGhpcy51cGRhdGVGaWx0ZXJzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZpbHRlcnMobmV3RmlsdGVyczogRmlsdGVyTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IG5ld0ZpbHRlcnM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvZmlsdGVyc3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCIuL3BhcnRzXCI7XHJcbmltcG9ydCB7IFBhcnRCcmFuZHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0LWFwcFwiKTtcclxuXHJcbiAgICBpZiAocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlOiBzdHJpbmcgPSByb290LmRhdGFzZXQubGFuZ3VhZ2UgfHwgXCJlblwiO1xyXG4gICAgICAgIGxldCBwYXJ0czogbnVtYmVyIHwgdW5kZWZpbmVkID0gTnVtYmVyKHJvb3QuZGF0YXNldC5wYXJ0cyk7XHJcblxyXG4gICAgICAgIGlmICghcGFydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gcm9vdC5kYXRhc2V0LnBhcnRzO1xyXG4gICAgICAgICAgICBpZiAoYnJhbmRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZEFycmF5ID0gYnJhbmRzLnJlcGxhY2UoXCIgXCIsXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFydHMgPSBicmFuZHNUb1BhcnRzKGJyYW5kQXJyYXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFydHMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxQYXJ0cyBsYW5ndWFnZT17bGFuZ3VhZ2V9IHBhcnRzPXtwYXJ0c30+PC9QYXJ0cz4sIHJvb3QsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYnJhbmRzVG9QYXJ0cyhicmFuZHM6IHN0cmluZ1tdKTogbnVtYmVyIHtcclxuXHJcbiAgICBsZXQgcGFydHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChjb25zdCBicmFuZCBvZiBicmFuZHMpIHtcclxuICAgICAgICBwYXJ0cyArPSBQYXJ0QnJhbmRzW2JyYW5kXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJ0cztcclxufVxyXG5cclxucmVuZGVyQXBwKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hZmFtYXBwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlLCBCYXR0ZXJ5U3RvcmUsIEZpbHRlclN0b3JlLCBLaXRTdG9yZSB9IGZyb20gXCIuL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCaWtlU2VsZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9iaWtlc1wiO1xyXG5pbXBvcnQgeyBLaXRMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9raXRzXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhdHRlcmllc1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIElQYXJ0c1Byb3BzIHtcclxuICAgIHBhcnRzOiBudW1iZXI7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIFBhcnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQYXJ0c1Byb3BzLCB7fT4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmU6IEFwcFN0b3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUGFydHNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0b3JlID0gbmV3IEFwcFN0b3JlKHRoaXMucHJvcHMucGFydHMsIHRoaXMucHJvcHMubGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRQYXJ0cygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0IHN0b3JlPXt0aGlzLnN0b3JlLmJpa2VTdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYXJ0cygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+SW52YWxpZCBwYXJ0IGNhdGVnb3JpZXM8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRQYXJ0cygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzdXBwb3J0ZWQgPVxyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLkFGQU0gK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLkRDICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5UaHJlZWQgK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLk5pdHJvICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5TaGlkbyArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuSXNvbjtcclxuXHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5wcm9wcy5wYXJ0cyAmIHN1cHBvcnRlZCkgIT09IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFydHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmUucGFydFN0b3JlIGluc3RhbmNlb2YgS2l0U3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8S2l0TGlzdCBzdG9yZT17dGhpcy5zdG9yZS5wYXJ0U3RvcmV9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZS5wYXJ0U3RvcmUgaW5zdGFuY2VvZiBCYXR0ZXJ5U3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8QmF0dGVyeUNvbnRhaW5lciBzdG9yZT17dGhpcy5zdG9yZS5wYXJ0U3RvcmV9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZS5wYXJ0U3RvcmUgaW5zdGFuY2VvZiBGaWx0ZXJTdG9yZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxGaWx0ZXJDb250YWluZXIgc3RvcmU9e3RoaXMuc3RvcmUucGFydFN0b3JlfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYXJ0cy50c3giLCJleHBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmV4cG9ydCB7IEJpa2VTdG9yZSB9IGZyb20gXCIuL2Jpa2VzdG9yZVwiO1xyXG5leHBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuL2tpdHN0b3JlXCI7XHJcbmV4cG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5leHBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi9iYXR0ZXJ5c3RvcmVcIjtcclxuZXhwb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi9maWx0ZXJzdG9yZVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCaWtlU3RvcmUgfSBmcm9tIFwiLi9iaWtlc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4va2l0c3RvcmVcIjtcclxuaW1wb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4vYmF0dGVyeXN0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlclN0b3JlIH0gZnJvbSBcIi4vZmlsdGVyc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuICAgIHB1YmxpYyBiaWtlU3RvcmU6IEJpa2VTdG9yZTtcclxuICAgIHB1YmxpYyBwYXJ0U3RvcmU6IFBhcnRTdG9yZTtcclxuXHJcbiAgICBwcml2YXRlIGJpa2VJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJ0czogbnVtYmVyID0gMSwgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIpIHtcclxuXHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHBvbHlnbG90XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uVGFibGUgPSBUcmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9uVGFibGUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25UYWJsZSA9IFRyYW5zbGF0aW9ucy5lbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSBuZXcgUG9seWdsb3Qoe1xyXG4gICAgICAgICAgICBsb2NhbGU6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICBwaHJhc2VzOiB0cmFuc2xhdGlvblRhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJpa2Ugc3RvcmVcclxuICAgICAgICB0aGlzLmJpa2VTdG9yZSA9IG5ldyBCaWtlU3RvcmUodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGFydHMgc3RvcmVcclxuICAgICAgICBpZiAoKChwYXJ0cyAmIFBhcnRCcmFuZHMuQUZBTSkgIT09IDApIHx8XHJcbiAgICAgICAgICAgICgocGFydHMgJiBQYXJ0QnJhbmRzLkRDKSAhPT0gMCkgfHxcclxuICAgICAgICAgICAgKChwYXJ0cyAmIFBhcnRCcmFuZHMuVGhyZWVkKSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgS2l0U3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCgocGFydHMgJiBQYXJ0QnJhbmRzLlNoaWRvKSAhPT0gMCkgfHwgKChwYXJ0cyAmIFBhcnRCcmFuZHMuTml0cm8pICE9PSAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBCYXR0ZXJ5U3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChwYXJ0cyAmIFBhcnRCcmFuZHMuSXNvbikgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgRmlsdGVyU3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBQYXJ0U3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBCaWtlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaWtlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBCaWtlSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcnRTdG9yZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZS5CaWtlSWQgPSB0aGlzLmJpa2VJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2FwcHN0b3JlLnRzIiwiZXhwb3J0IHsgVHJhbnNsYXRpb25zIH0gZnJvbSBcIi4vdHJhbnNsYXRpb25zXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cmFuc2xhdGlvbnMvaW5kZXgudHMiLCJleHBvcnQgY29uc3QgVHJhbnNsYXRpb25zID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIlNlbGVjdCBhIG1vdG9yYmlrZVwiLFxyXG4gICAgICAgIEJyYW5kOiBcIkJyYW5kXCIsXHJcbiAgICAgICAgQ2M6IFwiQ2NcIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbFwiLFxyXG4gICAgICAgIFllYXI6IFwiWWVhclwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxQbGVhc2Ugc2VsZWN0IGEgYnJhbmQ+XCIsXHJcbiAgICAgICAgU2VsZWN0Q2M6IFwiPFBsZWFzZSBzZWxlY3QgYSBjYz5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8UGxlYXNlIHNlbGVjdCBhIG1vZGVsPlwiLFxyXG4gICAgICAgIFNlbGVjdFllYXI6IFwiPFBsZWFzZSBzZWxlY3QgYSB5ZWFyPlwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVLaXRzOiBcIkFwcGxpY2FibGUga2l0c1wiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiUGFydCBudW1iZXJcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIkZyb250IHNwcm9ja2V0XCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIlJlYXIgc3Byb2NrZXRcIixcclxuICAgICAgICBUZWV0aDogXCJUZWV0aFwiLFxyXG4gICAgICAgIFBhcnQ6IFwiUGFydFwiLFxyXG4gICAgICAgIENoYWluczogXCJDaGFpbnNcIixcclxuICAgICAgICBUeXBlOiBcIlR5cGVcIixcclxuICAgICAgICBDb2xvcjogXCJDb2xvclwiLFxyXG4gICAgICAgIExlbmd0aDogXCJMZW5ndGhcIixcclxuICAgICAgICBJdGVtOiBcIkl0ZW1cIixcclxuICAgICAgICBFQU46IFwiRUFOIGNvZGVcIixcclxuICAgICAgICBWb2x0YWdlOiBcIlZvbHRhZ2VcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJDYXBhY2l0eVwiLFxyXG4gICAgICAgIENDQTogXCJDb2xkIGNyYW5rIGN1cnJlbnRcIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiQWNpZFwiLFxyXG4gICAgICAgIEltYWdlOiBcIkltYWdlXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUJhdHRlcmllczogXCJBcHBsaWNhYmxlIGJhdHRlcmllc1wiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiRHJhd2luZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkFwcGxpY2FibGUgZmlsdGVyc1wiLFxyXG4gICAgICAgIFdpZHRoOiBcIkRlcHRoXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhlaWdodFwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJEcnkgd2VpZ2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkZpbGxlZCB3ZWlnaHRcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIkFjaWQgdm9sdW1lXCIsXHJcbiAgICAgICAgTGF5b3V0RHJhd2luZzogXCJMYXlvdXRcIixcclxuICAgICAgICBDaGFyZ2VQcmVmZXJyZWQ6IFwiUHJlZmVycmVkIGNoYXJnaW5nIGN1cnJlbnRcIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW11bSBjaGFyZ2luZyBjdXJyZW50XCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiVGVybWluYWwgdG9wIHZpZXdcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIlRlcm1pbmFsIGZyb250IHZpZXdcIixcclxuICAgICAgICBUZXJtaW5hbFNpZGU6IFwiVGVybWluYWwgc2lkZSB2aWV3XCIsXHJcbiAgICAgICAgTGl0ZXI6IFwibGl0ZXJcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ3lcIixcclxuICAgICAgICBGcm9tOiBcIkZyb21cIixcclxuICAgICAgICBUbzogXCJUb1wiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlByZXZpb3VzXCIsXHJcbiAgICAgICAgTmV4dDogXCJOZXh0XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIkFwcGxpY2F0aW9uIGxpc3RcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiQXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIkNoYWluIHR5cGVcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlBpdGNoXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJXaWR0aFwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgT3V0ZXJDb2xvcjogXCJDb2xvclwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIkZyb20gQ0NcIixcclxuICAgICAgICBUb0NDOiBcIlRvIENDXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiQnVzaGluZyB0eXBlXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJQaW4gdHlwZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIlJvbGxlciBkaWFtZXRlclwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIlBpbiBkaWFtZXRlclwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiSW50ZXJuYWwgcGxhdGUgdGhpY2tuZXNzXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJFeHRlcm5hbCBwbGF0ZSB0aGlja25lc3NcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBcIkludGVybmFsIHBsYXRlIGhlaWdodFwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IFwiRXh0ZXJuYWwgcGxhdGUgaGVpZ2h0XCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJUZW5zaWxlIHN0cmVuZ3RoXCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIldlaWdodFwiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJTdGFuZGFyZCBjbGlwXCIsXHJcbiAgICAgICAgU3RhbmRhcmRSaXZldDogXCJTdGFuZGFyZCByaXZldFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIlNlYWwgdHlwZVwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcGVyIDEwMCBsaW5rc1wiLFxyXG4gICAgICAgIENsb3NlOiBcIkNsb3NlXCIsXHJcbiAgICB9LFxyXG4gICAgbmw6IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIktpZXMgZWVuIG1vdG9yZmlldHNcIixcclxuICAgICAgICBCcmFuZDogXCJNZXJrXCIsXHJcbiAgICAgICAgQ2M6IFwiQ2NcIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbFwiLFxyXG4gICAgICAgIFllYXI6IFwiSmFhclwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxLaWVzIGVlbiBtZXJrPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxLaWVzIGVlbiBjeWxpbmRlcmluaG91ZD5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8S2llcyBlZW4gbW9kZWw+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8S2llcyBlZW4gYm91d2phYXI+XCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUtpdHM6IFwiR2VzY2hpa3RlIGtpdHNcIixcclxuICAgICAgICBQYXJ0TnVtYmVyOiBcIkFydGlrZWxcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIktldHRpbmd3aWVsIHZvb3JcIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiS2V0dGluZ3dpZWwgYWNodGVyXCIsXHJcbiAgICAgICAgVGVldGg6IFwiVmVydGFuZGluZ1wiLFxyXG4gICAgICAgIFBhcnQ6IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIENoYWluczogXCJLZXR0aW5nXCIsXHJcbiAgICAgICAgVHlwZTogXCJUeXBlXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiS2xldXJcIixcclxuICAgICAgICBMZW5ndGg6IFwiTGVuZ3RlXCIsXHJcbiAgICAgICAgSXRlbTogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRUFOOiBcIkVBTiBjb2RlXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJWb2x0YWdlXCIsXHJcbiAgICAgICAgQ2FwYWNpdHk6IFwiQ2FwYWNpdGVpdFwiLFxyXG4gICAgICAgIENDQTogXCJLb3Vkc3RhcnRzdHJvb21cIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiWnV1clwiLFxyXG4gICAgICAgIEltYWdlOiBcIkFmYmVlbGRpbmdcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkdlc2NoaWt0ZSBiYXR0ZXJpamVuXCIsXHJcbiAgICAgICAgRHJhd2luZzogXCJUZWtlbmluZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkdlc2NoaWt0ZSBmaWx0ZXJzXCIsXHJcbiAgICAgICAgV2lkdGg6IFwiRGllcHRlXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhvb2d0ZVwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJEcm9vZyBnZXdpY2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkdldnVsZCBnZXdpY2h0XCIsXHJcbiAgICAgICAgQWNpZFZvbHVtZTogXCJadXVyIHZvbHVtZVwiLFxyXG4gICAgICAgIExheW91dERyYXdpbmc6IFwiTGF5b3V0XCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIk9wdGltYWxlIGxhYWRzdHJvb21cIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW11bSBsYWFkc3Ryb29tXCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiVGVybWluYWwgYm92ZW5hYW56aWNodFwiLFxyXG4gICAgICAgIFRlcm1pbmFsRnJvbnQ6IFwiVGVybWluYWwgdm9vcmFhbnppY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIlRlcm1pbmFsIHppamFhbnppY2h0XCIsXHJcbiAgICAgICAgTGl0ZXI6IFwibGl0ZXJcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ2llXCIsXHJcbiAgICAgICAgRnJvbTogXCJWYW5cIixcclxuICAgICAgICBUbzogXCJUb3RcIixcclxuICAgICAgICBQcmV2aW91czogXCJWb3JpZ2VcIixcclxuICAgICAgICBOZXh0OiBcIlZvbGdlbmRlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIlRvZXBhc3NpbmdzbGlqc3RcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiVG9lcGFzc2luZ2VuXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIktldHRpbmd0eXBlXCIsXHJcbiAgICAgICAgUGl0Y2hNbTogXCJTdGFwXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJCcmVlZHRlXCIsICAgICAgICBcclxuICAgICAgICBEZXNjcmlwdGlvbjogXCJPbXNjaHJpanZpbmdcIixcclxuICAgICAgICBPdXRlckNvbG9yOiBcIktsZXVyXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb246IFwiVG9lcGFzc2luZ1wiLFxyXG4gICAgICAgIEZyb21DQzogXCJWYW4gQ0NcIixcclxuICAgICAgICBUb0NDOiBcIlRvdCBDQ1wiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIkJ1cyB0eXBlXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJQaW4gdHlwZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIlJvbCBkaWFtZXRlclwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIlBpbiBkaWFtZXRlclwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlrdGUgaW50ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlrdGUgZXh0ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSG9vZ3RlIGludGVybmUgcGxhYXRcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkhvb2d0ZSBleHRlcm5lIHBsYWF0XCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJUcmVrc3Rlcmt0ZVwiLFxyXG4gICAgICAgIFdlaWdodDogXCJHZXdpY2h0XCIsXHJcbiAgICAgICAgU3RhbmRhcmRDbGlwOiBcIlN0YW5kYWFyZCBzbHVpdHNjaGFrZWxcIixcclxuICAgICAgICBTdGFuZGFyZFJpdmV0OiBcIlN0YW5kYWFyZCByaXZlZXIgc2x1aXRzY2hha2VsXCIsXHJcbiAgICAgICAgU2VhbFR5cGU6IFwiRGljaHRpbmcgdHlwZVwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcGVyIDEwMCBzY2hha2Vsc1wiLFxyXG4gICAgICAgIENsb3NlOiBcIlNsdWl0ZW5cIixcclxuICAgIH0sXHJcbiAgICBkZToge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiTW90b3JyYWR3YWhsXCIsXHJcbiAgICAgICAgQnJhbmQ6IFwiTWFya2VcIixcclxuICAgICAgICBDYzogXCJIdWJyYW1cIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbGxcIixcclxuICAgICAgICBZZWFyOiBcIkphaHJcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGllIE1hcmtlPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkZXIgSHVicmF1bT5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGFzIE1vZGVsbD5cIixcclxuICAgICAgICBTZWxlY3RZZWFyOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkYXMgQmF1amFocj5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJHZWVpZ25ldGUgS2l0c1wiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIEZyb250U3Byb2NrZXQ6IFwiUml0emVsXCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIktldHRlbnJhZFwiLFxyXG4gICAgICAgIFRlZXRoOiBcIlrDpGhuZVwiLFxyXG4gICAgICAgIFBhcnQ6IFwiVGVpbFwiLFxyXG4gICAgICAgIENoYWluczogXCJLZXR0ZVwiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiRmFyYmVcIixcclxuICAgICAgICBMZW5ndGg6IFwiTMOkbmdlXCIsXHJcbiAgICAgICAgSXRlbTogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRUFOOiBcIkVBTiBDb2RlXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJTcGFubnVuZ1wiLFxyXG4gICAgICAgIENhcGFjaXR5OiBcIkthcGF6aXTDpHRcIixcclxuICAgICAgICBDQ0E6IFwiS2FsdHN0YXJ0c3Ryb21cIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiU8OkdXJlXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiQmlsZFwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVCYXR0ZXJpZXM6IFwiR2VlaWduZXRlIEJhdHRlcmllblwiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiWmVpY2hudW5nXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiR2VlaWduZXRlIEZpbHRlclwiLFxyXG4gICAgICAgIFdpZHRoOiBcIlRpZWZlXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkjDtmhlXCIsXHJcbiAgICAgICAgRHJ5V2VpZ2h0OiBcIlRyb2NrZW5nZXdpY2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkdld2ljaHQgZ2Vmw7xsbHRcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIlPDpHVyZXZvbHVtZW5cIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkxheW91dFwiLFxyXG4gICAgICAgIENoYXJnZVByZWZlcnJlZDogXCJCZXZvcnp1Z3RlciBMYWRlc3Ryb21cIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW1hbGVyIExhZGVzdHJvbVwiLFxyXG4gICAgICAgIFRlcm1pbmFsVG9wOiBcIkJhdHRlcmllcG9sIEF1ZnNpY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxGcm9udDogXCJCYXR0ZXJpZXBvbCBWb3JkZXJhbnNpY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIkJhdHRlcmllcG9sIFNlaXRlbmFuc2ljaHRcIixcclxuICAgICAgICBMaXRlcjogXCJMaXRlclwiLFxyXG4gICAgICAgIFRlY2hub2xvZ3k6IFwiVGVjaG5vbG9naWVcIixcclxuICAgICAgICBGcm9tOiBcIlZvblwiLFxyXG4gICAgICAgIFRvOiBcIkJpc1wiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlZvcmhlcmlnZVwiLFxyXG4gICAgICAgIE5leHQ6IFwiTsOkY2hzdGVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbkxpc3Q6IFwiQW53ZW5kdW5nc2xpc3RlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25zOiBcIkFud2VuZHVuZ2VuXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIktldHRlbiBUeXBcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlRlaWx1bmdcIixcclxuICAgICAgICBQaXRjaFdpZHRoOiBcIkJyZWl0ZVwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIlVtc2NocmVpYnVuZ1wiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiRmFyYmVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbjogXCJBbndlbmR1bmdcIixcclxuICAgICAgICBGcm9tQ0M6IFwiVm9uIEh1YnJhdW1cIixcclxuICAgICAgICBUb0NDOiBcIkJpcyBIdWJyYXVtXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiQnVjaHNlIFR5cFwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiQm9semVuIFR5cFwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIldhbHplbmR1cmNobWVzc2VyXCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiQm9semVuZHVyY2htZXNzZXJcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkRpY2tlIGludGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJEaWNrZSBleHRlcm5lIFBsYXR0ZVwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSMO2aGUgaW50ZXJuZSBQbGF0dGVcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkjDtmhlIGV4dGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJadWdmZXN0aWdrZWl0XCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIkdld2ljaHRcIixcclxuICAgICAgICBTdGFuZGFyZENsaXA6IFwiU3RhbmRhcmQgQmluZGVnbGlldFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiU3RhbmRhYXJkIE5pZXRcIixcclxuICAgICAgICBTZWFsVHlwZTogXCJEaWNodHVuZyBUeXBcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBybyAxMDAgR2xpZWRlclwiLFxyXG4gICAgICAgIENsb3NlOiBcIlNjaGxpZcOfZW5cIixcclxuICAgIH0sXHJcbiAgICBmcjoge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiQ2hvaXNpc3NleiB1bmUgbW90b1wiLFxyXG4gICAgICAgIEJyYW5kOiBcIk1hcnF1ZVwiLFxyXG4gICAgICAgIENjOiBcIkN5bGluZHLDqWVcIixcclxuICAgICAgICBNb2RlbDogXCJNb2TDqGxlXCIsXHJcbiAgICAgICAgWWVhcjogXCJBbm7DqWVcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8Uy52LnAuIGNob2lzaXIgdW5lIG1hcnF1ZT5cIixcclxuICAgICAgICBTZWxlY3RDYzogXCI8Uy52LnAuIGNob2lzaXIgdW5lIGN5bGluZHLDqWU+XCIsXHJcbiAgICAgICAgU2VsZWN0TW9kZWw6IFwiPFMudi5wLiBjaG9pc2lyIHVuIG1vZMOobGU+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8Uy52LnAuIGNob2lzaXIgdW5lIGFubsOpZT5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJLaXRzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgUGFydE51bWJlcjogXCJBcnRpY2xlXCIsXHJcbiAgICAgICAgRnJvbnRTcHJvY2tldDogXCJQaWdub25cIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiQ291cm9ubmVcIixcclxuICAgICAgICBUZWV0aDogXCJEZW50dXJlXCIsXHJcbiAgICAgICAgUGFydDogXCJQacOoY2VcIixcclxuICAgICAgICBDaGFpbnM6IFwiQ2hhw65uZVwiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwZVwiLFxyXG4gICAgICAgIENvbG9yOiBcIkNvdWxldXJcIixcclxuICAgICAgICBMZW5ndGg6IFwiTG9uZ3VldXJcIixcclxuICAgICAgICBJdGVtOiBcIkFydGljbGVcIixcclxuICAgICAgICBFQU46IFwiQ29kZSBFQU5cIixcclxuICAgICAgICBWb2x0YWdlOiBcIlZvbHRhZ2VcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJDYXBhY2l0w6lcIixcclxuICAgICAgICBDQ0E6IFwiQ291cmFudCBkZSBkw6ltYXJyYWdlIMOgIGZyb2lkXCIsXHJcbiAgICAgICAgQUdNOiBcIkFHTVwiLFxyXG4gICAgICAgIEdlbDogXCJHZWxcIixcclxuICAgICAgICBBY2lkOiBcIkFjaWRlXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiSW1hZ2VcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkJhdHRlcmllcyBwb3NzaWJsZXNcIixcclxuICAgICAgICBEcmF3aW5nOiBcIlZpZ25ldHRlXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiRmlsdHJlcyBwb3NzaWJsZXNcIixcclxuICAgICAgICBXaWR0aDogXCJQcm9mb25kZXVyXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhhdXRldXJcIixcclxuICAgICAgICBEcnlXZWlnaHQ6IFwiUG9pZHMgw6Egc2VjXCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIlBvaWRzIHJlbXBsaVwiLFxyXG4gICAgICAgIEFjaWRWb2x1bWU6IFwiVm9sdW1lIGQnYWNpZGVcIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkRpc3Bvc2l0aW9uXCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIkNvdXJhbnQgZGUgY2hhcmdlIG5vcm1hbFwiLFxyXG4gICAgICAgIENoYXJnZU1heDogXCJDb3VyYW50IGRlIGNoYXJnZSBtYXhpbXVtXCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiQm9ybmUsIHZ1ZSBkZSBkZXNzdXNcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIkJvcm5lLCB2dWUgZGUgZmFjZVwiLFxyXG4gICAgICAgIFRlcm1pbmFsU2lkZTogXCJCb3JuZSwgdnVlIGRlIGPDtHTDqVwiLFxyXG4gICAgICAgIExpdGVyOiBcImxpdHJlXCIsXHJcbiAgICAgICAgVGVjaG5vbG9neTogXCJUZWNobm9sb2dpZVwiLFxyXG4gICAgICAgIEZyb206IFwiRGVcIixcclxuICAgICAgICBUbzogXCLDgFwiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlByw6ljw6lkZW50XCIsXHJcbiAgICAgICAgTmV4dDogXCJTdWl2YW50XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIkxpc3RlIGRlcyBhcHBsaWNhdGlvbnNcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiQXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIlR5cGUgZGUgY2hhw65uZVwiLFxyXG4gICAgICAgIFBpdGNoTW06IFwiUGFzXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJMYXJnZXVyXCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiRMOpbm9taW5hdGlvblwiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIkRlIGN5bGluZHLDqWVcIixcclxuICAgICAgICBUb0NDOiBcIkEgY3lsaW5kcsOpZVwiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIlR5cGUgZGUgbGEgZG91aWxsZVwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiVHlwZSBkJ2F4ZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIkRpYW3DqHRyZSByb3VsZWF1XCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiRGlhbcOodHJlIGQnYXhlXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCLDiXBhaXNzZXVyIGRlIGxhIHBsYXF1ZSBpbnRlcm5lXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCLDiXBhaXNzZXVyIGRlIGxhIHBsYXF1ZSBleHRlcm5lXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogXCJIYXV0ZXVyIGRlIGxhIHBsYXF1ZSBpbnRlcm5lXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogXCJIYXV0ZXVyIGRlIGxhIHBsYXF1ZSBleHRlcm5lXCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJSw6lzaXN0YW5jZSDDoCBsYSB0cmFjdGlvblwiLFxyXG4gICAgICAgIFdlaWdodDogXCJQb2lkc1wiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJBdHRhY2hlIHJhcGlkZSBzdGFuZGFyZFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiTWFpbGxvbiBzdGFuZGFyZFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIlR5cGUgZGUgam9pbnRcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBhciAxMDAgbWFpbGxvbnNcIixcclxuICAgICAgICBDbG9zZTogXCJGZXJtZXJcIixcclxuICAgIH0sXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwiaW1wb3J0IHsgRGVmYXVsdEtpdFN0YXRlLCBLaXRTdGF0ZSB9IGZyb20gXCIuL2tpdHN0YXRlXCI7XHJcbmltcG9ydCB7IENoYWluTW9kZWwgfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmltcG9ydCB7IFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi9zcHJvY2tldG1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0TW9kZWwge1xyXG4gICAgcHVibGljIEtpdElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgS2l0QnJhbmQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIEtpdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBGcm9udFNwcm9ja2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgRnJvbnREZWZhdWx0VGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZWFyU3Byb2NrZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBSZWFyRGVmYXVsdFRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hhaW46IHN0cmluZztcclxuICAgIHB1YmxpYyAgQ2hhaW5MZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGFpbkJhc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaXRjaDogbnVtYmVyO1xyXG4gICAgcHVibGljIE1hdGVyaWFsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgS2l0Ym94OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSXNTdGFuZGFyZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb250TWluaW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnJvbnRNYXhpbXVtVGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZWFyTWluaW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUmVhck1heGltdW1UZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb250U3Byb2NrZXRzOiBTcHJvY2tldE1vZGVsW107XHJcbiAgICBwdWJsaWMgUmVhclNwcm9ja2V0czogU3Byb2NrZXRNb2RlbFtdO1xyXG4gICAgcHVibGljIENoYWluczogQ2hhaW5Nb2RlbFtdO1xyXG4gICAgcHVibGljIExhbmd1YWdlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgS2l0VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbnRTdGF0ZTogS2l0U3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5DdXJyZW50U3RhdGUgPSBEZWZhdWx0S2l0U3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9raXRtb2RlbC50cyIsImltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpa2VNb2RlbCB7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIGJyYW5kczogc3RyaW5nW107XHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgc2VsZWN0ZWRCcmFuZDogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBjY3M6IHN0cmluZ1tdO1xyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHNlbGVjdGVkQ2M6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgbW9kZWxzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZE1vZGVsOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHllYXJzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZFllYXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIHRoaXMuYnJhbmRzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRCcmFuZCA9IFwiXCI7XHJcblxyXG4gICAgICB0aGlzLmNjcyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2MgPSBcIlwiO1xyXG5cclxuICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gXCJcIjtcclxuXHJcbiAgICAgIHRoaXMueWVhcnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlrZU1vZGVsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2Jpa2Vtb2RlbC50cyIsImV4cG9ydCBjbGFzcyBCYXR0ZXJ5TW9kZWwge1xyXG4gICAgcHVibGljIFBhcnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBFQU46IHN0cmluZztcclxuICAgIHB1YmxpYyBCYXR0ZXJ5VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFZvbHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDYXBhY2l0eTogbnVtYmVyO1xyXG4gICAgcHVibGljIENDQTogbnVtYmVyO1xyXG4gICAgcHVibGljIEFHTTogc3RyaW5nO1xyXG4gICAgcHVibGljIEdlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIEFjaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaG90bzogc3RyaW5nO1xyXG4gICAgcHVibGljIExlbmd0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRHJ5V2VpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRmlsbGVkV2VpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQWNpZFZvbHVtZTogbnVtYmVyO1xyXG4gICAgcHVibGljIFRlcm1pbmFsVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlcm1pbmFsRHJhd2luZzogc3RyaW5nO1xyXG4gICAgcHVibGljIExheW91dERyYXdpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFyZ2VQcmVmZXJyZWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGFyZ2VNYXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBUZXJtaW5hbFRvcDogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlcm1pbmFsRnJvbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBUZXJtaW5hbFNpZGU6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2JhdHRlcnltb2RlbC50cyIsImV4cG9ydCBjbGFzcyBGaWx0ZXJNb2RlbCB7XHJcbiAgICBwdWJsaWMgUGFydDogc3RyaW5nO1xyXG4gICAgcHVibGljIFBhcnRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEVBTjogc3RyaW5nO1xyXG4gICAgcHVibGljIFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaG90bzogc3RyaW5nO1xyXG4gICAgcHVibGljIERyYXdpbmc6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2ZpbHRlcm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIEJpa2VSZXZlcnNlTW9kZWwge1xyXG4gICAgcHVibGljIEJyYW5kOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2M6IG51bWJlcjtcclxuICAgIHB1YmxpYyBNb2RlbDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb206IG51bWJlcjtcclxuICAgIHB1YmxpYyBUbzogbnVtYmVyO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9iaWtlcmV2ZXJzZW1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIENoYWluSW5mb01vZGVsIHtcclxuICAgIENoYWluTmFtZTogc3RyaW5nO1xyXG4gICAgUGl0Y2g6IG51bWJlcjtcclxuICAgIEJyYW5kOiBzdHJpbmc7XHJcbiAgICBCYXNlTmFtZTogc3RyaW5nO1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIENvbG9yTmFtZTogc3RyaW5nO1xyXG4gICAgT3V0ZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgSW5uZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgQXBwbGljYXRpb246IG51bWJlcjtcclxuICAgIFVzZU1vcGVkOiBudW1iZXI7XHJcbiAgICBVc2VDcm9zczogbnVtYmVyO1xyXG4gICAgVXNlT2Zmcm9hZDogbnVtYmVyO1xyXG4gICAgVXNlU3RyZWV0OiBudW1iZXI7XHJcbiAgICBVc2VTcG9ydDogbnVtYmVyO1xyXG4gICAgVXNlUmFjaW5nOiBudW1iZXI7XHJcbiAgICBGcm9tQ2M6IG51bWJlcjtcclxuICAgIFRvQ2M6IG51bWJlcjtcclxuICAgIFBpdGNoTW06IG51bWJlcjtcclxuICAgIFBpdGNoV2lkdGg6IG51bWJlcjtcclxuICAgIEJ1c2g6IHN0cmluZztcclxuICAgIFBpbjogc3RyaW5nO1xyXG4gICAgUm9sbGVyRGlhbWV0ZXI6IG51bWJlcjtcclxuICAgIFBpbkRpYW1ldGVyOiBudW1iZXI7XHJcbiAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBMMTogbnVtYmVyO1xyXG4gICAgTDI6IG51bWJlcjtcclxuICAgIFRlbnNpbGVTdHJlbmd0aDogbnVtYmVyO1xyXG4gICAgV2VpZ2h0OiBudW1iZXI7XHJcbiAgICBTdGFuZGFyZENsaXA6IHN0cmluZztcclxuICAgIFNsaXBGaXRDbGlwOiBzdHJpbmc7XHJcbiAgICBQcmVzc0ZpdENsaXA6IHN0cmluZztcclxuICAgIFN0YW5kYXJkUml2ZXQ6IHN0cmluZztcclxuICAgIFNvZnRSaXZldDogc3RyaW5nO1xyXG4gICAgU2VhbFR5cGU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvY2hhaW5pbmZvbW9kZWwudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlNb2RlbCwgRmlsdGVyTW9kZWwsIEtpdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEtpdHMocGFydEJyYW5kczogbnVtYmVyLCBiaWtlSWQ6IG51bWJlciwgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKHBhcnRzOiBLaXRNb2RlbFtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgUGFydFNlcnZpY2UuR2V0PEtpdE1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRCcmFuZHN9L2Jpa2UvJHtiaWtlSWR9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QmF0dGVyaWVzKHBhcnRCcmFuZHM6IG51bWJlciwgYmlrZUlkOiBudW1iZXIsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChwYXJ0czogQmF0dGVyeU1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBQYXJ0U2VydmljZS5HZXQ8QmF0dGVyeU1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRCcmFuZHN9L2Jpa2UvJHtiaWtlSWR9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0RmlsdGVycyhwYXJ0QnJhbmRzOiBudW1iZXIsIGJpa2VJZDogbnVtYmVyLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAocGFydHM6IEZpbHRlck1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBQYXJ0U2VydmljZS5HZXQ8RmlsdGVyTW9kZWxbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydEJyYW5kc30vYmlrZS8ke2Jpa2VJZH0vJHtsYW5ndWFnZX1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9wYXJ0c2VydmljZS50cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQmlrZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpa2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyYW5kcyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6IChicmFuZHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c31gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRDQ3MocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBkb25lOiAoY2NzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9P2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldE1vZGVscyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6IChtb2RlbHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9JmNjPSR7YmlrZS5zZWxlY3RlZENjfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFllYXJzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgZG9uZTogKHllYXJzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9P2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfSZjYz0ke2Jpa2Uuc2VsZWN0ZWRDY30mbW9kZWw9JHtiaWtlLnNlbGVjdGVkTW9kZWx9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QmlrZXMocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAoYmlrZXM6IG51bWJlcltdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PG51bWJlcltdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30vYmlrZXM/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9JmNjPSR7YmlrZS5zZWxlY3RlZENjfSZtb2RlbD0ke2Jpa2Uuc2VsZWN0ZWRNb2RlbH0meWVhcj0ke2Jpa2Uuc2VsZWN0ZWRZZWFyfSZsYW5ndWFnZT0ke2xhbmd1YWdlfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXQ8VD4oVVJMOiBzdHJpbmcsIGRvbmU6ICh2YWx1ZXM6IFQpID0+IHZvaWQsIGVycm9yVmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkb25lKGVycm9yVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJldmVyc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJpa2VzKHBhcnRpZDogbnVtYmVyLCBkb25lOiAocGFydHM6IEJpa2VSZXZlcnNlTW9kZWxbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIFJldmVyc2VTZXJ2aWNlLkdldDxCaWtlUmV2ZXJzZU1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL3JldmVyc2UvJHtwYXJ0aWR9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldDxUPihVUkw6IHN0cmluZywgZG9uZTogKHZhbHVlczogVCkgPT4gdm9pZCwgZXJyb3JWYWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRvbmUoZXJyb3JWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvcmV2ZXJzZXNlcnZpY2UudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENoYWluSW5mb01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZm9TZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENoYWluSW5mbyhjaGFpbk5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKGluZm86IENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgSW5mb1NlcnZpY2UuR2V0PENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9pbmZvL2NoYWluLyR7Y2hhaW5OYW1lfS8ke2xhbmd1YWdlfWAsIGRvbmUsIHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9pbmZvc2VydmljZS50cyIsImV4cG9ydCBlbnVtIFBhcnRCcmFuZHMge1xyXG4gICAgQUZBTSA9IDEsXHJcbiAgICBEQyA9IDIsXHJcbiAgICBUaHJlZWQgPSA0LFxyXG4gICAgU2hpZG8gPSA4LFxyXG4gICAgTml0cm8gPSAxNixcclxuICAgIFl1YXNhID0gMzIsXHJcbiAgICBJc29uID0gNjQsXHJcbiAgICBFQkNCcmFrZXMgPSAxMjgsXHJcbiAgICBFQkNDbHV0Y2hlcyA9IDI1NixcclxuICAgIE5HSyA9IDUxMixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsImV4cG9ydCB7IEJpa2VTZWxlY3QgfSBmcm9tIFwiLi9iaWtlc2VsZWN0XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2Jpa2VzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQmlrZVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCaWtlU2VsZWN0Um93IH0gZnJvbSBcIi4vYmlrZXNlbGVjdF9yb3dcIjtcclxuXHJcbmludGVyZmFjZSBJQmlrZVNlbGVjdFByb3BzIHtcclxuICAgIHN0b3JlOiBCaWtlU3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSBzcGVjaWZpYyBtb3RvcmJpa2VcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmlrZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmlrZVNlbGVjdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmlrZVNlbGVjdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGJpa2UgPSBzdG9yZS5iaWtlO1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2x5LnQoXCJCaWtlU2VsZWN0XCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLmJyYW5kc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3BvbHkudChcIkJyYW5kXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YmlrZS5zZWxlY3RlZEJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdEJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3RSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Jpa2UuY2NzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiQ2NcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtiaWtlLnNlbGVjdGVkQ2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbE9wdGlvbkNoYW5nZT17c3RvcmUuc2VsZWN0Q2N9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YmlrZS5tb2RlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwb2x5LnQoXCJNb2RlbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3B0aW9uQ2hhbmdlPXtzdG9yZS5zZWxlY3RNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLnllYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiWWVhclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iaWtlcy9iaWtlc2VsZWN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCaWtlU2VsZWN0Um93UHJvcGVydGllcyB7XHJcbiAgICBpdGVtczogc3RyaW5nW107XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcclxuICAgIHNpZ25hbE9wdGlvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSBzcGVjaWZpYyBtb3RvcmJpa2VcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmlrZVNlbGVjdFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmlrZVNlbGVjdFJvd1Byb3BlcnRpZXMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCaWtlU2VsZWN0Um93UHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNwYW4gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYikgPT4gPG9wdGlvbiBrZXk9e2J9IHZhbHVlPXtifT57Yn08L29wdGlvbj4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdENsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNwYW5DbGFzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdENsYXNzID0gXCJiaWtlLXNlbGVjdC1jZWxsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHNwYW5DbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Q2xhc3MgPSBcImJpa2Utc2VsZWN0LWNlbGxcIjtcclxuICAgICAgICAgICAgICAgIHNwYW5DbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbC1ub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCA9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e3NwYW5DbGFzc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtc1swXX1cclxuICAgICAgICAgICAgPC9zcGFuPjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1zZWxlY3QtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXNlbGVjdC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcGFufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaWduYWxPcHRpb25DaGFuZ2UoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4IiwiZXhwb3J0IHsgS2l0TGlzdCB9IGZyb20gXCIuL2tpdGxpc3RcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBLaXQgfSBmcm9tIFwiLi9raXRcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2hhaW5JbmZvTW9kYWwgfSBmcm9tIFwiLi9jaGFpbmluZm9tb2RhbFwiO1xyXG5cclxuaW50ZXJmYWNlIElLaXRMaXN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGtpdHNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgS2l0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJS2l0TGlzdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJS2l0TGlzdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICAgICBcclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5oYXNLaXRzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQga2l0Q29tcG9uZW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpdHMgPSB0aGlzLnByb3BzLnN0b3JlLmtpdHM7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2l0cykge1xyXG4gICAgICAgICAgICAgICAga2l0Q29tcG9uZW50cyA9IGtpdHMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImtpdF9cIiArIHMuUGFydElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQXBwbGljYWJsZUtpdHNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7a2l0Q29tcG9uZW50c31cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5TcHJvY2tldEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLlNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVTcHJvY2tldEltYWdlKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJTcHJvY2tldEltYWdlTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiU3Byb2NrZXRNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuU3Byb2NrZXRJbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlQ2hhaW5JbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiQ2hhaW5JbWFnZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkNoYWluTW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpbkluZm9Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbz17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuc3RvcmUuSGlkZUNoYWluSW5mb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGFpbkluZm9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMva2l0bGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgS2l0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEtpdEJvbSB9IGZyb20gXCIuL2tpdGJvbVwiO1xyXG5cclxuaW50ZXJmYWNlIElLaXRQcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBraXRcclxuICogSXQgZGlzcGxheXMgdGhlIGtpdCB0eXBlLCBraXQgbmFtZSBhbmQga2l0IGNvbXBvbmVudHMgKHRocm91Z2ggYSBLaXRCb20gY2hpbGQgY29tcG9uZW50KVxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBLaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUtpdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJS2l0UHJvcHMsIHt9KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGtpdCA9IHRoaXMucHJvcHMua2l0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10aXRsZVwiPntraXQuS2l0VHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWtpdHBhcnRcIj57dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiUGFydE51bWJlclwiKX06IDxzcGFuIGNsYXNzTmFtZT1cImtpdC10YWJsZS1raXRuYW1lXCI+e2tpdC5LaXROYW1lfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1kZXNjcmlwdGlvblwiPntraXQuRGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEtpdEJvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wia2l0Ym9tX1wiICsga2l0LlBhcnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2l0PXtraXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDaGFpbiB9IGZyb20gXCIuL2NoYWluXCI7XHJcbmltcG9ydCB7IFNwcm9ja2V0IH0gZnJvbSBcIi4vc3Byb2NrZXRcIjtcclxuXHJcbmludGVyZmFjZSBJS2l0Qm9tUHJvcHMge1xyXG4gICAga2l0OiBLaXRNb2RlbDtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElLaXRCb21MaXN0U3RhdGUge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIHRoZSBwYXJ0cyB0aGF0IG1ha2UgdXAgYSBraXQ6IGZyb250IHNwcm9ja2V0LCByZWFyIHNwcm9ja2V0IGFuZCBjaGFpblxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBLaXRCb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUtpdEJvbVByb3BzLCBJS2l0Qm9tTGlzdFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElLaXRCb21Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAod2luZG93LmlubmVyV2lkdGggPCA4MDApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhcHNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogd2luZG93LmlubmVyV2lkdGggPCA4MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiRnJvbnRTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJvY2tldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT1cImZyb250XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiQ2hhaW5zXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiUmVhclNwcm9ja2V0XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwicmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGVmYXVsdCgpIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtcGFydHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIkZyb250U3Byb2NrZXRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiQ2hhaW5zXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIlJlYXJTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwiZnJvbnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Byb2NrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9XCJyZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMva2l0Ym9tLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBDaGFpbk1vZGVsLCBLaXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBJQ2hhaW5Qcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNoYWluU3RhdGUge1xyXG4gICAgdGh1bWJuYWlsVmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IGRpc3BsYXlpbmcgdGhlIGNoYWluIHRoYXQgaXMgcGFydCBvZiBhIGtpdC5cclxuICogSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGNoYWluIHR5cGUgYW5kIGNvbG9yIHdoZXJlIHJlbGV2YW50XHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIENoYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDaGFpblByb3BzLCBJQ2hhaW5TdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQ2hhaW5Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZENoYWluID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW47XHJcbiAgICAgICAgY29uc3QgY2hhaW5zID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcbiAgICAgICAgY29uc3QgY2hhaW5UeXBlcyA9IHRoaXMuZ2V0VHlwZXMoY2hhaW5zKTtcclxuICAgICAgICBjb25zdCBjaGFpbkNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKGNoYWlucywgc2VsZWN0ZWRDaGFpbi5DaGFpblR5cGUpO1xyXG5cclxuICAgICAgICBsZXQgY2hhaW5UeXBlT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluVHlwZVNpbmdsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluVHlwZVNlbGVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjaGFpbkNvbG9yT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluQ29sb3JTaW5nbGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBjaGFpbkNvbG9yU2VsZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICBCdWlsZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgY2hhaW4gdHlwZVxyXG4gICAgICAgICAgIFVzZSBhIHNwYW4gaW5zdGVhZCBvZiBhIHNlbGVjdCBpZiB0aGVyZSBpcyBvbmx5IG9uZSBpdGVtXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAoY2hhaW5UeXBlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNoYWluVHlwZU9wdGlvbnMgPSBjaGFpblR5cGVzLm1hcCgodCkgPT4gPG9wdGlvbiBrZXk9e3R9IHZhbHVlPXt0fT57dH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICBjaGFpblR5cGVTZWxlY3QgPVxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDaGFpbi5DaGFpblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHlwZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYWluVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlID0gY2hhaW5UeXBlc1swXTtcclxuICAgICAgICAgICAgY2hhaW5UeXBlU2luZ2xlID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaW5nbGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgIEJ1aWxkIHRoZSBzZWxlY3QgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBjaGFpbiBjb2xvclxyXG4gICAgICAgICAgIFVzZSBhIHNwYW4gaW5zdGVhZCBvZiBhIHNlbGVjdCBpZiB0aGVyZSBpcyBvbmx5IG9uZSBjb2xvclxyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKGNoYWluQ29sb3JzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY2hhaW5Db2xvck9wdGlvbnMgPSBjaGFpbkNvbG9ycy5tYXAoKHQpID0+IDxvcHRpb24ga2V5PXt0fSB2YWx1ZT17dH0+e3R9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgY2hhaW5Db2xvclNlbGVjdCA9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENoYWluLkNoYWluQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29sb3JDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFpbkNvbG9yT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGUgPSBjaGFpbkNvbG9yc1swXTtcclxuICAgICAgICAgICAgY2hhaW5Db2xvclNpbmdsZSA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2luZ2xlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9jaGFpbnMvXCIgKyBzZWxlY3RlZENoYWluLkNoYWluQmFzZU5hbWUgKyBcIi5qcGdcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlR5cGVcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluVHlwZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpblR5cGVTaW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiQ29sb3JcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluQ29sb3JTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5Db2xvclNpbmdsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJMZW5ndGhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+e3NlbGVjdGVkQ2hhaW4uTGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlBhcnRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1wYXJ0bmFtZSBraXRwYXJ0LWlubGluZVwiPntzZWxlY3RlZENoYWluLkZ1bGxOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0NoYWluSW5mbyhzZWxlY3RlZENoYWluKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fT4mIzk0MzI7PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRodW1ibmFpbChzZWxlY3RlZENoYWluLCBpbWFnZVVSTCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHJpdmF0ZSB0aHVtYm5haWwoY2hhaW46IENoYWluTW9kZWwsIGltYWdlVVJMOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aHVtYm5haWxWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGh1bWJuYWlsIGtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhaW4tdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0NoYWluSW1hZ2UoY2hhaW4sIGltYWdlVVJMKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgcG9zc2libGUgY2hhaW4gdHlwZXMgZnJvbSB0aGUgbGlzdCBvZiBjaGFpbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRUeXBlcyhjaGFpbnM6IENoYWluTW9kZWxbXSk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgIGlmICghdHlwZXMuZmluZCgocCkgPT4gcCA9PT0gY2hhaW4uQ2hhaW5UeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goY2hhaW4uQ2hhaW5UeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgcG9zc2libGUgY2hhaW4gY29sb3JzIGZvciBhIHNwZWNpZmljIHR5cGUgb2YgY2hhaW5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHlwZSAtIFRoZSB0eXBlIHRvIGZpbHRlciBvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENvbG9ycyhjaGFpbnM6IENoYWluTW9kZWxbXSwgYXR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBhdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb2xvcnMuZmluZCgocCkgPT4gcCA9PT0gY2hhaW4uQ2hhaW5Db2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5Db2xvciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjaGFpbi5DaGFpbkNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXNlciBzZWxlY3RlZCBhIG5ldyB0eXBlIG9mIGNoYWluXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlVHlwZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRDaGFpbi5DaGFpbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2hhaW5zID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdDaGFpbjogQ2hhaW5Nb2RlbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyogVHJ5IHRvIGZpbmQgYSBjaGFpbiB3aXRoIHRoZSBzZWxlY3RlZCB0eXBlIGFuZCB0aGUgY29sb3IgdGhhdCBpcyBwYXJ0IG9mIHRoZSBwcm9wcyAoaS5lLiB0aGUgZGVmYXVsdCBjb2xvcikgKi9cclxuICAgICAgICBjb25zdCB0eXBlY29sb3JjaGFpbnM6IENoYWluTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgY2hhaW4gaGFzIHRoZSByZXF1aXJlZCB0eXBlIGFuZCBjb2xvclxyXG4gICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgY2hhaW4uQ2hhaW5Db2xvciA9PT0gc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQW5kIGl0IGlzIG5vdCB5ZXQgcHJlc2VudCBpbiB0aGUgb3V0cHV0IGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR5cGVjb2xvcmNoYWlucy5maW5kKChwKSA9PiAocC5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSAmJiBwLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZW4gYWRkIGl0IHRvIHRoZSBvdXRwdXQgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0eXBlY29sb3JjaGFpbnMucHVzaChjaGFpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlY29sb3JjaGFpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdDaGFpbiA9IHR5cGVjb2xvcmNoYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIElmIG5vIGNoYWluIGNvdWxkIGJlIGZvdW5kLCBzZWxlY3QgdGhlIGZpcnN0IGNoYWluIG9mIHRoZSBzZWxlY3RlZCB0eXBlICovXHJcbiAgICAgICAgaWYgKCFuZXdDaGFpbikge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlY2hhaW5zOiBDaGFpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVjaGFpbnMuZmluZCgocCkgPT4gcC5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWNoYWlucy5wdXNoKGNoYWluKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlY2hhaW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld0NoYWluID0gdHlwZWNoYWluc1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSWYgc3RpbGwgbm8gY2hhaW4gY291bGQgYmUgZm91bmQsIHBpY2sgdGhlIGZpcnN0IG9uZSAqL1xyXG4gICAgICAgIGlmICghbmV3Q2hhaW4pIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSBjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBTZXQgdGh1bWJuYWlsIGJhY2sgdG8gdmlzaWJsZSAqL1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBTaWduYWwgdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgY2hhaW4gd2FzIGNoYW5nZWQgKi9cclxuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhbmRsZUNoYWluQ2hhbmdlKHRoaXMucHJvcHMua2l0LCBuZXdDaGFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXNlciBzZWxlY3RlZCBhIG5ldyBjaGFpbiBjb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUNvbG9yQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW4uQ2hhaW5UeXBlO1xyXG4gICAgICAgIGNvbnN0IGNoYWlucyA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5DdXJyZW50Q2hhaW5zO1xyXG5cclxuICAgICAgICBsZXQgbmV3Q2hhaW46IENoYWluTW9kZWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qIFRyeSB0byBmaW5kIGEgY2hhaW4gd2l0aCB0aGUgc2VsZWN0ZWQgdHlwZSBhbmQgdGhlIGNvbG9yIHRoYXQgaXMgcGFydCBvZiB0aGUgcHJvcHMgKGkuZS4gdGhlIGRlZmF1bHQgY29sb3IpICovXHJcbiAgICAgICAgY29uc3QgdHlwZWNvbG9yY2hhaW5zOiBDaGFpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlICYmIGNoYWluLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdHlwZWNvbG9yY2hhaW5zLmZpbmQoKHApID0+IHAuQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgcC5DaGFpbkNvbG9yID09PSBzZWxlY3RlZENvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVjb2xvcmNoYWlucy5wdXNoKGNoYWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVjb2xvcmNoYWlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWluID0gdHlwZWNvbG9yY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSWYgbm8gY2hhaW4gY291bGQgYmUgZm91bmQsIHBpY2sgdGhlIGZpcnN0IG9uZSAqL1xyXG4gICAgICAgIGlmICghbmV3Q2hhaW4pIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSBjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBTZXQgdGh1bWJuYWlsIGJhY2sgdG8gdmlzaWJsZSAqL1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBTaWduYWwgdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgY2hhaW4gd2FzIGNoYW5nZWQgKi9cclxuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhbmRsZUNoYWluQ2hhbmdlKHRoaXMucHJvcHMua2l0LCBuZXdDaGFpbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdE1vZGVsLCBTcHJvY2tldE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElTcHJvY2tldFByb3BzIHtcclxuICAgIGtpdDogS2l0TW9kZWw7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbiAgICBzaWRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU3Byb2NrZXRTdGF0ZSB7XHJcbiAgICB0aHVtYm5haWxWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgZGlzcGxheWluZyBhIHNwcm9ja2V0IHRoYXQgaXMgcGFydCBvZiBhIGtpdFxyXG4gKiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IHRoZSBudW1iZXIgb2YgdGVldGhcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgU3Byb2NrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNwcm9ja2V0UHJvcHMsIElTcHJvY2tldFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElTcHJvY2tldFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc3Byb2NrZXRzID0gbnVsbDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcHJvY2tldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNpZGUgPT09IFwiZnJvbnRcIikge1xyXG4gICAgICAgICAgICBzcHJvY2tldHMgPSB0aGlzLnByb3BzLmtpdC5Gcm9udFNwcm9ja2V0cztcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcHJvY2tldCA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZEZyb250U3Byb2NrZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3Byb2NrZXRzID0gdGhpcy5wcm9wcy5raXQuUmVhclNwcm9ja2V0cztcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcHJvY2tldCA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZFJlYXJTcHJvY2tldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNwcm9ja2V0T3B0aW9ucyA9IHNwcm9ja2V0cy5tYXAoKHMpID0+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17cy5QYXJ0SWR9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cy5TcHJvY2tldE5hbWV9PntzLlRlZXRofVxyXG4gICAgICAgICAgICA8L29wdGlvbj4pO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZVVSTCA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL3Nwcm9ja2V0cy8zZC92aWduZXR0ZXMvXCIgKyBzZWxlY3RlZFNwcm9ja2V0LlNwcm9ja2V0TmFtZSArIFwiLmpwZ1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJUZWV0aFwiKX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkU3Byb2NrZXQuU3Byb2NrZXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT57c3Byb2NrZXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiUGFydFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1wYXJ0bmFtZSBraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+e3NlbGVjdGVkU3Byb2NrZXQuU3Byb2NrZXROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRodW1ibmFpbChzZWxlY3RlZFNwcm9ja2V0LCBpbWFnZVVSTCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRodW1ibmFpbChzcHJvY2tldDogU3Byb2NrZXRNb2RlbCwgaW1hZ2VVUkw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRodW1ibmFpbFZpc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10aHVtYm5haWwga2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcHJvY2tldC10aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93U3Byb2NrZXRJbWFnZShzcHJvY2tldCwgaW1hZ2VVUkwpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmZvcm0gdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBzZWxlY3RlZCBhIGRpZmZlcmVudCBudW1iZXIgb2YgdGVldGggKGkuZS4gYSBkaWZmZXJlbnQgc3Byb2NrZXQpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNwcm9ja2V0TmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3Byb2NrZXRzID0gKHRoaXMucHJvcHMuc2lkZSA9PT0gXCJmcm9udFwiKSA/IHRoaXMucHJvcHMua2l0LkZyb250U3Byb2NrZXRzIDogdGhpcy5wcm9wcy5raXQuUmVhclNwcm9ja2V0cztcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNwcm9ja2V0ID0gc3Byb2NrZXRzLmZpbmQoKHM6IFNwcm9ja2V0TW9kZWwpID0+IHMuU3Byb2NrZXROYW1lID09PSBjdXJyZW50U3Byb2NrZXROYW1lKSB8fCBzcHJvY2tldHNbMF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5oYW5kbGVTcHJvY2tldENoYW5nZSh0aGlzLnByb3BzLmtpdCwgdGhpcy5wcm9wcy5zaWRlLCBzZWxlY3RlZFNwcm9ja2V0KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL3Nwcm9ja2V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElJbWFnZU1vZGFsUHJvcHMge1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxuICAgIG9uSGlkZTogRnVuY3Rpb247XHJcbiAgICBpbWFnZVVybDogc3RyaW5nO1xyXG4gICAgbW9kYWxJZDogc3RyaW5nO1xyXG4gICAgaW1hZ2VJZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNsb3NlVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW1hZ2VNb2RhbFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLm1vZGFsSWR9IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPXt0aGlzLnByb3BzLmltYWdlSWR9IHNyYz17dGhpcy5wcm9wcy5pbWFnZVVybH0gY2xhc3NOYW1lPVwibW9kYWxfaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2xvc2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL2ltYWdlbW9kYWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuXHJcbmludGVyZmFjZSBJUmV2ZXJzZU1vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IFBhcnRTdG9yZTtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZXZlcnNlTW9kYWxTdGF0ZSB7XHJcbiAgICBzZWxlY3RlZFBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJldmVyc2VNb2RhbFByb3BzLCBJUmV2ZXJzZU1vZGFsU3RhdGU+IHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2Vfc2l6ZTogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElSZXZlcnNlTW9kYWxQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUGFnZTogMCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZSA9IHRoaXMudXBkYXRlUGFnZS5iaW5kKHRoaXMpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGFnZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQYWdlOiBkYXRhLnNlbGVjdGVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICAgICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmlrZWxpc3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsQmlrZXMgPSB0aGlzLnByb3BzLnN0b3JlLlJldmVyc2VkQmlrZXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChhbGxCaWtlcy5sZW5ndGggLyB0aGlzLnBhZ2Vfc2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpa2VzVG9EaXNwbGF5ID0gYWxsQmlrZXMuc2xpY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgKiB0aGlzLnBhZ2Vfc2l6ZSwgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICsgMSkgKiB0aGlzLnBhZ2Vfc2l6ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmlrZXNUb0Rpc3BsYXkpIHtcclxuICAgICAgICAgICAgICAgIGJpa2VsaXN0ID0gYmlrZXNUb0Rpc3BsYXkubWFwKChiLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcInJldmVyc2VfXCIgKyBpfSBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1sZWZ0XCI+e2IuQnJhbmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1jZW50ZXJcIj57Yi5DY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWxlZnRcIj57Yi5Nb2RlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWNlbnRlclwiPntiLkZyb219PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1jZW50ZXJcIj57Yi5Ub308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiQnJhbmRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJDY1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIk1vZGVsXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiRnJvbVwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIlRvXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaWtlbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17cG9seS50KFwiUHJldmlvdXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e3BvbHkudChcIk5leHRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMudXBkYXRlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJwYWdpbmF0b3ItYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWZCdWlsZGVyPXsoKSA9PiB7IHJldHVybiBcIiNcIjsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvbHkudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL3JldmVyc2Vtb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQ2hhaW5JbmZvTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUNoYWluSW5mb01vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG4gICAgaW5mbzogQ2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQ7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgb25IaWRlOiBGdW5jdGlvbjtcclxufVxyXG5cclxuQG9ic2VydmVyIGV4cG9ydCBjbGFzcyBDaGFpbkluZm9Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2hhaW5JbmZvTW9kYWxQcm9wcywge30+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgJiYgdGhpcy5wcm9wcy5pbmZvKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wcm9wcy5pbmZvO1xyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5mby5DaGFpbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoYWluLWluZm8tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNoYWluVHlwZVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpdGNoXCI+e2luZm8uUGl0Y2h9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJEZXNjcmlwdGlvblwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0Rlc2NyaXB0aW9uXCI+e2luZm8uRGVzY3JpcHRpb259PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJPdXRlckNvbG9yXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvT3V0ZXJDb2xvclwiPntpbmZvLk91dGVyQ29sb3J9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUGl0Y2hNbVwiKX0gKFApOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaXRjaE1tXCI+e2luZm8uUGl0Y2hNbX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlBpdGNoV2lkdGhcIil9IChXKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGl0Y2hXaWR0aFwiPntpbmZvLlBpdGNoV2lkdGh9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkJ1c2hUeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvQnVzaFwiPntpbmZvLkJ1c2h9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaW5UeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGluXCI+e2luZm8uUGlufTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlJvbGxlckRpYW1ldGVyXCIpfSAoUik6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1JvbGxlckRpYW1ldGVyXCI+e2luZm8uUm9sbGVyRGlhbWV0ZXJ9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaW5EaWFtZXRlclwiKX0gKEQpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaW5EaWFtZXRlclwiPntpbmZvLlBpbkRpYW1ldGVyfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiSW50ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiKX0gKFQpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9JbnRlcm5hbFBsYXRlVGhpY2tuZXNzXCI+e2luZm8uSW50ZXJuYWxQbGF0ZVRoaWNrbmVzc308L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkV4dGVybmFsUGxhdGVUaGlja25lc3NcIil9ICh0KTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiPntpbmZvLkV4dGVybmFsUGxhdGVUaGlja25lc3N9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJJbnRlcm5hbFBsYXRlSGVpZ2h0XCIpfSAoSCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0ludGVybmFsUGxhdGVIZWlnaHRcIj57aW5mby5JbnRlcm5hbFBsYXRlSGVpZ2h0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRXh0ZXJuYWxQbGF0ZUhlaWdodFwiKX0gKGgpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9FeHRlcm5hbFBsYXRlSGVpZ2h0XCI+e2luZm8uRXh0ZXJuYWxQbGF0ZUhlaWdodH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTDFcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9MMVwiPntpbmZvLkwxfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJMMlwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0wyXCI+e2luZm8uTDJ9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlbnNpbGVTdHJlbmd0aFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1RlbnNpbGVTdHJlbmd0aFwiPntpbmZvLlRlbnNpbGVTdHJlbmd0aH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5kYU48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIldlaWdodFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1dlaWdodFwiPntpbmZvLldlaWdodH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj57cG9seS50KFwiS2dQZXIxMDBMaW5rc1wiKX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlN0YW5kYXJkQ2xpcFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1N0YW5kYXJkQ2xpcFwiPntpbmZvLlN0YW5kYXJkQ2xpcH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlN0YW5kYXJkUml2ZXRcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9TdGFuZGFyZFJpdmV0XCI+e2luZm8uU3RhbmRhcmRSaXZldH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlNlYWxUeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvU2VhbFR5cGVcIj57aW5mby5TZWFsVHlwZX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYWZhbS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdGhlbWVzL25ldEFmYW0vYWZhbXBhcnRzL2NoYWluX2RpbS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9seS50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9jaGFpbmluZm9tb2RhbC50c3giLCJleHBvcnQgeyBCYXR0ZXJ5Q29udGFpbmVyIH0gZnJvbSBcIi4vYmF0dGVyeWNvbnRhaW5lclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlMaXN0IH0gZnJvbSBcIi4vYmF0dGVyeWxpc3RcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCwgUmV2ZXJzZU1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5SW5mb01vZGFsIH0gZnJvbSBcIi4vYmF0dGVyeWluZm9tb2RhbFwiO1xyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5Q29udGFpbmVyUHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIG1hbmFnaW5nIGEgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmF0dGVyeUNvbnRhaW5lclByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCYXR0ZXJ5Q29udGFpbmVyUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgIFxyXG4gICAgfSAgIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuYmF0dGVyaWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmF0dGVyeUxpc3Qgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUJhdHRlcnlJbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiQmF0dGVyeU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkJhdHRlcnlNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmF0dGVyeUluZm9Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0dGVyeT17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUJhdHRlcnlJbmZvKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmF0dGVyeUluZm9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZXJzZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlUmV2ZXJzZWRCaWtlcygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5UmV2ZXJzZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1JldmVyc2VNb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvYmF0dGVyeWNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJhdHRlcnlMaXN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTsgICAgXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQmF0dGVyeUxpc3RTdGF0ZSB7XHJcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEJhdHRlcnlMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCYXR0ZXJ5TGlzdFByb3BzLCBJQmF0dGVyeUxpc3RTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmF0dGVyeUxpc3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAod2luZG93LmlubmVyV2lkdGggPCA4MDApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhcHNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXNDb2xsYXBzZWQgPSAod2luZG93LmlubmVyV2lkdGggPCA4MDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQgIT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGlzQ29sbGFwc2VkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbWFnZUVycm9yKGl0ZW06IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgICBcclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVBhcnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICBjb25zdCBiYXR0ZXJpZXMgPSB0aGlzLnByb3BzLnN0b3JlLmJhdHRlcmllcztcclxuXHJcbiAgICAgICAgaWYgKGJhdHRlcmllcykge1xyXG4gICAgICAgICAgICB0aGVQYXJ0cyA9IGJhdHRlcmllcy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpLnRvU3RyaW5nKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkl0ZW1cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlBhcnR9PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkVBTlwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5CYXR0ZXJ5VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVm9sdFwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuVm9sdH0gVjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDYXBhY2l0eVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQ2FwYWNpdHl9IEFoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNDQVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQ0NBfSBBPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFHTVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQUdNfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJHZWxcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkdlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQWNpZFwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQWNpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW5mb1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5mby1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9pbmZvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUluZm8ocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUltYWdlKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlQmF0dGVyaWVzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJUZWNobm9sb2d5XCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJWb2x0YWdlXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJDYXBhY2l0eVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQ0NBXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJBR01cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkdlbFwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQWNpZFwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+SW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhlUGFydHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVRhYmxlcyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgYmF0dGVyaWVzID0gdGhpcy5wcm9wcy5zdG9yZS5iYXR0ZXJpZXM7XHJcblxyXG4gICAgICAgIGlmIChiYXR0ZXJpZXMpIHtcclxuICAgICAgICAgICAgdGhlVGFibGVzID0gYmF0dGVyaWVzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlIGNvbGxhcHNlZFwiIGtleT17aS50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuUGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJUZWNobm9sb2d5XCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiA+e3MuQmF0dGVyeVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIlZvbHRhZ2VcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVm9sdFwiPntzLlZvbHR9IFY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQ2FwYWNpdHlcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ2FwYWNpdHlcIj57cy5DYXBhY2l0eX0gQWg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQ0NBXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNDQVwiPntzLkNDQX0gQTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJBR01cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQUdNXCI+e3MuQUdNfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJHZWxcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiR2VsXCI+e3MuR2VsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJBY2lkXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFjaWRcIj57cy5BY2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5JbmZvPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW5mb1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9pbmZvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW5mbyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW1hZ2Uocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUJhdHRlcmllc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAge3RoZVRhYmxlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlsaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQmF0dGVyeU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5SW5mb01vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTtcclxuICAgIGJhdHRlcnk6IEJhdHRlcnlNb2RlbDtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXIgZXhwb3J0IGNsYXNzIEJhdHRlcnlJbmZvTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJhdHRlcnlJbmZvTW9kYWxQcm9wcywge30+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRlcnkgPSB0aGlzLnByb3BzLmJhdHRlcnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXR0ZXJ5LlBhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYmF0dGVyeS1pbmZvLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVm9sdGFnZVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvVm9sdFwiPntiYXR0ZXJ5LlZvbHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPlY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNhcGFjaXR5XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DYXBhY2l0eVwiPntiYXR0ZXJ5LkNhcGFjaXR5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ0NBXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DQ0FcIj57YmF0dGVyeS5DQ0F9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkFHTVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQUdNXCI+e2JhdHRlcnkuQUdNfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkdlbFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvR0VMXCI+e2JhdHRlcnkuR2VsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkxlbmd0aFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvTGVuZ3RoXCI+e2JhdHRlcnkuTGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5tbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiV2lkdGhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb1dpZHRoXCI+e2JhdHRlcnkuV2lkdGh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPm1tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJIZWlnaHRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0hlaWdodFwiPntiYXR0ZXJ5LkhlaWdodH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+bW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkRyeVdlaWdodFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvRHJ5V2VpZ2h0XCI+eyhiYXR0ZXJ5LkRyeVdlaWdodCA9PSAwKSA/IFwiLS1cIiA6IGJhdHRlcnkuRHJ5V2VpZ2h0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5rZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRmlsbGVkV2VpZ2h0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9GaWxsZWRXZWlnaHRcIj57KGJhdHRlcnkuRmlsbGVkV2VpZ2h0ID09IDApID8gXCItLVwiIDogYmF0dGVyeS5GaWxsZWRXZWlnaHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPmtnPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJBY2lkVm9sdW1lXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9BY2lkVm9sdW1lXCI+eyhiYXR0ZXJ5LkFjaWRWb2x1bWUgPT0gMCkgPyBcIi0tXCIgOiBiYXR0ZXJ5LkFjaWRWb2x1bWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPntwb2x5LnQoXCJMaXRlclwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNoYXJnZVByZWZlcnJlZFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQ2hhcmdlUHJlZmVycmVkXCI+e2JhdHRlcnkuQ2hhcmdlUHJlZmVycmVkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDaGFyZ2VNYXhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0NoYXJnZU1heFwiPntiYXR0ZXJ5LkNoYXJnZU1heH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+QTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTGF5b3V0RHJhd2luZ1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXR0ZXJ5LkxheW91dERyYXdpbmd9IGNsYXNzTmFtZT1cImJhdHRlcnktbGF5b3V0LWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVybWluYWxUb3BcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5UZXJtaW5hbFRvcH0gY2xhc3NOYW1lPVwiYmF0dGVyeS10ZXJtaW5hbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1kcmF3aW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlcm1pbmFsRnJvbnRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5UZXJtaW5hbEZyb250fSBjbGFzc05hbWU9XCJiYXR0ZXJ5LXRlcm1pbmFsLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVybWluYWxTaWRlXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhdHRlcnkuVGVybWluYWxTaWRlfSBjbGFzc05hbWU9XCJiYXR0ZXJ5LXRlcm1pbmFsLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZXJzZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dSZXZlcnNlZEJpa2VzKGJhdHRlcnkpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19Pntwb2x5LnQoXCJBcHBsaWNhdGlvbkxpc3RcIil9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9seS50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4IiwiZXhwb3J0IHsgRmlsdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vZmlsdGVyY29udGFpbmVyXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJMaXN0IH0gZnJvbSBcIi4vZmlsdGVybGlzdFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCwgUmV2ZXJzZU1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuaW50ZXJmYWNlIElGaWx0ZXJDb250YWluZXJQcm9wcyB7XHJcbiAgICBzdG9yZTogRmlsdGVyU3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBtYW5hZ2luZyB0aGUgc3RhdGUgb2YgYSBsaXN0IG9mIGZpbHRlcnNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGaWx0ZXJDb250YWluZXJQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJRmlsdGVyQ29udGFpbmVyUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5maWx0ZXJzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlRmlsdGVySW1hZ2UoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkZpbHRlckltYWdlTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiRmlsdGVySW1hZ2VNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVySW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckRyYXdpbmdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUZpbHRlckRyYXdpbmcoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkZpbHRlckRyYXdpbmdNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJGaWx0ZXJEcmF3aW5nTW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZXJzZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlUmV2ZXJzZWRCaWtlcygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlclJldmVyc2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXZlcnNlTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbHRlckxpc3RQcm9wcyB7XHJcbiAgICBzdG9yZTogRmlsdGVyU3RvcmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsdGVyTGlzdFN0YXRlIHtcclxuICAgIGNvbGxhcHNlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciB0byBkaXNwbGF5IGEgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgRmlsdGVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRmlsdGVyTGlzdFByb3BzLCBJRmlsdGVyTGlzdFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElGaWx0ZXJMaXN0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xsYXBzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkICE9IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBpc0NvbGxhcHNlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW1hZ2VFcnJvcihpdGVtOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgICAgIGxldCB0aGVQYXJ0cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMucHJvcHMuc3RvcmUuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgdGhlUGFydHMgPSBmaWx0ZXJzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2kudG9TdHJpbmcoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSXRlbVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuUGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRUFOXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5FQU59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFwcGxpY2F0aW9uc1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9iaWtlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93UmV2ZXJzZWRCaWtlcyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJJbWFnZShzLCBzLlBob3RvKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLkRyYXdpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0ZpbHRlckRyYXdpbmcocywgcy5EcmF3aW5nKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUZpbHRlcnNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJFQU5cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIlR5cGVcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkFwcGxpY2F0aW9uc1wiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkRyYXdpbmdcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZVBhcnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ29sbGFwc2VkKCkge1xyXG4gICAgICAgIGxldCB0aGVUYWJsZXMgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnByb3BzLnN0b3JlLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoZVRhYmxlcyA9IGZpbHRlcnMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBhcnQtdGFibGUgY29sbGFwc2VkXCIga2V5PXtpLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzLlBhcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIlR5cGVcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiID57cy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkFwcGxpY2F0aW9uc1wiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9iaWtlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dSZXZlcnNlZEJpa2VzKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93RmlsdGVySW1hZ2Uocywgcy5QaG90byk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJEcmF3aW5nXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkRyYXdpbmdcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5EcmF3aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJEcmF3aW5nKHMsIHMuRHJhd2luZyk7IGUucHJldmVudERlZmF1bHQoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlRmlsdGVyc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAge3RoZVRhYmxlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJsaXN0LnRzeCJdLCJzb3VyY2VSb290IjoiIn0=