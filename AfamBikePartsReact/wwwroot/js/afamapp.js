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
var bikeservice_1 = __webpack_require__(98);
exports.BikeService = bikeservice_1.BikeService;
var reverseservice_1 = __webpack_require__(99);
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
var constants_1 = __webpack_require__(101);
exports.PartBrands = constants_1.PartBrands;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imagemodal_1 = __webpack_require__(111);
exports.ImageModal = imagemodal_1.ImageModal;
var reversemodal_1 = __webpack_require__(112);
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
var infoservice_1 = __webpack_require__(100);
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
var bikes_1 = __webpack_require__(102);
var kits_1 = __webpack_require__(105);
var batteries_1 = __webpack_require__(122);
var filters_1 = __webpack_require__(126);
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
/* 98 */
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
/* 99 */
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
/* 100 */
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
/* 101 */
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bikeselect_1 = __webpack_require__(103);
exports.BikeSelect = bikeselect_1.BikeSelect;


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
var bikeselect_row_1 = __webpack_require__(104);
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kitlist_1 = __webpack_require__(106);
exports.KitList = kitlist_1.KitList;


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
var kit_1 = __webpack_require__(107);
var common_1 = __webpack_require__(15);
var chaininfomodal_1 = __webpack_require__(121);
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
var kitbom_1 = __webpack_require__(108);
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
var chain_1 = __webpack_require__(109);
var sprocket_1 = __webpack_require__(110);
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
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var batterycontainer_1 = __webpack_require__(123);
exports.BatteryContainer = batterycontainer_1.BatteryContainer;


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
var batterylist_1 = __webpack_require__(124);
var common_1 = __webpack_require__(15);
var batteryinfomodal_1 = __webpack_require__(125);
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filtercontainer_1 = __webpack_require__(127);
exports.FilterContainer = filtercontainer_1.FilterContainer;


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
var filterlist_1 = __webpack_require__(128);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL3BhcnRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9iaWtlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMvY2hhaW5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL3Nwcm9ja2V0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9raXRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2JhdHRlcnlzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2ZpbHRlcnN0b3JlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hZmFtYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFydHMudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9hcHBzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHJhbnNsYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMva2l0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iaWtlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iYXR0ZXJ5bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9maWx0ZXJtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2Jpa2VyZXZlcnNlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9jaGFpbmluZm9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvcGFydHNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9yZXZlcnNlc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5mb3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRsaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRib20udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvc3Byb2NrZXQudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbWFnZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vcmV2ZXJzZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluaW5mb21vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnljb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5bGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVybGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBSUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQztBQUpZLDhCQUFTOzs7Ozs7Ozs7OztBQ0h0Qiw0Q0FBNEM7QUFBbkMsK0NBQVc7QUFDcEIsNENBQTRDO0FBQW5DLCtDQUFXO0FBQ3BCLCtDQUFrRDtBQUF6Qyx3REFBYzs7Ozs7Ozs7Ozs7Ozs7QUNGdkIsMkNBQXlDO0FBQWhDLDJDQUFVOzs7Ozs7Ozs7O0FDQW5CLDRDQUEwQztBQUFqQyw0Q0FBVTtBQUNuQiw4Q0FBOEM7QUFBckMsa0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHJCLG9DQUEwQztBQUcxQyx1Q0FBc0M7QUFDdEMsd0NBQTBDO0FBRTFDO0lBU0ksbUJBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakMsSUFBSSxDQUFD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RUFBQyxVQUFVLElBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBTTs0QkFDdEQsMENBQWUsU0FBUyxFQUFDLFNBQVMsRUFBQyxhQUFhO2dDQUM1QywyQkFBRyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsSUFBSSxFQUFDLEdBQUc7b0NBQ3pDLDZCQUNJLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUNkLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUMzQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQWhDLENBQWdDLEVBQ2hELE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsR0FDMUYsQ0FDRixDQUNILENBQ0osQ0FDRCxDQUNKO1lBcERSLENBb0RRLENBQ1gsQ0FBQztTQUNMO1FBRUQsT0FBTyxDQUNIO1lBQ0ksZ0NBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFNO1lBQzFDLFNBQVMsQ0FDUixDQUNULENBQUM7SUFDTixDQUFDO0lBekxRLFVBQVU7UUFEdEIscUJBQVE7T0FDSSxVQUFVLENBMkx0QjtJQUFELGlCQUFDO0NBQUEsQ0EzTCtCLEtBQUssQ0FBQyxTQUFTLEdBMkw5QztBQTNMWSxnQ0FBVSIsImZpbGUiOiJhZmFtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0U3RvcmUge1xyXG4gICAgcHVibGljIEJpa2VJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIFJldmVyc2VkQmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXTtcclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9wYXJ0c3RvcmUudHMiLCJleHBvcnQgeyBQYXJ0U2VydmljZSB9IGZyb20gXCIuL3BhcnRzZXJ2aWNlXCI7XHJcbmV4cG9ydCB7IEJpa2VTZXJ2aWNlIH0gZnJvbSBcIi4vYmlrZXNlcnZpY2VcIjtcclxuZXhwb3J0IHsgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi9yZXZlcnNlc2VydmljZVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJleHBvcnQgeyBQYXJ0QnJhbmRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvaW5kZXgudHMiLCJleHBvcnQgeyBJbWFnZU1vZGFsIH0gZnJvbSBcIi4vaW1hZ2Vtb2RhbFwiO1xyXG5leHBvcnQgeyBSZXZlcnNlTW9kYWwgfSBmcm9tIFwiLi9yZXZlcnNlbW9kYWxcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL2luZGV4LnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBCaWtlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJpa2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmlrZVN0b3JlIHtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGJpa2U6IEJpa2VNb2RlbDtcclxuXHJcbiAgICBwcml2YXRlIHBhcnRicmFuZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHRoaXMuYmlrZSA9IG5ldyBCaWtlTW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RCcmFuZCA9IHRoaXMuc2VsZWN0QnJhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdENjID0gdGhpcy5zZWxlY3RDYy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9kZWwgPSB0aGlzLnNlbGVjdE1vZGVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gdGhpcy5zZWxlY3RZZWFyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQnJhbmRzID0gdGhpcy51cGRhdGVCcmFuZHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNjcyA9IHRoaXMudXBkYXRlQ2NzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbHMgPSB0aGlzLnVwZGF0ZU1vZGVscy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCaWtlcyA9IHRoaXMudXBkYXRlQmlrZXMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0YnJhbmQgPSB0aGlzLmFwcFN0b3JlLnBhcnRzO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gdGhpcy5hcHBTdG9yZS5sYW5ndWFnZTtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0QnJhbmRzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMudXBkYXRlQnJhbmRzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJyYW5kcyhicmFuZHM6IHN0cmluZ1tdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChicmFuZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBicmFuZHMudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RCcmFuZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UuYnJhbmRzID0gYnJhbmRzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZEJyYW5kID0gYnJhbmRzWzBdO1xyXG5cclxuICAgICAgICBpZiAoYnJhbmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJyYW5kKHRoaXMuYmlrZS5zZWxlY3RlZEJyYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdEJyYW5kKGJyYW5kOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRCcmFuZCA9IGJyYW5kO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UuY2NzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQ2MgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UubW9kZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UueWVhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAwO1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRDQ3ModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVDY3MpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQ2NzKGNjczogc3RyaW5nW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNjcy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdENjXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5jY3MgPSBjY3M7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQ2MgPSBjY3NbMF07XHJcblxyXG4gICAgICAgIGlmIChjY3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2ModGhpcy5iaWtlLnNlbGVjdGVkQ2MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2MoY2M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZENjID0gY2M7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5tb2RlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS55ZWFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IDA7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldE1vZGVscyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLnVwZGF0ZU1vZGVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVNb2RlbHMobW9kZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChtb2RlbHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBtb2RlbHMudW5zaGlmdCh0aGlzLnBvbHlnbG90LnQoXCJTZWxlY3RNb2RlbFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UubW9kZWxzID0gbW9kZWxzO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsID0gbW9kZWxzWzBdO1xyXG5cclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdE1vZGVsKG1vZGVsOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBtb2RlbDtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0WWVhcnModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVZZWFycyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVZZWFycyh5ZWFyczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoeWVhcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB5ZWFycy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdFllYXJcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0geWVhcnM7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IHllYXJzWzBdO1xyXG5cclxuICAgICAgICBpZiAoeWVhcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0WWVhcih0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIHNlbGVjdFllYXIoeWVhcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IHllYXI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0QmlrZXModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy5sYW5ndWFnZSwgdGhpcy51cGRhdGVCaWtlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCaWtlcyhiaWtlczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IChiaWtlcy5sZW5ndGggPiAwKSA/IGJpa2VzWzBdIDogMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlrZVN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2Jpa2VzdG9yZS50cyIsImV4cG9ydCB7IEtpdE1vZGVsIH0gZnJvbSBcIi4va2l0bW9kZWxcIjtcclxuZXhwb3J0IHsgRGVmYXVsdEtpdFN0YXRlLCBLaXRTdGF0ZSB9IGZyb20gXCIuL2tpdHN0YXRlXCI7XHJcbmV4cG9ydCB7IENoYWluTW9kZWwgfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmV4cG9ydCB7IFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi9zcHJvY2tldG1vZGVsXCI7XHJcbmV4cG9ydCB7IEJpa2VNb2RlbCB9IGZyb20gXCIuL2Jpa2Vtb2RlbFwiO1xyXG5leHBvcnQgeyBCYXR0ZXJ5TW9kZWwgfSBmcm9tIFwiLi9iYXR0ZXJ5bW9kZWxcIjtcclxuZXhwb3J0IHsgRmlsdGVyTW9kZWwgfSBmcm9tIFwiLi9maWx0ZXJtb2RlbFwiO1xyXG5leHBvcnQgeyBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4vYmlrZXJldmVyc2Vtb2RlbFwiO1xyXG5leHBvcnQgeyBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuL2NoYWluaW5mb21vZGVsXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvaW5kZXgudHMiLCJpbXBvcnQgeyBDaGFpbk1vZGVsLCBEZWZhdWx0Q2hhaW4gfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmltcG9ydCB7IERlZmF1bHRTcHJvY2tldCwgU3Byb2NrZXRNb2RlbCB9IGZyb20gXCIuL3Nwcm9ja2V0bW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0S2l0U3RhdGU6IEtpdFN0YXRlID0ge1xyXG4gICAgQ3VycmVudENoYWluczogW0RlZmF1bHRDaGFpbl0sXHJcbiAgICBDdXJyZW50Q2hhaW5MZW5ndGg6IDAsXHJcbiAgICBTZWxlY3RlZENoYWluOiBEZWZhdWx0Q2hhaW4sXHJcbiAgICBTZWxlY3RlZEZyb250U3Byb2NrZXQ6IERlZmF1bHRTcHJvY2tldCxcclxuICAgIFNlbGVjdGVkUmVhclNwcm9ja2V0OiBEZWZhdWx0U3Byb2NrZXQsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0U3RhdGUge1xyXG4gICAgcHVibGljIEN1cnJlbnRDaGFpbnM6IENoYWluTW9kZWxbXTtcclxuICAgIHB1YmxpYyBDdXJyZW50Q2hhaW5MZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTZWxlY3RlZENoYWluOiBDaGFpbk1vZGVsO1xyXG4gICAgcHVibGljIFNlbGVjdGVkRnJvbnRTcHJvY2tldDogU3Byb2NrZXRNb2RlbDtcclxuICAgIHB1YmxpYyBTZWxlY3RlZFJlYXJTcHJvY2tldDogU3Byb2NrZXRNb2RlbDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwiZXhwb3J0IGNvbnN0IERlZmF1bHRDaGFpbjogQ2hhaW5Nb2RlbCA9IHtcclxuICAgIENoYWluVHlwZTogXCJcIixcclxuICAgIENoYWluQ29sb3I6IFwiXCIsXHJcbiAgICBDaGFpbkJhc2VOYW1lOiBcIlwiLFxyXG4gICAgQ2hhaW5PcmRlcjogMCxcclxuICAgIElzU3RhbmRhcmQ6IDAsXHJcbiAgICBMZW5ndGg6IDAsXHJcbiAgICBGdWxsTmFtZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFpbk1vZGVsIHtcclxuICAgIHB1YmxpYyBDaGFpblR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFpbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2hhaW5CYXNlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYWluT3JkZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBJc1N0YW5kYXJkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnVsbE5hbWU6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2NoYWlubW9kZWwudHMiLCJleHBvcnQgY29uc3QgRGVmYXVsdFNwcm9ja2V0OiBTcHJvY2tldE1vZGVsID0ge1xyXG4gICAgU3Byb2NrZXROYW1lOiBcIlwiLFxyXG4gICAgUGFydElkOiAwLFxyXG4gICAgU2lkZTogXCJcIixcclxuICAgIEJhc2U6IFwiXCIsXHJcbiAgICBUZWV0aDogMCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJvY2tldE1vZGVsIHtcclxuICAgIHB1YmxpYyBTcHJvY2tldE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTaWRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlZXRoOiBudW1iZXI7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9zcHJvY2tldG1vZGVsLnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBjb21wdXRlZCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgQ2hhaW5Nb2RlbCwgS2l0TW9kZWwsIEtpdFN0YXRlLCBTcHJvY2tldE1vZGVsLCBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEluZm9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2luZm9zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0U3RvcmUgZXh0ZW5kcyBQYXJ0U3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgLy8gVGhlIGtpdHMgbWFuYWdlZCBieSB0aGlzIHN0b3JlXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGtpdHM6IEtpdE1vZGVsW107XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGEgXCJwaWN0dXJlXCIgb2YgYSBzcHJvY2tldFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBTcHJvY2tldEltYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBTcHJvY2tldEltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIEhpZGVTcHJvY2tldEltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBTaG93U3Byb2NrZXRJbWFnZShzcHJvY2tldDogU3Byb2NrZXRNb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VUaXRsZSA9IHNwcm9ja2V0LlNwcm9ja2V0TmFtZTtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYW4gaW1hZ2Ugb2YgdGhlIGNoYWluXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgSGlkZUNoYWluSW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIFNob3dDaGFpbkltYWdlKGNoYWluOiBDaGFpbk1vZGVsLCB1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVRpdGxlID0gY2hhaW4uRnVsbE5hbWU7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGNoYWluIHRlY2huaWNhbCBpbmZvcm1hdGlvbiAgXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW5mb01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIENoYWluSW5mbzogQ2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIEhpZGVDaGFpbkluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93Q2hhaW5JbmZvKGNoYWluOiBDaGFpbk1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgSW5mb1NlcnZpY2UuR2V0Q2hhaW5JbmZvKGNoYWluLkZ1bGxOYW1lLCB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlLCB0aGlzLmxvYWRDaGFpbkluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiaWtlIGZvciB3aGljaCBraXRzIGFyZSBzaG93blxyXG4gICAgcHJpdmF0ZSBiaWtlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5raXRzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSAwO1xyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSB0aGlzLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbmZvID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFpbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Byb2NrZXRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNwcm9ja2V0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsS2l0U3RhdGUgPSB0aGlzLnNldEluaXRpYWxLaXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhaW5MZW5ndGhzID0gdGhpcy51cGRhdGVDaGFpbkxlbmd0aHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUtpdHMgPSB0aGlzLnVwZGF0ZUtpdHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2hhaW4gPSB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2hhaW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxvYWRDaGFpbkluZm8gPSB0aGlzLmxvYWRDaGFpbkluZm8uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5IaWRlQ2hhaW5JbmZvID0gdGhpcy5IaWRlQ2hhaW5JbmZvLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0tpdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMua2l0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5raXRzLmxlbmd0aCAhPT0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2V0S2l0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBoYW5kbGVTcHJvY2tldENoYW5nZShraXQ6IEtpdE1vZGVsLCBzaWRlOiBzdHJpbmcsIHNwcm9ja2V0OiBTcHJvY2tldE1vZGVsKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGtpdFN0YXRlID0ga2l0LkN1cnJlbnRTdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0ga2l0U3RhdGUuU2VsZWN0ZWRGcm9udFNwcm9ja2V0O1xyXG4gICAgICAgIGxldCByZWFyID0ga2l0U3RhdGUuU2VsZWN0ZWRSZWFyU3Byb2NrZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250RGVmYXVsdCA9IGtpdC5Gcm9udERlZmF1bHRUZWV0aDtcclxuICAgICAgICBjb25zdCByZWFyRGVmYXVsdCA9IGtpdC5SZWFyRGVmYXVsdFRlZXRoO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDaGFpbkxlbmd0aCA9IGtpdC5DaGFpbkxlbmd0aDtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q2hhaW5MZW5ndGggPSBraXRTdGF0ZS5DdXJyZW50Q2hhaW5MZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChzaWRlID09PSBcImZyb250XCIpIHtcclxuICAgICAgICAgICAgZnJvbnQgPSBzcHJvY2tldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWFyID0gc3Byb2NrZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGxpbmtzIHRvIGFkZC9zdWJ0cmFjdCBmcm9tIHRoZSBkZWZhdWx0IGNoYWluIGxlbmd0aFxyXG4gICAgICAgICAgIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdGVldGggb2YgdGhlIHNlbGVjdGVkIGZyb250IGFuZCByZWFyIHNwcm9ja2V0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgZXh0cmFMaW5rcyA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlZXRoRGlmZmVyZW5jZSA9IHJlYXIuVGVldGggLSBmcm9udERlZmF1bHQgKyBmcm9udC5UZWV0aCAtIHJlYXJEZWZhdWx0O1xyXG5cclxuICAgICAgICBpZiAodGVldGhEaWZmZXJlbmNlID4gMCkge1xyXG4gICAgICAgICAgICBleHRyYUxpbmtzID0gKE1hdGguZmxvb3IoKHRlZXRoRGlmZmVyZW5jZSAtIDEpIC8gMykgKyAxKSAqIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZWV0aERpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIGV4dHJhTGlua3MgPSBNYXRoLmNlaWwoKHRlZXRoRGlmZmVyZW5jZSArIDEpIC8gMykgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0NoYWlucyA9IGtpdFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkQ2hhaW4gPSBraXRTdGF0ZS5TZWxlY3RlZENoYWluO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYWluTGVuZ3RoID0gZGVmYXVsdENoYWluTGVuZ3RoICsgZXh0cmFMaW5rcztcclxuXHJcbiAgICAgICAgLyogVXBkYXRlIHRoZSBsZW5ndGggb2YgYWxsIGNoYWlucyBpZiByZXF1aXJlZCAqL1xyXG4gICAgICAgIGlmIChuZXdDaGFpbkxlbmd0aCAhPT0gY3VycmVudENoYWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWlucyA9IHRoaXMudXBkYXRlQ2hhaW5MZW5ndGhzKG5ld0NoYWlucywgbmV3Q2hhaW5MZW5ndGgpO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZENoYWluID0gdGhpcy51cGRhdGVTZWxlY3RlZENoYWluKG5ld0NoYWlucywgbmV3U2VsZWN0ZWRDaGFpbiwgbmV3Q2hhaW5MZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVXBkYXRlIHRoZSBraXQgKi9cclxuICAgICAgICBraXRTdGF0ZS5DdXJyZW50Q2hhaW5zID0gbmV3Q2hhaW5zO1xyXG4gICAgICAgIGtpdFN0YXRlLkN1cnJlbnRDaGFpbkxlbmd0aCA9IG5ld0NoYWluTGVuZ3RoO1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkQ2hhaW4gPSBuZXdTZWxlY3RlZENoYWluO1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkRnJvbnRTcHJvY2tldCA9IGZyb250O1xyXG4gICAgICAgIGtpdFN0YXRlLlNlbGVjdGVkUmVhclNwcm9ja2V0ID0gcmVhcjtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgaGFuZGxlQ2hhaW5DaGFuZ2Uoa2l0OiBLaXRNb2RlbCwgY2hhaW46IENoYWluTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBraXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW4gPSBjaGFpbjtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIGdldEtpdHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmlrZUlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIFBhcnRTZXJ2aWNlLkdldEtpdHModGhpcy5hcHBTdG9yZS5wYXJ0cywgdGhpcy5iaWtlSWQsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMudXBkYXRlS2l0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVLaXRzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVLaXRzKG5ld0tpdHM6IEtpdE1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEluaXRpYWxLaXRTdGF0ZShuZXdLaXRzKTtcclxuICAgICAgICB0aGlzLmtpdHMgPSBuZXdLaXRzO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgc2V0SW5pdGlhbEtpdFN0YXRlKGtpdHM6IEtpdE1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICBraXRzLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGU6IEtpdFN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgQ3VycmVudENoYWluTGVuZ3RoOiBrLkNoYWluTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgQ3VycmVudENoYWluczogay5DaGFpbnMsXHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZENoYWluOiBrLkNoYWlucy5maW5kKChjOiBDaGFpbk1vZGVsKSA9PiBjLkZ1bGxOYW1lID09PSBrLkNoYWluKSB8fCBrLkNoYWluc1swXSxcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkRnJvbnRTcHJvY2tldDogay5Gcm9udFNwcm9ja2V0cy5maW5kKChzOiBTcHJvY2tldE1vZGVsKSA9PiBzLlNwcm9ja2V0TmFtZSA9PT0gay5Gcm9udFNwcm9ja2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGsuRnJvbnRTcHJvY2tldHNbMF0sXHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFJlYXJTcHJvY2tldDogay5SZWFyU3Byb2NrZXRzLmZpbmQoKHM6IFNwcm9ja2V0TW9kZWwpID0+IHMuU3Byb2NrZXROYW1lID09PSBrLlJlYXJTcHJvY2tldClcclxuICAgICAgICAgICAgICAgICAgICB8fCBrLlJlYXJTcHJvY2tldHNbMF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGsuQ3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGxlbmd0aCBvZiBhbGwgY2hhaW5zIGFuZCByZXR1cm4gdGhlIG5ldyBsaXN0IG9mIGNoYWluc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0NoYWluTGVuZ3RoIC0gVGhlIG5ldyBsZW5ndGhcclxuICAgICAqL1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGFpbkxlbmd0aHMoY2hhaW5zOiBDaGFpbk1vZGVsW10sIG5ld0NoYWluTGVuZ3RoOiBudW1iZXIpOiBDaGFpbk1vZGVsW10ge1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYWlucyA9IGNoYWlucztcclxuXHJcbiAgICAgICAgbmV3Q2hhaW5zLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgYy5MZW5ndGggPSBuZXdDaGFpbkxlbmd0aCxcclxuICAgICAgICAgICAgYy5GdWxsTmFtZSA9IGMuQ2hhaW5CYXNlTmFtZSArIFwiIFwiICsgbmV3Q2hhaW5MZW5ndGgudG9GaXhlZCgwKSArIFwiTFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3Q2hhaW5zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBsZW5ndGggb2YgdGhlIHNlbGVjdGVkIGNoYWluIGFuZCByZXR1cm4gdGhlIG5ldyBjaGFpblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0NoYWluTGVuZ3RoIC0gVGhlIG5ldyBsZW5ndGhcclxuICAgICAqL1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENoYWluKGNoYWluczogQ2hhaW5Nb2RlbFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2hhaW46IENoYWluTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhaW5MZW5ndGg6IG51bWJlcik6IENoYWluTW9kZWwge1xyXG4gICAgICAgIHJldHVybiBjaGFpbnMuZmluZCgoYykgPT4gYy5DaGFpbkJhc2VOYW1lID09PSBzZWxlY3RlZENoYWluLkNoYWluQmFzZU5hbWUpIHx8IGNoYWluc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgbG9hZENoYWluSW5mbyhpbmZvOiBDaGFpbkluZm9Nb2RlbCkge1xyXG4gICAgICAgIGlmIChpbmZvICYmIGluZm8uUGl0Y2hNbSkge1xyXG4gICAgICAgICAgICB0aGlzLkNoYWluSW5mbyA9IGluZm87XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkNoYWluSW5mb01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMva2l0c3RvcmUudHMiLCJpbXBvcnQgeyBhY3Rpb24sIGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuaW1wb3J0IHsgQmF0dGVyeU1vZGVsLCBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQYXJ0U2VydmljZSwgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RvcmUgZXh0ZW5kcyBQYXJ0U3RvcmUge1xyXG5cclxuICAgIHB1YmxpYyBwb2x5Z2xvdDogUG9seWdsb3Q7XHJcblxyXG4gICAgLy8gVGhlIGxpc3Qgb2YgYmF0dGVyaWVzIG1hbmFnZWQgYnkgdGhpcyBzdG9yZVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBiYXR0ZXJpZXM6IEJhdHRlcnlNb2RlbFtdO1xyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBhIHBob3RvIG9mIGEgc3BlY2lmaWMgYmF0dGVyeVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIEhpZGVCYXR0ZXJ5SW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93QmF0dGVyeUltYWdlKGJhdHRlcnk6IEJhdHRlcnlNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVXJsID0gYmF0dGVyeS5QaG90bztcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVRpdGxlID0gYmF0dGVyeS5QYXJ0O1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgZXh0cmEgdGVjaG5pY2FsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBhIHNwZWNpZmljIGJhdHRlcnlcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQmF0dGVyeUluZm9Nb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW5mbzogQmF0dGVyeU1vZGVsO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlQmF0dGVyeUluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dCYXR0ZXJ5SW5mbyhiYXR0ZXJ5OiBCYXR0ZXJ5TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvID0gYmF0dGVyeTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJpa2VzIGluIHdoaWNoIGEgc3BlY2lmaWMgYmF0dGVyeSB3b3VsZCBhbHNvIGZpdFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5UmV2ZXJzZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFJldmVyc2VkQmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXTtcclxuXHJcbiAgICBwdWJsaWMgSGlkZVJldmVyc2VkQmlrZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd1JldmVyc2VkQmlrZXMoYmF0dGVyeTogQmF0dGVyeU1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZVRpdGxlID0gYmF0dGVyeS5QYXJ0O1xyXG4gICAgICAgIFJldmVyc2VTZXJ2aWNlLkdldEJpa2VzKGJhdHRlcnkuUGFydElkLCB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyk7ICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXZlcnNlQmlrZXMobmV3QmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IG5ld0Jpa2VzO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RvcmUgY29udGFpbnMgYmF0dGVyaWVzXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgaGFzQmF0dGVyaWVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmJhdHRlcmllcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXR0ZXJpZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBtb3RvcmJpa2UgaWQgZm9yIHdoaWNoIHRoaXMgc3RvcmUgbWFuYWdlcyBiYXR0ZXJpZXNcclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IEJpa2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpa2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEJpa2VJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdldEJhdHRlcmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlcXVlc3QgYSBuZXcgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgZ2V0QmF0dGVyaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJpa2VJZCAhPT0gMCkge1xyXG4gICAgICAgICAgICBQYXJ0U2VydmljZS5HZXRCYXR0ZXJpZXModGhpcy5hcHBTdG9yZS5wYXJ0cywgdGhpcy5iaWtlSWQsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMudXBkYXRlQmF0dGVyaWVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRlcmllcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgdGhlIHJldHJpZXZlZCBsaXN0IG9mIGJhdHRlcmllc1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXR0ZXJpZXMobmV3QmF0dGVyaWVzOiBCYXR0ZXJ5TW9kZWxbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiYXR0ZXJ5IG9mIG5ld0JhdHRlcmllcykge1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LkxheW91dERyYXdpbmcgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvbGF5b3V0L1wiICsgYmF0dGVyeS5MYXlvdXREcmF3aW5nO1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LlRlcm1pbmFsVG9wID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL3Rlcm1pbmFsL3RcIiArIGJhdHRlcnkuVGVybWluYWxUeXBlICsgXCJ0LnBuZ1wiO1xyXG4gICAgICAgICAgICBiYXR0ZXJ5LlRlcm1pbmFsRnJvbnQgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvdGVybWluYWwvdFwiICsgYmF0dGVyeS5UZXJtaW5hbFR5cGUgKyBcImYucG5nXCI7XHJcbiAgICAgICAgICAgIGJhdHRlcnkuVGVybWluYWxTaWRlID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvYmF0dGVyaWVzL3Rlcm1pbmFsL3RcIiArIGJhdHRlcnkuVGVybWluYWxUeXBlICsgXCJzLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYXR0ZXJpZXMgPSBuZXdCYXR0ZXJpZXM7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXR0ZXJpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IDA7XHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IHRoaXMuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VVcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVGl0bGUgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW5mbyA9IG5ldyBCYXR0ZXJ5TW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VUaXRsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQmF0dGVyaWVzID0gdGhpcy51cGRhdGVCYXR0ZXJpZXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyA9IHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvYmF0dGVyeXN0b3JlLnRzIiwiaW1wb3J0IHsgYWN0aW9uLCBjb21wdXRlZCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCAqIGFzIFBvbHlnbG90IGZyb20gXCJub2RlLXBvbHlnbG90XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlck1vZGVsLCBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQYXJ0U2VydmljZSwgUmV2ZXJzZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTdG9yZSBleHRlbmRzIFBhcnRTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGZpbHRlcnM6IEZpbHRlck1vZGVsW107XHJcblxyXG4gICAgLyogSW1hZ2UgbW9kYWwgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVySW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVySW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJJbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlRmlsdGVySW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0ZpbHRlckltYWdlKGZpbHRlcjogRmlsdGVyTW9kZWwsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gZmlsdGVyLlBhcnQ7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVVybCA9IHVybDtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBEcmF3aW5nIG1vZGFsICovXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckRyYXdpbmdNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJEcmF3aW5nVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIEhpZGVGaWx0ZXJEcmF3aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0ZpbHRlckRyYXdpbmcoZmlsdGVyOiBGaWx0ZXJNb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBmaWx0ZXIuUGFydDtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG4gICAgLyogUmV2ZXJzZSBhcHBsaWNhdGlvbnMgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVyUmV2ZXJzZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgUmV2ZXJzZWRCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlUmV2ZXJzZWRCaWtlcygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd1JldmVyc2VkQmlrZXMoZmlsdGVyOiBGaWx0ZXJNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZVRpdGxlID0gZmlsdGVyLlBhcnQ7XHJcbiAgICAgICAgUmV2ZXJzZVNlcnZpY2UuR2V0QmlrZXMoZmlsdGVyLlBhcnRJZCwgdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlUmV2ZXJzZUJpa2VzKG5ld0Jpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBuZXdCaWtlcztcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFN0b3JlOiBBcHBTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gMDtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJJbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJEcmF3aW5nVXJsID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlVGl0bGUgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMgPSB0aGlzLnVwZGF0ZUZpbHRlcnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyA9IHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0ZpbHRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmxlbmd0aCAhPT0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2V0RmlsdGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgZ2V0RmlsdGVycygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iaWtlSWQgIT09IDApIHtcclxuICAgICAgICAgICAgUGFydFNlcnZpY2UuR2V0RmlsdGVycyh0aGlzLmFwcFN0b3JlLnBhcnRzLCB0aGlzLmJpa2VJZCwgdGhpcy5hcHBTdG9yZS5sYW5ndWFnZSwgdGhpcy51cGRhdGVGaWx0ZXJzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZpbHRlcnMobmV3RmlsdGVyczogRmlsdGVyTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IG5ld0ZpbHRlcnM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvZmlsdGVyc3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCIuL3BhcnRzXCI7XHJcbmltcG9ydCB7IFBhcnRCcmFuZHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0LWFwcFwiKTtcclxuXHJcbiAgICBpZiAocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlOiBzdHJpbmcgPSByb290LmRhdGFzZXQubGFuZ3VhZ2UgfHwgXCJlblwiO1xyXG4gICAgICAgIGxldCBwYXJ0czogbnVtYmVyIHwgdW5kZWZpbmVkID0gTnVtYmVyKHJvb3QuZGF0YXNldC5wYXJ0cyk7XHJcblxyXG4gICAgICAgIGlmICghcGFydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gcm9vdC5kYXRhc2V0LnBhcnRzO1xyXG4gICAgICAgICAgICBpZiAoYnJhbmRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZEFycmF5ID0gYnJhbmRzLnJlcGxhY2UoXCIgXCIsXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFydHMgPSBicmFuZHNUb1BhcnRzKGJyYW5kQXJyYXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFydHMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxQYXJ0cyBsYW5ndWFnZT17bGFuZ3VhZ2V9IHBhcnRzPXtwYXJ0c30+PC9QYXJ0cz4sIHJvb3QsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYnJhbmRzVG9QYXJ0cyhicmFuZHM6IHN0cmluZ1tdKTogbnVtYmVyIHtcclxuXHJcbiAgICBsZXQgcGFydHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChjb25zdCBicmFuZCBvZiBicmFuZHMpIHtcclxuICAgICAgICBwYXJ0cyArPSBQYXJ0QnJhbmRzW2JyYW5kXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJ0cztcclxufVxyXG5cclxucmVuZGVyQXBwKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hZmFtYXBwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcFN0b3JlLCBCYXR0ZXJ5U3RvcmUsIEZpbHRlclN0b3JlLCBLaXRTdG9yZSB9IGZyb20gXCIuL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCaWtlU2VsZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9iaWtlc1wiO1xyXG5pbXBvcnQgeyBLaXRMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9raXRzXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhdHRlcmllc1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIElQYXJ0c1Byb3BzIHtcclxuICAgIHBhcnRzOiBudW1iZXI7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIFBhcnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQYXJ0c1Byb3BzLCB7fT4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmU6IEFwcFN0b3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUGFydHNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0b3JlID0gbmV3IEFwcFN0b3JlKHRoaXMucHJvcHMucGFydHMsIHRoaXMucHJvcHMubGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRQYXJ0cygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0IHN0b3JlPXt0aGlzLnN0b3JlLmJpa2VTdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYXJ0cygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+SW52YWxpZCBwYXJ0IGNhdGVnb3JpZXM8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRQYXJ0cygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzdXBwb3J0ZWQgPVxyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLkFGQU0gK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLkRDICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5UaHJlZWQgK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLk5pdHJvICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5TaGlkbyArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuSXNvbjtcclxuXHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5wcm9wcy5wYXJ0cyAmIHN1cHBvcnRlZCkgIT09IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFydHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmUucGFydFN0b3JlIGluc3RhbmNlb2YgS2l0U3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8S2l0TGlzdCBzdG9yZT17dGhpcy5zdG9yZS5wYXJ0U3RvcmV9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZS5wYXJ0U3RvcmUgaW5zdGFuY2VvZiBCYXR0ZXJ5U3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8QmF0dGVyeUNvbnRhaW5lciBzdG9yZT17dGhpcy5zdG9yZS5wYXJ0U3RvcmV9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZS5wYXJ0U3RvcmUgaW5zdGFuY2VvZiBGaWx0ZXJTdG9yZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxGaWx0ZXJDb250YWluZXIgc3RvcmU9e3RoaXMuc3RvcmUucGFydFN0b3JlfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYXJ0cy50c3giLCJleHBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmV4cG9ydCB7IEJpa2VTdG9yZSB9IGZyb20gXCIuL2Jpa2VzdG9yZVwiO1xyXG5leHBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuL2tpdHN0b3JlXCI7XHJcbmV4cG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5leHBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi9iYXR0ZXJ5c3RvcmVcIjtcclxuZXhwb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi9maWx0ZXJzdG9yZVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCaWtlU3RvcmUgfSBmcm9tIFwiLi9iaWtlc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4va2l0c3RvcmVcIjtcclxuaW1wb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4vYmF0dGVyeXN0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlclN0b3JlIH0gZnJvbSBcIi4vZmlsdGVyc3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuICAgIHB1YmxpYyBiaWtlU3RvcmU6IEJpa2VTdG9yZTtcclxuICAgIHB1YmxpYyBwYXJ0U3RvcmU6IFBhcnRTdG9yZTtcclxuXHJcbiAgICBwcml2YXRlIGJpa2VJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJ0czogbnVtYmVyID0gMSwgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIpIHtcclxuXHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHBvbHlnbG90XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uVGFibGUgPSBUcmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9uVGFibGUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25UYWJsZSA9IFRyYW5zbGF0aW9ucy5lbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSBuZXcgUG9seWdsb3Qoe1xyXG4gICAgICAgICAgICBsb2NhbGU6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICBwaHJhc2VzOiB0cmFuc2xhdGlvblRhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJpa2Ugc3RvcmVcclxuICAgICAgICB0aGlzLmJpa2VTdG9yZSA9IG5ldyBCaWtlU3RvcmUodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGFydHMgc3RvcmVcclxuICAgICAgICBpZiAoKChwYXJ0cyAmIFBhcnRCcmFuZHMuQUZBTSkgIT09IDApIHx8XHJcbiAgICAgICAgICAgICgocGFydHMgJiBQYXJ0QnJhbmRzLkRDKSAhPT0gMCkgfHxcclxuICAgICAgICAgICAgKChwYXJ0cyAmIFBhcnRCcmFuZHMuVGhyZWVkKSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgS2l0U3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCgocGFydHMgJiBQYXJ0QnJhbmRzLlNoaWRvKSAhPT0gMCkgfHwgKChwYXJ0cyAmIFBhcnRCcmFuZHMuTml0cm8pICE9PSAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBCYXR0ZXJ5U3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChwYXJ0cyAmIFBhcnRCcmFuZHMuSXNvbikgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0U3RvcmUgPSBuZXcgRmlsdGVyU3RvcmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBQYXJ0U3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBCaWtlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaWtlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBCaWtlSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcnRTdG9yZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZS5CaWtlSWQgPSB0aGlzLmJpa2VJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2FwcHN0b3JlLnRzIiwiZXhwb3J0IHsgVHJhbnNsYXRpb25zIH0gZnJvbSBcIi4vdHJhbnNsYXRpb25zXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cmFuc2xhdGlvbnMvaW5kZXgudHMiLCJleHBvcnQgY29uc3QgVHJhbnNsYXRpb25zID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIlNlbGVjdCBhIG1vdG9yYmlrZVwiLFxyXG4gICAgICAgIEJyYW5kOiBcIkJyYW5kXCIsXHJcbiAgICAgICAgQ2M6IFwiQ2NcIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbFwiLFxyXG4gICAgICAgIFllYXI6IFwiWWVhclwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxQbGVhc2Ugc2VsZWN0IGEgYnJhbmQ+XCIsXHJcbiAgICAgICAgU2VsZWN0Q2M6IFwiPFBsZWFzZSBzZWxlY3QgYSBjYz5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8UGxlYXNlIHNlbGVjdCBhIG1vZGVsPlwiLFxyXG4gICAgICAgIFNlbGVjdFllYXI6IFwiPFBsZWFzZSBzZWxlY3QgYSB5ZWFyPlwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVLaXRzOiBcIkFwcGxpY2FibGUga2l0c1wiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiUGFydCBudW1iZXJcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIkZyb250IHNwcm9ja2V0XCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIlJlYXIgc3Byb2NrZXRcIixcclxuICAgICAgICBUZWV0aDogXCJUZWV0aFwiLFxyXG4gICAgICAgIFBhcnQ6IFwiUGFydFwiLFxyXG4gICAgICAgIENoYWluczogXCJDaGFpbnNcIixcclxuICAgICAgICBUeXBlOiBcIlR5cGVcIixcclxuICAgICAgICBDb2xvcjogXCJDb2xvclwiLFxyXG4gICAgICAgIExlbmd0aDogXCJMZW5ndGhcIixcclxuICAgICAgICBJdGVtOiBcIkl0ZW1cIixcclxuICAgICAgICBFQU46IFwiRUFOIGNvZGVcIixcclxuICAgICAgICBWb2x0YWdlOiBcIlZvbHRhZ2VcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJDYXBhY2l0eVwiLFxyXG4gICAgICAgIENDQTogXCJDb2xkIGNyYW5rIGN1cnJlbnRcIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiQWNpZFwiLFxyXG4gICAgICAgIEltYWdlOiBcIkltYWdlXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUJhdHRlcmllczogXCJBcHBsaWNhYmxlIGJhdHRlcmllc1wiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiRHJhd2luZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkFwcGxpY2FibGUgZmlsdGVyc1wiLFxyXG4gICAgICAgIFdpZHRoOiBcIkRlcHRoXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhlaWdodFwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJEcnkgd2VpZ2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkZpbGxlZCB3ZWlnaHRcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIkFjaWQgdm9sdW1lXCIsXHJcbiAgICAgICAgTGF5b3V0RHJhd2luZzogXCJMYXlvdXRcIixcclxuICAgICAgICBDaGFyZ2VQcmVmZXJyZWQ6IFwiUHJlZmVycmVkIGNoYXJnaW5nIGN1cnJlbnRcIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW11bSBjaGFyZ2luZyBjdXJyZW50XCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiVGVybWluYWwgdG9wIHZpZXdcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIlRlcm1pbmFsIGZyb250IHZpZXdcIixcclxuICAgICAgICBUZXJtaW5hbFNpZGU6IFwiVGVybWluYWwgc2lkZSB2aWV3XCIsXHJcbiAgICAgICAgTGl0ZXI6IFwibGl0ZXJcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ3lcIixcclxuICAgICAgICBGcm9tOiBcIkZyb21cIixcclxuICAgICAgICBUbzogXCJUb1wiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlByZXZpb3VzXCIsXHJcbiAgICAgICAgTmV4dDogXCJOZXh0XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIkFwcGxpY2F0aW9uIGxpc3RcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiQXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIkNoYWluIHR5cGVcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlBpdGNoXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJXaWR0aFwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgT3V0ZXJDb2xvcjogXCJDb2xvclwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIkZyb20gQ0NcIixcclxuICAgICAgICBUb0NDOiBcIlRvIENDXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiQnVzaGluZyB0eXBlXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJQaW4gdHlwZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIlJvbGxlciBkaWFtZXRlclwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIlBpbiBkaWFtZXRlclwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiSW50ZXJuYWwgcGxhdGUgdGhpY2tuZXNzXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJFeHRlcm5hbCBwbGF0ZSB0aGlja25lc3NcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBcIkludGVybmFsIHBsYXRlIGhlaWdodFwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IFwiRXh0ZXJuYWwgcGxhdGUgaGVpZ2h0XCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJUZW5zaWxlIHN0cmVuZ3RoXCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIldlaWdodFwiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJTdGFuZGFyZCBjbGlwXCIsXHJcbiAgICAgICAgU3RhbmRhcmRSaXZldDogXCJTdGFuZGFyZCByaXZldFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIlNlYWwgdHlwZVwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcGVyIDEwMCBsaW5rc1wiLFxyXG4gICAgICAgIENsb3NlOiBcIkNsb3NlXCIsXHJcbiAgICB9LFxyXG4gICAgbmw6IHtcclxuICAgICAgICBCaWtlU2VsZWN0OiBcIktpZXMgZWVuIG1vdG9yZmlldHNcIixcclxuICAgICAgICBCcmFuZDogXCJNZXJrXCIsXHJcbiAgICAgICAgQ2M6IFwiQ2NcIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbFwiLFxyXG4gICAgICAgIFllYXI6IFwiSmFhclwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxLaWVzIGVlbiBtZXJrPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxLaWVzIGVlbiBjeWxpbmRlcmluaG91ZD5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8S2llcyBlZW4gbW9kZWw+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8S2llcyBlZW4gYm91d2phYXI+XCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUtpdHM6IFwiR2VzY2hpa3RlIGtpdHNcIixcclxuICAgICAgICBQYXJ0TnVtYmVyOiBcIkFydGlrZWxcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIktldHRpbmd3aWVsIHZvb3JcIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiS2V0dGluZ3dpZWwgYWNodGVyXCIsXHJcbiAgICAgICAgVGVldGg6IFwiVmVydGFuZGluZ1wiLFxyXG4gICAgICAgIFBhcnQ6IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIENoYWluczogXCJLZXR0aW5nXCIsXHJcbiAgICAgICAgVHlwZTogXCJUeXBlXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiS2xldXJcIixcclxuICAgICAgICBMZW5ndGg6IFwiTGVuZ3RlXCIsXHJcbiAgICAgICAgSXRlbTogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRUFOOiBcIkVBTiBjb2RlXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJWb2x0YWdlXCIsXHJcbiAgICAgICAgQ2FwYWNpdHk6IFwiQ2FwYWNpdGVpdFwiLFxyXG4gICAgICAgIENDQTogXCJLb3Vkc3RhcnRzdHJvb21cIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiWnV1clwiLFxyXG4gICAgICAgIEltYWdlOiBcIkFmYmVlbGRpbmdcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkdlc2NoaWt0ZSBiYXR0ZXJpamVuXCIsXHJcbiAgICAgICAgRHJhd2luZzogXCJUZWtlbmluZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVGaWx0ZXJzOiBcIkdlc2NoaWt0ZSBmaWx0ZXJzXCIsXHJcbiAgICAgICAgV2lkdGg6IFwiRGllcHRlXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhvb2d0ZVwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJEcm9vZyBnZXdpY2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkdldnVsZCBnZXdpY2h0XCIsXHJcbiAgICAgICAgQWNpZFZvbHVtZTogXCJadXVyIHZvbHVtZVwiLFxyXG4gICAgICAgIExheW91dERyYXdpbmc6IFwiTGF5b3V0XCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIk9wdGltYWxlIGxhYWRzdHJvb21cIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW11bSBsYWFkc3Ryb29tXCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiVGVybWluYWwgYm92ZW5hYW56aWNodFwiLFxyXG4gICAgICAgIFRlcm1pbmFsRnJvbnQ6IFwiVGVybWluYWwgdm9vcmFhbnppY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIlRlcm1pbmFsIHppamFhbnppY2h0XCIsXHJcbiAgICAgICAgTGl0ZXI6IFwibGl0ZXJcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ2llXCIsXHJcbiAgICAgICAgRnJvbTogXCJWYW5cIixcclxuICAgICAgICBUbzogXCJUb3RcIixcclxuICAgICAgICBQcmV2aW91czogXCJWb3JpZ2VcIixcclxuICAgICAgICBOZXh0OiBcIlZvbGdlbmRlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIlRvZXBhc3NpbmdzbGlqc3RcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiVG9lcGFzc2luZ2VuXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIktldHRpbmd0eXBlXCIsXHJcbiAgICAgICAgUGl0Y2hNbTogXCJTdGFwXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJCcmVlZHRlXCIsICAgICAgICBcclxuICAgICAgICBEZXNjcmlwdGlvbjogXCJPbXNjaHJpanZpbmdcIixcclxuICAgICAgICBPdXRlckNvbG9yOiBcIktsZXVyXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb246IFwiVG9lcGFzc2luZ1wiLFxyXG4gICAgICAgIEZyb21DQzogXCJWYW4gQ0NcIixcclxuICAgICAgICBUb0NDOiBcIlRvdCBDQ1wiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIkJ1cyB0eXBlXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJQaW4gdHlwZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIlJvbCBkaWFtZXRlclwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIlBpbiBkaWFtZXRlclwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlrdGUgaW50ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlrdGUgZXh0ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSG9vZ3RlIGludGVybmUgcGxhYXRcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkhvb2d0ZSBleHRlcm5lIHBsYWF0XCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJUcmVrc3Rlcmt0ZVwiLFxyXG4gICAgICAgIFdlaWdodDogXCJHZXdpY2h0XCIsXHJcbiAgICAgICAgU3RhbmRhcmRDbGlwOiBcIlN0YW5kYWFyZCBzbHVpdHNjaGFrZWxcIixcclxuICAgICAgICBTdGFuZGFyZFJpdmV0OiBcIlN0YW5kYWFyZCByaXZlZXIgc2x1aXRzY2hha2VsXCIsXHJcbiAgICAgICAgU2VhbFR5cGU6IFwiRGljaHRpbmcgdHlwZVwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcGVyIDEwMCBzY2hha2Vsc1wiLFxyXG4gICAgICAgIENsb3NlOiBcIlNsdWl0ZW5cIixcclxuICAgIH0sXHJcbiAgICBkZToge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiTW90b3JyYWR3YWhsXCIsXHJcbiAgICAgICAgQnJhbmQ6IFwiTWFya2VcIixcclxuICAgICAgICBDYzogXCJIdWJyYW1cIixcclxuICAgICAgICBNb2RlbDogXCJNb2RlbGxcIixcclxuICAgICAgICBZZWFyOiBcIkphaHJcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGllIE1hcmtlPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkZXIgSHVicmF1bT5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8Qml0dGUgd8OkaGxlbiBTaWUgZGFzIE1vZGVsbD5cIixcclxuICAgICAgICBTZWxlY3RZZWFyOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkYXMgQmF1amFocj5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJHZWVpZ25ldGUgS2l0c1wiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIEZyb250U3Byb2NrZXQ6IFwiUml0emVsXCIsXHJcbiAgICAgICAgUmVhclNwcm9ja2V0OiBcIktldHRlbnJhZFwiLFxyXG4gICAgICAgIFRlZXRoOiBcIlrDpGhuZVwiLFxyXG4gICAgICAgIFBhcnQ6IFwiVGVpbFwiLFxyXG4gICAgICAgIENoYWluczogXCJLZXR0ZVwiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiRmFyYmVcIixcclxuICAgICAgICBMZW5ndGg6IFwiTMOkbmdlXCIsXHJcbiAgICAgICAgSXRlbTogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRUFOOiBcIkVBTiBDb2RlXCIsXHJcbiAgICAgICAgVm9sdGFnZTogXCJTcGFubnVuZ1wiLFxyXG4gICAgICAgIENhcGFjaXR5OiBcIkthcGF6aXTDpHRcIixcclxuICAgICAgICBDQ0E6IFwiS2FsdHN0YXJ0c3Ryb21cIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiU8OkdXJlXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiQmlsZFwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVCYXR0ZXJpZXM6IFwiR2VlaWduZXRlIEJhdHRlcmllblwiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiWmVpY2hudW5nXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiR2VlaWduZXRlIEZpbHRlclwiLFxyXG4gICAgICAgIFdpZHRoOiBcIlRpZWZlXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkjDtmhlXCIsXHJcbiAgICAgICAgRHJ5V2VpZ2h0OiBcIlRyb2NrZW5nZXdpY2h0XCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIkdld2ljaHQgZ2Vmw7xsbHRcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIlPDpHVyZXZvbHVtZW5cIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkxheW91dFwiLFxyXG4gICAgICAgIENoYXJnZVByZWZlcnJlZDogXCJCZXZvcnp1Z3RlciBMYWRlc3Ryb21cIixcclxuICAgICAgICBDaGFyZ2VNYXg6IFwiTWF4aW1hbGVyIExhZGVzdHJvbVwiLFxyXG4gICAgICAgIFRlcm1pbmFsVG9wOiBcIkJhdHRlcmllcG9sIEF1ZnNpY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxGcm9udDogXCJCYXR0ZXJpZXBvbCBWb3JkZXJhbnNpY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIkJhdHRlcmllcG9sIFNlaXRlbmFuc2ljaHRcIixcclxuICAgICAgICBMaXRlcjogXCJMaXRlclwiLFxyXG4gICAgICAgIFRlY2hub2xvZ3k6IFwiVGVjaG5vbG9naWVcIixcclxuICAgICAgICBGcm9tOiBcIlZvblwiLFxyXG4gICAgICAgIFRvOiBcIkJpc1wiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlZvcmhlcmlnZVwiLFxyXG4gICAgICAgIE5leHQ6IFwiTsOkY2hzdGVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbkxpc3Q6IFwiQW53ZW5kdW5nc2xpc3RlXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25zOiBcIkFud2VuZHVuZ2VuXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIktldHRlbiBUeXBcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlRlaWx1bmdcIixcclxuICAgICAgICBQaXRjaFdpZHRoOiBcIkJyZWl0ZVwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIlVtc2NocmVpYnVuZ1wiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiRmFyYmVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbjogXCJBbndlbmR1bmdcIixcclxuICAgICAgICBGcm9tQ0M6IFwiVm9uIEh1YnJhdW1cIixcclxuICAgICAgICBUb0NDOiBcIkJpcyBIdWJyYXVtXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiQnVjaHNlIFR5cFwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiQm9semVuIFR5cFwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIldhbHplbmR1cmNobWVzc2VyXCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiQm9semVuZHVyY2htZXNzZXJcIixcclxuICAgICAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkRpY2tlIGludGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJEaWNrZSBleHRlcm5lIFBsYXR0ZVwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSMO2aGUgaW50ZXJuZSBQbGF0dGVcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBcIkjDtmhlIGV4dGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJadWdmZXN0aWdrZWl0XCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIkdld2ljaHRcIixcclxuICAgICAgICBTdGFuZGFyZENsaXA6IFwiU3RhbmRhcmQgQmluZGVnbGlldFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiU3RhbmRhYXJkIE5pZXRcIixcclxuICAgICAgICBTZWFsVHlwZTogXCJEaWNodHVuZyBUeXBcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBybyAxMDAgR2xpZWRlclwiLFxyXG4gICAgICAgIENsb3NlOiBcIlNjaGxpZcOfZW5cIixcclxuICAgIH0sXHJcbiAgICBmcjoge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiQ2hvaXNpc3NleiB1bmUgbW90b1wiLFxyXG4gICAgICAgIEJyYW5kOiBcIk1hcnF1ZVwiLFxyXG4gICAgICAgIENjOiBcIkN5bGluZHLDqWVcIixcclxuICAgICAgICBNb2RlbDogXCJNb2TDqGxlXCIsXHJcbiAgICAgICAgWWVhcjogXCJBbm7DqWVcIixcclxuICAgICAgICBTZWxlY3RCcmFuZDogXCI8Uy52LnAuIGNob2lzaXIgdW5lIG1hcnF1ZT5cIixcclxuICAgICAgICBTZWxlY3RDYzogXCI8Uy52LnAuIGNob2lzaXIgdW5lIGN5bGluZHLDqWU+XCIsXHJcbiAgICAgICAgU2VsZWN0TW9kZWw6IFwiPFMudi5wLiBjaG9pc2lyIHVuIG1vZMOobGU+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8Uy52LnAuIGNob2lzaXIgdW5lIGFubsOpZT5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJLaXRzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgUGFydE51bWJlcjogXCJBcnRpY2xlXCIsXHJcbiAgICAgICAgRnJvbnRTcHJvY2tldDogXCJQaWdub25cIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiQ291cm9ubmVcIixcclxuICAgICAgICBUZWV0aDogXCJEZW50dXJlXCIsXHJcbiAgICAgICAgUGFydDogXCJQacOoY2VcIixcclxuICAgICAgICBDaGFpbnM6IFwiQ2hhw65uZVwiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwZVwiLFxyXG4gICAgICAgIENvbG9yOiBcIkNvdWxldXJcIixcclxuICAgICAgICBMZW5ndGg6IFwiTG9uZ3VldXJcIixcclxuICAgICAgICBJdGVtOiBcIkFydGljbGVcIixcclxuICAgICAgICBFQU46IFwiQ29kZSBFQU5cIixcclxuICAgICAgICBWb2x0YWdlOiBcIlZvbHRhZ2VcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJDYXBhY2l0w6lcIixcclxuICAgICAgICBDQ0E6IFwiQ291cmFudCBkZSBkw6ltYXJyYWdlIMOgIGZyb2lkXCIsXHJcbiAgICAgICAgQUdNOiBcIkFHTVwiLFxyXG4gICAgICAgIEdlbDogXCJHZWxcIixcclxuICAgICAgICBBY2lkOiBcIkFjaWRlXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiSW1hZ2VcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkJhdHRlcmllcyBwb3NzaWJsZXNcIixcclxuICAgICAgICBEcmF3aW5nOiBcIlZpZ25ldHRlXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiRmlsdHJlcyBwb3NzaWJsZXNcIixcclxuICAgICAgICBXaWR0aDogXCJQcm9mb25kZXVyXCIsXHJcbiAgICAgICAgSGVpZ2h0OiBcIkhhdXRldXJcIixcclxuICAgICAgICBEcnlXZWlnaHQ6IFwiUG9pZHMgw6Egc2VjXCIsXHJcbiAgICAgICAgRmlsbGVkV2VpZ2h0OiBcIlBvaWRzIHJlbXBsaVwiLFxyXG4gICAgICAgIEFjaWRWb2x1bWU6IFwiVm9sdW1lIGQnYWNpZGVcIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkRpc3Bvc2l0aW9uXCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIkNvdXJhbnQgZGUgY2hhcmdlIG5vcm1hbFwiLFxyXG4gICAgICAgIENoYXJnZU1heDogXCJDb3VyYW50IGRlIGNoYXJnZSBtYXhpbXVtXCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiQm9ybmUsIHZ1ZSBkZSBkZXNzdXNcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIkJvcm5lLCB2dWUgZGUgZmFjZVwiLFxyXG4gICAgICAgIFRlcm1pbmFsU2lkZTogXCJCb3JuZSwgdnVlIGRlIGPDtHTDqVwiLFxyXG4gICAgICAgIExpdGVyOiBcImxpdHJlXCIsXHJcbiAgICAgICAgVGVjaG5vbG9neTogXCJUZWNobm9sb2dpZVwiLFxyXG4gICAgICAgIEZyb206IFwiRGVcIixcclxuICAgICAgICBUbzogXCLDgFwiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlByw6ljw6lkZW50XCIsXHJcbiAgICAgICAgTmV4dDogXCJTdWl2YW50XCIsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaXN0OiBcIkxpc3RlIGRlcyBhcHBsaWNhdGlvbnNcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiQXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgQ2hhaW5UeXBlOiBcIlR5cGUgZGUgY2hhw65uZVwiLFxyXG4gICAgICAgIFBpdGNoTW06IFwiUGFzXCIsXHJcbiAgICAgICAgUGl0Y2hXaWR0aDogXCJMYXJnZXVyXCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiRMOpbm9taW5hdGlvblwiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIkRlIGN5bGluZHLDqWVcIixcclxuICAgICAgICBUb0NDOiBcIkEgY3lsaW5kcsOpZVwiLFxyXG4gICAgICAgIEJ1c2hUeXBlOiBcIlR5cGUgZGUgbGEgYmFndWVcIixcclxuICAgICAgICBQaW5UeXBlOiBcIlR5cGUgZGUgbGEgZ291cGlsbGVcIixcclxuICAgICAgICBSb2xsZXJEaWFtZXRlcjogXCJEaWFtw6h0cmUgcm91bGVhdVwiLFxyXG4gICAgICAgIFBpbkRpYW1ldGVyOiBcIkRpYW3DqHRyZSBkZSBsYSBnb3VwaWxsZVwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiw4lwYWlzc2V1ciBkZSBsYSBwbGFxdWUgaW50ZXJuZVwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVUaGlja25lc3M6IFwiw4lwYWlzc2V1ciBkZSBsYSBwbGFxdWUgZXh0ZXJuZVwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSGF1dGV1ciBkZSBsYSBwbGFxdWUgaW50ZXJuZVwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IFwiSGF1dGV1ciBkZSBsYSBwbGFxdWUgZXh0ZXJuZVwiLFxyXG4gICAgICAgIEwxOiBcIkwxXCIsXHJcbiAgICAgICAgTDI6IFwiTDJcIixcclxuICAgICAgICBUZW5zaWxlU3RyZW5ndGg6IFwiUsOpc2lzdGFuY2Ugw6AgbGEgdHJhY3Rpb25cIixcclxuICAgICAgICBXZWlnaHQ6IFwiUG9pZHNcIixcclxuICAgICAgICBTdGFuZGFyZENsaXA6IFwiQXR0YWNoZSByYXBpZGUgc3RhbmRhcmRcIixcclxuICAgICAgICBTdGFuZGFyZFJpdmV0OiBcIk1haWxsb24gc3RhbmRhcmRcIixcclxuICAgICAgICBTZWFsVHlwZTogXCJUeXBlIGRlIGpvaW50XCIsXHJcbiAgICAgICAgS2dQZXIxMDBMaW5rczogXCJrZyBwYXIgMTAwIG1haWxsb25zXCIsXHJcbiAgICAgICAgQ2xvc2U6IFwiRmVybWVyXCIsXHJcbiAgICB9LFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdHJhbnNsYXRpb25zL3RyYW5zbGF0aW9ucy50cyIsImltcG9ydCB7IERlZmF1bHRLaXRTdGF0ZSwgS2l0U3RhdGUgfSBmcm9tIFwiLi9raXRzdGF0ZVwiO1xyXG5pbXBvcnQgeyBDaGFpbk1vZGVsIH0gZnJvbSBcIi4vY2hhaW5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTcHJvY2tldE1vZGVsIH0gZnJvbSBcIi4vc3Byb2NrZXRtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtpdE1vZGVsIHtcclxuICAgIHB1YmxpYyBLaXRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEtpdEJyYW5kOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGFydElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBLaXROYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgRnJvbnRTcHJvY2tldDogc3RyaW5nO1xyXG4gICAgcHVibGljIEZyb250RGVmYXVsdFRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUmVhclNwcm9ja2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUmVhckRlZmF1bHRUZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIENoYWluOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgIENoYWluTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hhaW5CYXNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGl0Y2g6IG51bWJlcjtcclxuICAgIHB1YmxpYyBNYXRlcmlhbDogc3RyaW5nO1xyXG4gICAgcHVibGljIEtpdGJveDogc3RyaW5nO1xyXG4gICAgcHVibGljIElzU3RhbmRhcmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGcm9udE1pbmltdW1UZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb250TWF4aW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUmVhck1pbmltdW1UZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFJlYXJNYXhpbXVtVGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGcm9udFNwcm9ja2V0czogU3Byb2NrZXRNb2RlbFtdO1xyXG4gICAgcHVibGljIFJlYXJTcHJvY2tldHM6IFNwcm9ja2V0TW9kZWxbXTtcclxuICAgIHB1YmxpYyBDaGFpbnM6IENoYWluTW9kZWxbXTtcclxuICAgIHB1YmxpYyBMYW5ndWFnZTogbnVtYmVyO1xyXG4gICAgcHVibGljIEtpdFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDdXJyZW50U3RhdGU6IEtpdFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuQ3VycmVudFN0YXRlID0gRGVmYXVsdEtpdFN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMva2l0bW9kZWwudHMiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaWtlTW9kZWwge1xyXG5cclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBicmFuZHM6IHN0cmluZ1tdO1xyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHNlbGVjdGVkQnJhbmQ6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgY2NzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZENjOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIG1vZGVsczogc3RyaW5nW107XHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgc2VsZWN0ZWRNb2RlbDogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyB5ZWFyczogc3RyaW5nW107XHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgc2VsZWN0ZWRZZWFyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICB0aGlzLmJyYW5kcyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQnJhbmQgPSBcIlwiO1xyXG5cclxuICAgICAgdGhpcy5jY3MgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZENjID0gXCJcIjtcclxuXHJcbiAgICAgIHRoaXMubW9kZWxzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IFwiXCI7XHJcblxyXG4gICAgICB0aGlzLnllYXJzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyID0gXCJcIjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpa2VNb2RlbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9iaWtlbW9kZWwudHMiLCJleHBvcnQgY2xhc3MgQmF0dGVyeU1vZGVsIHtcclxuICAgIHB1YmxpYyBQYXJ0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGFydElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRUFOOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQmF0dGVyeVR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBWb2x0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2FwYWNpdHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDQ0E6IG51bWJlcjtcclxuICAgIHB1YmxpYyBBR006IHN0cmluZztcclxuICAgIHB1YmxpYyBHZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBBY2lkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGhvdG86IHN0cmluZztcclxuICAgIHB1YmxpYyBMZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIERyeVdlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZpbGxlZFdlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIEFjaWRWb2x1bWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBUZXJtaW5hbFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBUZXJtaW5hbERyYXdpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBMYXlvdXREcmF3aW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2hhcmdlUHJlZmVycmVkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hhcmdlTWF4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVGVybWluYWxUb3A6IHN0cmluZztcclxuICAgIHB1YmxpYyBUZXJtaW5hbEZyb250OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVGVybWluYWxTaWRlOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9iYXR0ZXJ5bW9kZWwudHMiLCJleHBvcnQgY2xhc3MgRmlsdGVyTW9kZWwge1xyXG4gICAgcHVibGljIFBhcnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBFQU46IHN0cmluZztcclxuICAgIHB1YmxpYyBUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUGhvdG86IHN0cmluZztcclxuICAgIHB1YmxpYyBEcmF3aW5nOiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9maWx0ZXJtb2RlbC50cyIsImV4cG9ydCBjbGFzcyBCaWtlUmV2ZXJzZU1vZGVsIHtcclxuICAgIHB1YmxpYyBCcmFuZDogc3RyaW5nO1xyXG4gICAgcHVibGljIENjOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgTW9kZWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGcm9tOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVG86IG51bWJlcjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvYmlrZXJldmVyc2Vtb2RlbC50cyIsImV4cG9ydCBjbGFzcyBDaGFpbkluZm9Nb2RlbCB7XHJcbiAgICBDaGFpbk5hbWU6IHN0cmluZztcclxuICAgIFBpdGNoOiBudW1iZXI7XHJcbiAgICBCcmFuZDogc3RyaW5nO1xyXG4gICAgQmFzZU5hbWU6IHN0cmluZztcclxuICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBDb2xvck5hbWU6IHN0cmluZztcclxuICAgIE91dGVyQ29sb3I6IHN0cmluZztcclxuICAgIElubmVyQ29sb3I6IHN0cmluZztcclxuICAgIEFwcGxpY2F0aW9uOiBudW1iZXI7XHJcbiAgICBVc2VNb3BlZDogbnVtYmVyO1xyXG4gICAgVXNlQ3Jvc3M6IG51bWJlcjtcclxuICAgIFVzZU9mZnJvYWQ6IG51bWJlcjtcclxuICAgIFVzZVN0cmVldDogbnVtYmVyO1xyXG4gICAgVXNlU3BvcnQ6IG51bWJlcjtcclxuICAgIFVzZVJhY2luZzogbnVtYmVyO1xyXG4gICAgRnJvbUNjOiBudW1iZXI7XHJcbiAgICBUb0NjOiBudW1iZXI7XHJcbiAgICBQaXRjaE1tOiBudW1iZXI7XHJcbiAgICBQaXRjaFdpZHRoOiBudW1iZXI7XHJcbiAgICBCdXNoOiBzdHJpbmc7XHJcbiAgICBQaW46IHN0cmluZztcclxuICAgIFJvbGxlckRpYW1ldGVyOiBudW1iZXI7XHJcbiAgICBQaW5EaWFtZXRlcjogbnVtYmVyO1xyXG4gICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogbnVtYmVyO1xyXG4gICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogbnVtYmVyO1xyXG4gICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogbnVtYmVyO1xyXG4gICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogbnVtYmVyO1xyXG4gICAgTDE6IG51bWJlcjtcclxuICAgIEwyOiBudW1iZXI7XHJcbiAgICBUZW5zaWxlU3RyZW5ndGg6IG51bWJlcjtcclxuICAgIFdlaWdodDogbnVtYmVyO1xyXG4gICAgU3RhbmRhcmRDbGlwOiBzdHJpbmc7XHJcbiAgICBTbGlwRml0Q2xpcDogc3RyaW5nO1xyXG4gICAgUHJlc3NGaXRDbGlwOiBzdHJpbmc7XHJcbiAgICBTdGFuZGFyZFJpdmV0OiBzdHJpbmc7XHJcbiAgICBTb2Z0Uml2ZXQ6IHN0cmluZztcclxuICAgIFNlYWxUeXBlOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2NoYWluaW5mb21vZGVsLnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5TW9kZWwsIEZpbHRlck1vZGVsLCBLaXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRLaXRzKHBhcnRCcmFuZHM6IG51bWJlciwgYmlrZUlkOiBudW1iZXIsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChwYXJ0czogS2l0TW9kZWxbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIFBhcnRTZXJ2aWNlLkdldDxLaXRNb2RlbFtdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0QnJhbmRzfS9iaWtlLyR7YmlrZUlkfS8ke2xhbmd1YWdlfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJhdHRlcmllcyhwYXJ0QnJhbmRzOiBudW1iZXIsIGJpa2VJZDogbnVtYmVyLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAocGFydHM6IEJhdHRlcnlNb2RlbFtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgUGFydFNlcnZpY2UuR2V0PEJhdHRlcnlNb2RlbFtdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0QnJhbmRzfS9iaWtlLyR7YmlrZUlkfS8ke2xhbmd1YWdlfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEZpbHRlcnMocGFydEJyYW5kczogbnVtYmVyLCBiaWtlSWQ6IG51bWJlciwgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKHBhcnRzOiBGaWx0ZXJNb2RlbFtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgUGFydFNlcnZpY2UuR2V0PEZpbHRlck1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRCcmFuZHN9L2Jpa2UvJHtiaWtlSWR9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldDxUPihVUkw6IHN0cmluZywgZG9uZTogKHZhbHVlczogVCkgPT4gdm9pZCwgZXJyb3JWYWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRvbmUoZXJyb3JWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvcGFydHNlcnZpY2UudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJpa2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaWtlU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCcmFuZHMocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBkb25lOiAoYnJhbmRzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q0NzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgZG9uZTogKGNjczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBCaWtlU2VydmljZS5HZXQ8c3RyaW5nW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRzfT9icmFuZD0ke2Jpa2Uuc2VsZWN0ZWRCcmFuZH1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRNb2RlbHMocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBkb25lOiAobW9kZWxzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9P2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfSZjYz0ke2Jpa2Uuc2VsZWN0ZWRDY31gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRZZWFycyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6ICh5ZWFyczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBCaWtlU2VydmljZS5HZXQ8c3RyaW5nW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRzfT9icmFuZD0ke2Jpa2Uuc2VsZWN0ZWRCcmFuZH0mY2M9JHtiaWtlLnNlbGVjdGVkQ2N9Jm1vZGVsPSR7YmlrZS5zZWxlY3RlZE1vZGVsfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJpa2VzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKGJpa2VzOiBudW1iZXJbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxudW1iZXJbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9L2Jpa2VzP2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfSZjYz0ke2Jpa2Uuc2VsZWN0ZWRDY30mbW9kZWw9JHtiaWtlLnNlbGVjdGVkTW9kZWx9JnllYXI9JHtiaWtlLnNlbGVjdGVkWWVhcn0mbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9iaWtlc2VydmljZS50cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQmlrZVJldmVyc2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNlU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCaWtlcyhwYXJ0aWQ6IG51bWJlciwgZG9uZTogKHBhcnRzOiBCaWtlUmV2ZXJzZU1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBSZXZlcnNlU2VydmljZS5HZXQ8QmlrZVJldmVyc2VNb2RlbFtdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9yZXZlcnNlLyR7cGFydGlkfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXQ8VD4oVVJMOiBzdHJpbmcsIGRvbmU6ICh2YWx1ZXM6IFQpID0+IHZvaWQsIGVycm9yVmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkb25lKGVycm9yVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL3JldmVyc2VzZXJ2aWNlLnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDaGFpbkluZm9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmZvU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRDaGFpbkluZm8oY2hhaW5OYW1lOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChpbmZvOiBDaGFpbkluZm9Nb2RlbCB8IHVuZGVmaW5lZCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEluZm9TZXJ2aWNlLkdldDxDaGFpbkluZm9Nb2RlbCB8IHVuZGVmaW5lZD4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvaW5mby9jaGFpbi8ke2NoYWluTmFtZX0vJHtsYW5ndWFnZX1gLCBkb25lLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldDxUPihVUkw6IHN0cmluZywgZG9uZTogKHZhbHVlczogVCkgPT4gdm9pZCwgZXJyb3JWYWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRvbmUoZXJyb3JWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvaW5mb3NlcnZpY2UudHMiLCJleHBvcnQgZW51bSBQYXJ0QnJhbmRzIHtcclxuICAgIEFGQU0gPSAxLFxyXG4gICAgREMgPSAyLFxyXG4gICAgVGhyZWVkID0gNCxcclxuICAgIFNoaWRvID0gOCxcclxuICAgIE5pdHJvID0gMTYsXHJcbiAgICBZdWFzYSA9IDMyLFxyXG4gICAgSXNvbiA9IDY0LFxyXG4gICAgRUJDQnJha2VzID0gMTI4LFxyXG4gICAgRUJDQ2x1dGNoZXMgPSAyNTYsXHJcbiAgICBOR0sgPSA1MTIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJleHBvcnQgeyBCaWtlU2VsZWN0IH0gZnJvbSBcIi4vYmlrZXNlbGVjdFwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iaWtlcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJpa2VTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQmlrZVNlbGVjdFJvdyB9IGZyb20gXCIuL2Jpa2VzZWxlY3Rfcm93XCI7XHJcblxyXG5pbnRlcmZhY2UgSUJpa2VTZWxlY3RQcm9wcyB7XHJcbiAgICBzdG9yZTogQmlrZVN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgc3BlY2lmaWMgbW90b3JiaWtlXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEJpa2VTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJpa2VTZWxlY3RQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUJpa2VTZWxlY3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcclxuICAgICAgICBjb25zdCBiaWtlID0gc3RvcmUuYmlrZTtcclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57cG9seS50KFwiQmlrZVNlbGVjdFwiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXNlbGVjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YmlrZS5icmFuZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwb2x5LnQoXCJCcmFuZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRCcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3B0aW9uQ2hhbmdlPXtzdG9yZS5zZWxlY3RCcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLmNjc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3BvbHkudChcIkNjXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YmlrZS5zZWxlY3RlZENjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdENjfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3RSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Jpa2UubW9kZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiTW9kZWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtiaWtlLnNlbGVjdGVkTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbE9wdGlvbkNoYW5nZT17c3RvcmUuc2VsZWN0TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YmlrZS55ZWFyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3BvbHkudChcIlllYXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtiaWtlLnNlbGVjdGVkWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3B0aW9uQ2hhbmdlPXtzdG9yZS5zZWxlY3RZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQmlrZVNlbGVjdFJvd1Byb3BlcnRpZXMge1xyXG4gICAgaXRlbXM6IHN0cmluZ1tdO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHNlbGVjdGVkT3B0aW9uOiBzdHJpbmc7XHJcbiAgICBzaWduYWxPcHRpb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgc3BlY2lmaWMgbW90b3JiaWtlXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEJpa2VTZWxlY3RSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJpa2VTZWxlY3RSb3dQcm9wZXJ0aWVzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmlrZVNlbGVjdFJvd1Byb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIGxldCBzcGFuID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxlY3RPcHRpb25zID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGIpID0+IDxvcHRpb24ga2V5PXtifSB2YWx1ZT17Yn0+e2J9PC9vcHRpb24+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzcGFuQ2xhc3MgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RDbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuQ2xhc3MgPSBcImJpa2Utc2VsZWN0LWNlbGxcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdENsYXNzID0gXCJiaWtlLXNlbGVjdC1jZWxsXCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuQ2xhc3MgPSBcImJpa2Utc2VsZWN0LWNlbGwtbm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxlY3QgPVxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3NlbGVjdENsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdGVkT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD47XHJcblxyXG4gICAgICAgICAgICBzcGFuID0gPHNwYW4gY2xhc3NOYW1lPXtzcGFuQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNbMF19XHJcbiAgICAgICAgICAgIDwvc3Bhbj47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXNlbGVjdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1zZWxlY3QtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNlbGVjdENoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2lnbmFsT3B0aW9uQ2hhbmdlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2Jpa2VzL2Jpa2VzZWxlY3Rfcm93LnRzeCIsImV4cG9ydCB7IEtpdExpc3QgfSBmcm9tIFwiLi9raXRsaXN0XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgS2l0IH0gZnJvbSBcIi4va2l0XCI7XHJcbmltcG9ydCB7IEltYWdlTW9kYWwgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IENoYWluSW5mb01vZGFsIH0gZnJvbSBcIi4vY2hhaW5pbmZvbW9kYWxcIjtcclxuXHJcbmludGVyZmFjZSBJS2l0TGlzdFByb3BzIHtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciB0byBkaXNwbGF5IGEgbGlzdCBvZiBraXRzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEtpdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUtpdExpc3RQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUtpdExpc3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuaGFzS2l0cykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGtpdENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBraXRzID0gdGhpcy5wcm9wcy5zdG9yZS5raXRzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtpdHMpIHtcclxuICAgICAgICAgICAgICAgIGtpdENvbXBvbmVudHMgPSBraXRzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8S2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJraXRfXCIgKyBzLlBhcnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2l0PXtzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkFwcGxpY2FibGVLaXRzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge2tpdENvbXBvbmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuU3Byb2NrZXRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlU3Byb2NrZXRJbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiU3Byb2NrZXRJbWFnZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIlNwcm9ja2V0TW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLlNwcm9ja2V0SW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbWFnZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUNoYWluSW1hZ2UoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkNoYWluSW1hZ2VNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJDaGFpbk1vZGFsSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhaW5JbmZvTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm89e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW5mb01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLnByb3BzLnN0b3JlLkhpZGVDaGFpbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5JbmZvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdGxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBLaXRCb20gfSBmcm9tIFwiLi9raXRib21cIjtcclxuXHJcbmludGVyZmFjZSBJS2l0UHJvcHMge1xyXG4gICAga2l0OiBLaXRNb2RlbDtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUga2l0XHJcbiAqIEl0IGRpc3BsYXlzIHRoZSBraXQgdHlwZSwga2l0IG5hbWUgYW5kIGtpdCBjb21wb25lbnRzICh0aHJvdWdoIGEgS2l0Qm9tIGNoaWxkIGNvbXBvbmVudClcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgS2l0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElLaXRQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUtpdFByb3BzLCB7fSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCBraXQgPSB0aGlzLnByb3BzLmtpdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGl0bGVcIj57a2l0LktpdFR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1raXRwYXJ0XCI+e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIlBhcnROdW1iZXJcIil9OiA8c3BhbiBjbGFzc05hbWU9XCJraXQtdGFibGUta2l0bmFtZVwiPntraXQuS2l0TmFtZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtZGVzY3JpcHRpb25cIj57a2l0LkRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLaXRCb21cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImtpdGJvbV9cIiArIGtpdC5QYXJ0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17a2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMva2l0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBLaXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ2hhaW4gfSBmcm9tIFwiLi9jaGFpblwiO1xyXG5pbXBvcnQgeyBTcHJvY2tldCB9IGZyb20gXCIuL3Nwcm9ja2V0XCI7XHJcblxyXG5pbnRlcmZhY2UgSUtpdEJvbVByb3BzIHtcclxuICAgIGtpdDogS2l0TW9kZWw7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJS2l0Qm9tTGlzdFN0YXRlIHtcclxuICAgIGNvbGxhcHNlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciB0aGUgcGFydHMgdGhhdCBtYWtlIHVwIGEga2l0OiBmcm9udCBzcHJvY2tldCwgcmVhciBzcHJvY2tldCBhbmQgY2hhaW5cclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgS2l0Qm9tIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElLaXRCb21Qcm9wcywgSUtpdEJvbUxpc3RTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJS2l0Qm9tUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xsYXBzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHdpbmRvdy5pbm5lcldpZHRoIDwgODAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ29sbGFwc2VkKCkge1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC1wYXJ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIkZyb250U3Byb2NrZXRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Byb2NrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9XCJmcm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIkNoYWluc1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIlJlYXJTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJvY2tldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT1cInJlYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJGcm9udFNwcm9ja2V0XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIkNoYWluc1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtaGVhZGVyXCIgPntwb2x5LnQoXCJSZWFyU3Byb2NrZXRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJvY2tldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT1cImZyb250XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwicmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdGJvbS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQ2hhaW5Nb2RlbCwgS2l0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUNoYWluUHJvcHMge1xyXG4gICAga2l0OiBLaXRNb2RlbDtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElDaGFpblN0YXRlIHtcclxuICAgIHRodW1ibmFpbFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCBkaXNwbGF5aW5nIHRoZSBjaGFpbiB0aGF0IGlzIHBhcnQgb2YgYSBraXQuXHJcbiAqIEl0IGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3QgYSBjaGFpbiB0eXBlIGFuZCBjb2xvciB3aGVyZSByZWxldmFudFxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBDaGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2hhaW5Qcm9wcywgSUNoYWluU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUNoYWluUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGFpbiA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZENoYWluO1xyXG4gICAgICAgIGNvbnN0IGNoYWlucyA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5DdXJyZW50Q2hhaW5zO1xyXG4gICAgICAgIGNvbnN0IGNoYWluVHlwZXMgPSB0aGlzLmdldFR5cGVzKGNoYWlucyk7XHJcbiAgICAgICAgY29uc3QgY2hhaW5Db2xvcnMgPSB0aGlzLmdldENvbG9ycyhjaGFpbnMsIHNlbGVjdGVkQ2hhaW4uQ2hhaW5UeXBlKTtcclxuXHJcbiAgICAgICAgbGV0IGNoYWluVHlwZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIGxldCBjaGFpblR5cGVTaW5nbGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBjaGFpblR5cGVTZWxlY3QgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgY2hhaW5Db2xvck9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIGxldCBjaGFpbkNvbG9yU2luZ2xlID0gbnVsbDtcclxuICAgICAgICBsZXQgY2hhaW5Db2xvclNlbGVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgQnVpbGQgdGhlIHNlbGVjdCBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGNoYWluIHR5cGVcclxuICAgICAgICAgICBVc2UgYSBzcGFuIGluc3RlYWQgb2YgYSBzZWxlY3QgaWYgdGhlcmUgaXMgb25seSBvbmUgaXRlbVxyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKGNoYWluVHlwZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjaGFpblR5cGVPcHRpb25zID0gY2hhaW5UeXBlcy5tYXAoKHQpID0+IDxvcHRpb24ga2V5PXt0fSB2YWx1ZT17dH0+e3R9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgY2hhaW5UeXBlU2VsZWN0ID1cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ2hhaW4uQ2hhaW5UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVR5cGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFpblR5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZSA9IGNoYWluVHlwZXNbMF07XHJcbiAgICAgICAgICAgIGNoYWluVHlwZVNpbmdsZSA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2luZ2xlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICBCdWlsZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgY2hhaW4gY29sb3JcclxuICAgICAgICAgICBVc2UgYSBzcGFuIGluc3RlYWQgb2YgYSBzZWxlY3QgaWYgdGhlcmUgaXMgb25seSBvbmUgY29sb3JcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmIChjaGFpbkNvbG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNoYWluQ29sb3JPcHRpb25zID0gY2hhaW5Db2xvcnMubWFwKCh0KSA9PiA8b3B0aW9uIGtleT17dH0gdmFsdWU9e3R9Pnt0fTwvb3B0aW9uPik7XHJcbiAgICAgICAgICAgIGNoYWluQ29sb3JTZWxlY3QgPVxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDaGFpbi5DaGFpbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhaW5Db2xvck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlID0gY2hhaW5Db2xvcnNbMF07XHJcbiAgICAgICAgICAgIGNoYWluQ29sb3JTaW5nbGUgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpbmdsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlVVJMID0gXCJodHRwczovL3NlcnZpY2UuYWZhbS5jb20vd2Vic2hvcC9pbWFnZXMvY2hhaW5zL1wiICsgc2VsZWN0ZWRDaGFpbi5DaGFpbkJhc2VOYW1lICsgXCIuanBnXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJUeXBlXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpblR5cGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5UeXBlU2luZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIkNvbG9yXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbkNvbG9yU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluQ29sb3JTaW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiTGVuZ3RoXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiPntzZWxlY3RlZENoYWluLkxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJQYXJ0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtcGFydG5hbWUga2l0cGFydC1pbmxpbmVcIj57c2VsZWN0ZWRDaGFpbi5GdWxsTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dDaGFpbkluZm8oc2VsZWN0ZWRDaGFpbik7IGUucHJldmVudERlZmF1bHQoKTsgfX0+JiM5NDMyOzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy50aHVtYm5haWwoc2VsZWN0ZWRDaGFpbiwgaW1hZ2VVUkwpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbWFnZUVycm9yKGl0ZW06IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHByaXZhdGUgdGh1bWJuYWlsKGNoYWluOiBDaGFpbk1vZGVsLCBpbWFnZVVSTDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGh1bWJuYWlsVmlzaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXRodW1ibmFpbCBraXRwYXJ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVSTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYWluLXRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dDaGFpbkltYWdlKGNoYWluLCBpbWFnZVVSTCk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIHBvc3NpYmxlIGNoYWluIHR5cGVzIGZyb20gdGhlIGxpc3Qgb2YgY2hhaW5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VHlwZXMoY2hhaW5zOiBDaGFpbk1vZGVsW10pOiBzdHJpbmdbXSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVzLmZpbmQoKHApID0+IHAgPT09IGNoYWluLkNoYWluVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpblR5cGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlcy5wdXNoKGNoYWluLkNoYWluVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIHBvc3NpYmxlIGNoYWluIGNvbG9ycyBmb3IgYSBzcGVjaWZpYyB0eXBlIG9mIGNoYWluXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR5cGUgLSBUaGUgdHlwZSB0byBmaWx0ZXIgb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDb2xvcnMoY2hhaW5zOiBDaGFpbk1vZGVsW10sIGF0eXBlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSA9PT0gYXR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29sb3JzLmZpbmQoKHApID0+IHAgPT09IGNoYWluLkNoYWluQ29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluQ29sb3IgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY2hhaW4uQ2hhaW5Db2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29sb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVzZXIgc2VsZWN0ZWQgYSBuZXcgdHlwZSBvZiBjaGFpblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVR5cGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbG9yID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW4uQ2hhaW5Db2xvcjtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNoYWlucyA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5DdXJyZW50Q2hhaW5zO1xyXG5cclxuICAgICAgICBsZXQgbmV3Q2hhaW46IENoYWluTW9kZWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qIFRyeSB0byBmaW5kIGEgY2hhaW4gd2l0aCB0aGUgc2VsZWN0ZWQgdHlwZSBhbmQgdGhlIGNvbG9yIHRoYXQgaXMgcGFydCBvZiB0aGUgcHJvcHMgKGkuZS4gdGhlIGRlZmF1bHQgY29sb3IpICovXHJcbiAgICAgICAgY29uc3QgdHlwZWNvbG9yY2hhaW5zOiBDaGFpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGNoYWluIGhhcyB0aGUgcmVxdWlyZWQgdHlwZSBhbmQgY29sb3JcclxuICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlICYmIGNoYWluLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFuZCBpdCBpcyBub3QgeWV0IHByZXNlbnQgaW4gdGhlIG91dHB1dCBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlY29sb3JjaGFpbnMuZmluZCgocCkgPT4gKHAuQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgcC5DaGFpbkNvbG9yID09PSBzZWxlY3RlZENvbG9yKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVuIGFkZCBpdCB0byB0aGUgb3V0cHV0IGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZWNvbG9yY2hhaW5zLnB1c2goY2hhaW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZWNvbG9yY2hhaW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSB0eXBlY29sb3JjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBJZiBubyBjaGFpbiBjb3VsZCBiZSBmb3VuZCwgc2VsZWN0IHRoZSBmaXJzdCBjaGFpbiBvZiB0aGUgc2VsZWN0ZWQgdHlwZSAqL1xyXG4gICAgICAgIGlmICghbmV3Q2hhaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZWNoYWluczogQ2hhaW5Nb2RlbFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0eXBlY2hhaW5zLmZpbmQoKHApID0+IHAuQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVjaGFpbnMucHVzaChjaGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZWNoYWlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGFpbiA9IHR5cGVjaGFpbnNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIElmIHN0aWxsIG5vIGNoYWluIGNvdWxkIGJlIGZvdW5kLCBwaWNrIHRoZSBmaXJzdCBvbmUgKi9cclxuICAgICAgICBpZiAoIW5ld0NoYWluKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWluID0gY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogU2V0IHRodW1ibmFpbCBiYWNrIHRvIHZpc2libGUgKi9cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogU2lnbmFsIHRoZSBwYXJlbnQgY29tcG9uZW50IHRoYXQgdGhlIGNoYWluIHdhcyBjaGFuZ2VkICovXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5oYW5kbGVDaGFpbkNoYW5nZSh0aGlzLnByb3BzLmtpdCwgbmV3Q2hhaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVzZXIgc2VsZWN0ZWQgYSBuZXcgY2hhaW4gY29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVDb2xvckNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZENoYWluLkNoYWluVHlwZTtcclxuICAgICAgICBjb25zdCBjaGFpbnMgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuQ3VycmVudENoYWlucztcclxuXHJcbiAgICAgICAgbGV0IG5ld0NoYWluOiBDaGFpbk1vZGVsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKiBUcnkgdG8gZmluZCBhIGNoYWluIHdpdGggdGhlIHNlbGVjdGVkIHR5cGUgYW5kIHRoZSBjb2xvciB0aGF0IGlzIHBhcnQgb2YgdGhlIHByb3BzIChpLmUuIHRoZSBkZWZhdWx0IGNvbG9yKSAqL1xyXG4gICAgICAgIGNvbnN0IHR5cGVjb2xvcmNoYWluczogQ2hhaW5Nb2RlbFtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFpbi5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSAmJiBjaGFpbi5DaGFpbkNvbG9yID09PSBzZWxlY3RlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR5cGVjb2xvcmNoYWlucy5maW5kKChwKSA9PiBwLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlICYmIHAuQ2hhaW5Db2xvciA9PT0gc2VsZWN0ZWRDb2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlY29sb3JjaGFpbnMucHVzaChjaGFpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlY29sb3JjaGFpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdDaGFpbiA9IHR5cGVjb2xvcmNoYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIElmIG5vIGNoYWluIGNvdWxkIGJlIGZvdW5kLCBwaWNrIHRoZSBmaXJzdCBvbmUgKi9cclxuICAgICAgICBpZiAoIW5ld0NoYWluKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWluID0gY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogU2V0IHRodW1ibmFpbCBiYWNrIHRvIHZpc2libGUgKi9cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogU2lnbmFsIHRoZSBwYXJlbnQgY29tcG9uZW50IHRoYXQgdGhlIGNoYWluIHdhcyBjaGFuZ2VkICovXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5oYW5kbGVDaGFpbkNoYW5nZSh0aGlzLnByb3BzLmtpdCwgbmV3Q2hhaW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBLaXRNb2RlbCwgU3Byb2NrZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBJU3Byb2NrZXRQcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG4gICAgc2lkZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNwcm9ja2V0U3RhdGUge1xyXG4gICAgdGh1bWJuYWlsVmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IGRpc3BsYXlpbmcgYSBzcHJvY2tldCB0aGF0IGlzIHBhcnQgb2YgYSBraXRcclxuICogSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCB0aGUgbnVtYmVyIG9mIHRlZXRoXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIFNwcm9ja2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTcHJvY2tldFByb3BzLCBJU3Byb2NrZXRTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJU3Byb2NrZXRQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwcm9ja2V0cyA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3Byb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaWRlID09PSBcImZyb250XCIpIHtcclxuICAgICAgICAgICAgc3Byb2NrZXRzID0gdGhpcy5wcm9wcy5raXQuRnJvbnRTcHJvY2tldHM7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3Byb2NrZXQgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRGcm9udFNwcm9ja2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwcm9ja2V0cyA9IHRoaXMucHJvcHMua2l0LlJlYXJTcHJvY2tldHM7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3Byb2NrZXQgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRSZWFyU3Byb2NrZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcHJvY2tldE9wdGlvbnMgPSBzcHJvY2tldHMubWFwKChzKSA9PlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e3MuUGFydElkfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3MuU3Byb2NrZXROYW1lfT57cy5UZWV0aH1cclxuICAgICAgICAgICAgPC9vcHRpb24+KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9zcHJvY2tldHMvM2QvdmlnbmV0dGVzL1wiICsgc2VsZWN0ZWRTcHJvY2tldC5TcHJvY2tldE5hbWUgKyBcIi5qcGdcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiVGVldGhcIil9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNwcm9ja2V0LlNwcm9ja2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+e3Nwcm9ja2V0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlBhcnRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcGFydG5hbWUga2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiPntzZWxlY3RlZFNwcm9ja2V0LlNwcm9ja2V0TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy50aHVtYm5haWwoc2VsZWN0ZWRTcHJvY2tldCwgaW1hZ2VVUkwpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbWFnZUVycm9yKGl0ZW06IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHVtYm5haWwoc3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWwsIGltYWdlVVJMOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aHVtYm5haWxWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGh1bWJuYWlsIGtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Byb2NrZXQtdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd1Nwcm9ja2V0SW1hZ2Uoc3Byb2NrZXQsIGltYWdlVVJMKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5mb3JtIHRoZSBwYXJlbnQgY29tcG9uZW50IHRoYXQgdGhlIHVzZXIgc2VsZWN0ZWQgYSBkaWZmZXJlbnQgbnVtYmVyIG9mIHRlZXRoIChpLmUuIGEgZGlmZmVyZW50IHNwcm9ja2V0KVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcHJvY2tldE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNwcm9ja2V0cyA9ICh0aGlzLnByb3BzLnNpZGUgPT09IFwiZnJvbnRcIikgPyB0aGlzLnByb3BzLmtpdC5Gcm9udFNwcm9ja2V0cyA6IHRoaXMucHJvcHMua2l0LlJlYXJTcHJvY2tldHM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcHJvY2tldCA9IHNwcm9ja2V0cy5maW5kKChzOiBTcHJvY2tldE1vZGVsKSA9PiBzLlNwcm9ja2V0TmFtZSA9PT0gY3VycmVudFNwcm9ja2V0TmFtZSkgfHwgc3Byb2NrZXRzWzBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuaGFuZGxlU3Byb2NrZXRDaGFuZ2UodGhpcy5wcm9wcy5raXQsIHRoaXMucHJvcHMuc2lkZSwgc2VsZWN0ZWRTcHJvY2tldCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9zcHJvY2tldC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJSW1hZ2VNb2RhbFByb3BzIHtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG4gICAgaW1hZ2VVcmw6IHN0cmluZztcclxuICAgIG1vZGFsSWQ6IHN0cmluZztcclxuICAgIGltYWdlSWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjbG9zZVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUltYWdlTW9kYWxQcm9wcywge30+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5tb2RhbElkfSBjbGFzc05hbWU9XCJtb2RhbF9iYWNrZ3JvdW5kXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD17dGhpcy5wcm9wcy5pbWFnZUlkfSBzcmM9e3RoaXMucHJvcHMuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cIm1vZGFsX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNsb3NlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbWFnZW1vZGFsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSVJldmVyc2VNb2RhbFByb3BzIHtcclxuICAgIHN0b3JlOiBQYXJ0U3RvcmU7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgb25IaWRlOiBGdW5jdGlvbjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmV2ZXJzZU1vZGFsU3RhdGUge1xyXG4gICAgc2VsZWN0ZWRQYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgUmV2ZXJzZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSZXZlcnNlTW9kYWxQcm9wcywgSVJldmVyc2VNb2RhbFN0YXRlPiB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYWdlX3NpemU6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUmV2ZXJzZU1vZGFsUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgIFxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFBhZ2U6IDAsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UgPSB0aGlzLnVwZGF0ZVBhZ2UuYmluZCh0aGlzKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBhZ2UoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUGFnZTogZGF0YS5zZWxlY3RlZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgICAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJpa2VsaXN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEJpa2VzID0gdGhpcy5wcm9wcy5zdG9yZS5SZXZlcnNlZEJpa2VzO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoYWxsQmlrZXMubGVuZ3RoIC8gdGhpcy5wYWdlX3NpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBiaWtlc1RvRGlzcGxheSA9IGFsbEJpa2VzLnNsaWNlKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICogdGhpcy5wYWdlX3NpemUsICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSArIDEpICogdGhpcy5wYWdlX3NpemUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpa2VzVG9EaXNwbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBiaWtlbGlzdCA9IGJpa2VzVG9EaXNwbGF5Lm1hcCgoYiwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJyZXZlcnNlX1wiICsgaX0gY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1jZWxsIGNlbGwtbGVmdFwiPntiLkJyYW5kfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1jZWxsIGNlbGwtY2VudGVyXCI+e2IuQ2N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1sZWZ0XCI+e2IuTW9kZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1jZW50ZXJcIj57Yi5Gcm9tfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1jZWxsIGNlbGwtY2VudGVyXCI+e2IuVG99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9iYWNrZ3JvdW5kXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIkJyYW5kXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiQ2NcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJNb2RlbFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIkZyb21cIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJUb1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmlrZWxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9e3BvbHkudChcIlByZXZpb3VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExhYmVsPXtwb2x5LnQoXCJOZXh0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLnVwZGF0ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wicGFnaW5hdG9yLWFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmQnVpbGRlcj17KCkgPT4geyByZXR1cm4gXCIjXCI7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2x5LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9yZXZlcnNlbW9kYWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IENoYWluSW5mb01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElDaGFpbkluZm9Nb2RhbFByb3BzIHtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxuICAgIGluZm86IENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkO1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxuICAgIG9uSGlkZTogRnVuY3Rpb247XHJcbn1cclxuXHJcbkBvYnNlcnZlciBleHBvcnQgY2xhc3MgQ2hhaW5JbmZvTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUNoYWluSW5mb01vZGFsUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ICYmIHRoaXMucHJvcHMuaW5mbykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucHJvcHMuaW5mbztcclxuICAgICAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZm8uQ2hhaW5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFpbi1pbmZvLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDaGFpblR5cGVcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaXRjaFwiPntpbmZvLlBpdGNofTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRGVzY3JpcHRpb25cIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9EZXNjcmlwdGlvblwiPntpbmZvLkRlc2NyaXB0aW9ufTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiT3V0ZXJDb2xvclwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb091dGVyQ29sb3JcIj57aW5mby5PdXRlckNvbG9yfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlBpdGNoTW1cIil9IChQKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGl0Y2hNbVwiPntpbmZvLlBpdGNoTW19PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaXRjaFdpZHRoXCIpfSAoVyk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpdGNoV2lkdGhcIj57aW5mby5QaXRjaFdpZHRofTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJCdXNoVHlwZVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0J1c2hcIj57aW5mby5CdXNofTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUGluVHlwZVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpblwiPntpbmZvLlBpbn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJSb2xsZXJEaWFtZXRlclwiKX0gKFIpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9Sb2xsZXJEaWFtZXRlclwiPntpbmZvLlJvbGxlckRpYW1ldGVyfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUGluRGlhbWV0ZXJcIil9IChEKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGluRGlhbWV0ZXJcIj57aW5mby5QaW5EaWFtZXRlcn08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkludGVybmFsUGxhdGVUaGlja25lc3NcIil9IChUKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvSW50ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiPntpbmZvLkludGVybmFsUGxhdGVUaGlja25lc3N9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJFeHRlcm5hbFBsYXRlVGhpY2tuZXNzXCIpfSAodCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0V4dGVybmFsUGxhdGVUaGlja25lc3NcIj57aW5mby5FeHRlcm5hbFBsYXRlVGhpY2tuZXNzfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiSW50ZXJuYWxQbGF0ZUhlaWdodFwiKX0gKEgpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9JbnRlcm5hbFBsYXRlSGVpZ2h0XCI+e2luZm8uSW50ZXJuYWxQbGF0ZUhlaWdodH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkV4dGVybmFsUGxhdGVIZWlnaHRcIil9IChoKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvRXh0ZXJuYWxQbGF0ZUhlaWdodFwiPntpbmZvLkV4dGVybmFsUGxhdGVIZWlnaHR9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkwxXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvTDFcIj57aW5mby5MMX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTDJcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9MMlwiPntpbmZvLkwyfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJUZW5zaWxlU3RyZW5ndGhcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9UZW5zaWxlU3RyZW5ndGhcIj57aW5mby5UZW5zaWxlU3RyZW5ndGh9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+ZGFOPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJXZWlnaHRcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9XZWlnaHRcIj57aW5mby5XZWlnaHR9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+e3BvbHkudChcIktnUGVyMTAwTGlua3NcIil9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJTdGFuZGFyZENsaXBcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9TdGFuZGFyZENsaXBcIj57aW5mby5TdGFuZGFyZENsaXB9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJTdGFuZGFyZFJpdmV0XCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvU3RhbmRhcmRSaXZldFwiPntpbmZvLlN0YW5kYXJkUml2ZXR9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJTZWFsVHlwZVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1NlYWxUeXBlXCI+e2luZm8uU2VhbFR5cGV9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2FmYW0uY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9jaGFpbl9kaW0ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvbHkudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW5pbmZvbW9kYWwudHN4IiwiZXhwb3J0IHsgQmF0dGVyeUNvbnRhaW5lciB9IGZyb20gXCIuL2JhdHRlcnljb250YWluZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5TGlzdCB9IGZyb20gXCIuL2JhdHRlcnlsaXN0XCI7XHJcbmltcG9ydCB7IEltYWdlTW9kYWwsIFJldmVyc2VNb2RhbCB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQmF0dGVyeUluZm9Nb2RhbCB9IGZyb20gXCIuL2JhdHRlcnlpbmZvbW9kYWxcIjtcclxuXHJcbmludGVyZmFjZSBJQmF0dGVyeUNvbnRhaW5lclByb3BzIHtcclxuICAgIHN0b3JlOiBCYXR0ZXJ5U3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBtYW5hZ2luZyBhIGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJhdHRlcnlDb250YWluZXJQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmF0dGVyeUNvbnRhaW5lclByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICAgICBcclxuICAgIH0gICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLmJhdHRlcmllcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhdHRlcnlMaXN0IHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW1hZ2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVCYXR0ZXJ5SW1hZ2UoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkJhdHRlcnlNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJCYXR0ZXJ5TW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhdHRlcnlJbmZvTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUluZm9Nb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdHRlcnk9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVCYXR0ZXJ5SW5mbygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhdHRlcnlJbmZvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJldmVyc2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZVJldmVyc2VkQmlrZXMoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeVJldmVyc2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXZlcnNlTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnljb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQmF0dGVyeVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5TGlzdFByb3BzIHtcclxuICAgIHN0b3JlOiBCYXR0ZXJ5U3RvcmU7ICAgIFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUJhdHRlcnlMaXN0U3RhdGUge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJhdHRlcmllc1xyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmF0dGVyeUxpc3RQcm9wcywgSUJhdHRlcnlMaXN0U3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUJhdHRlcnlMaXN0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xsYXBzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkICE9IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBpc0NvbGxhcHNlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW1hZ2VFcnJvcihpdGVtOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgICAgXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgICAgIGxldCB0aGVQYXJ0cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgYmF0dGVyaWVzID0gdGhpcy5wcm9wcy5zdG9yZS5iYXR0ZXJpZXM7XHJcblxyXG4gICAgICAgIGlmIChiYXR0ZXJpZXMpIHtcclxuICAgICAgICAgICAgdGhlUGFydHMgPSBiYXR0ZXJpZXMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aS50b1N0cmluZygpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJdGVtXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5QYXJ0fTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJFQU5cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkVBTn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQmF0dGVyeVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlZvbHRcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlZvbHR9IFY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ2FwYWNpdHlcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkNhcGFjaXR5fSBBaDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDQ0FcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkNDQX0gQTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBR01cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkFHTX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiR2VsXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5HZWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFjaWRcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkFjaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkluZm9cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZm8taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW5mby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0JhdHRlcnlJbmZvKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkltYWdlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0JhdHRlcnlJbWFnZShzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUJhdHRlcmllc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBhcnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkl0ZW1cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkVBTlwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiVGVjaG5vbG9neVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiVm9sdGFnZVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQ2FwYWNpdHlcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkNDQVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQUdNXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJHZWxcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkFjaWRcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPkluZm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZVBhcnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ29sbGFwc2VkKCkge1xyXG4gICAgICAgIGxldCB0aGVUYWJsZXMgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgIGNvbnN0IGJhdHRlcmllcyA9IHRoaXMucHJvcHMuc3RvcmUuYmF0dGVyaWVzO1xyXG5cclxuICAgICAgICBpZiAoYmF0dGVyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoZVRhYmxlcyA9IGJhdHRlcmllcy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGFydC10YWJsZSBjb2xsYXBzZWRcIiBrZXk9e2kudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzLlBhcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkVBTlwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzLkVBTn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiVGVjaG5vbG9neVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCIgPntzLkJhdHRlcnlUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJWb2x0YWdlXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlZvbHRcIj57cy5Wb2x0fSBWPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkNhcGFjaXR5XCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNhcGFjaXR5XCI+e3MuQ2FwYWNpdHl9IEFoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIkNDQVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDQ0FcIj57cy5DQ0F9IEE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQUdNXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFHTVwiPntzLkFHTX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiR2VsXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkdlbFwiPntzLkdlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQWNpZFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBY2lkXCI+e3MuQWNpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SW5mbzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkluZm9cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWZhbS5jb20vd3AtY29udGVudC90aGVtZXMvbmV0QWZhbS9hZmFtcGFydHMvaW5mby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUluZm8ocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUltYWdlKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT4sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0cmFuc2xhdGUudChcIkFwcGxpY2FibGVCYXR0ZXJpZXNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIHt0aGVUYWJsZXN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5bGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBJQmF0dGVyeUluZm9Nb2RhbFByb3BzIHtcclxuICAgIHN0b3JlOiBCYXR0ZXJ5U3RvcmU7XHJcbiAgICBiYXR0ZXJ5OiBCYXR0ZXJ5TW9kZWw7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgb25IaWRlOiBGdW5jdGlvbjtcclxufVxyXG5cclxuQG9ic2VydmVyIGV4cG9ydCBjbGFzcyBCYXR0ZXJ5SW5mb01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCYXR0ZXJ5SW5mb01vZGFsUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXR0ZXJ5ID0gdGhpcy5wcm9wcy5iYXR0ZXJ5O1xyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmF0dGVyeS5QYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJhdHRlcnktaW5mby10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlZvbHRhZ2VcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb1ZvbHRcIj57YmF0dGVyeS5Wb2x0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5WPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDYXBhY2l0eVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQ2FwYWNpdHlcIj57YmF0dGVyeS5DYXBhY2l0eX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+QWg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNDQVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQ0NBXCI+e2JhdHRlcnkuQ0NBfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJBR01cIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0FHTVwiPntiYXR0ZXJ5LkFHTX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJHZWxcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0dFTFwiPntiYXR0ZXJ5LkdlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJMZW5ndGhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0xlbmd0aFwiPntiYXR0ZXJ5Lkxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+bW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIldpZHRoXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9XaWR0aFwiPntiYXR0ZXJ5LldpZHRofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5tbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiSGVpZ2h0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9IZWlnaHRcIj57YmF0dGVyeS5IZWlnaHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPm1tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJEcnlXZWlnaHRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0RyeVdlaWdodFwiPnsoYmF0dGVyeS5EcnlXZWlnaHQgPT0gMCkgPyBcIi0tXCIgOiBiYXR0ZXJ5LkRyeVdlaWdodH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+a2c8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkZpbGxlZFdlaWdodFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvRmlsbGVkV2VpZ2h0XCI+eyhiYXR0ZXJ5LkZpbGxlZFdlaWdodCA9PSAwKSA/IFwiLS1cIiA6IGJhdHRlcnkuRmlsbGVkV2VpZ2h0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5rZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQWNpZFZvbHVtZVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQWNpZFZvbHVtZVwiPnsoYmF0dGVyeS5BY2lkVm9sdW1lID09IDApID8gXCItLVwiIDogYmF0dGVyeS5BY2lkVm9sdW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj57cG9seS50KFwiTGl0ZXJcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDaGFyZ2VQcmVmZXJyZWRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0NoYXJnZVByZWZlcnJlZFwiPntiYXR0ZXJ5LkNoYXJnZVByZWZlcnJlZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+QTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ2hhcmdlTWF4XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DaGFyZ2VNYXhcIj57YmF0dGVyeS5DaGFyZ2VNYXh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1kcmF3aW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkxheW91dERyYXdpbmdcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5MYXlvdXREcmF3aW5nfSBjbGFzc05hbWU9XCJiYXR0ZXJ5LWxheW91dC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1kcmF3aW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlcm1pbmFsVG9wXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhdHRlcnkuVGVybWluYWxUb3B9IGNsYXNzTmFtZT1cImJhdHRlcnktdGVybWluYWwtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tZHJhd2luZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJUZXJtaW5hbEZyb250XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhdHRlcnkuVGVybWluYWxGcm9udH0gY2xhc3NOYW1lPVwiYmF0dGVyeS10ZXJtaW5hbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1kcmF3aW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlcm1pbmFsU2lkZVwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXR0ZXJ5LlRlcm1pbmFsU2lkZX0gY2xhc3NOYW1lPVwiYmF0dGVyeS10ZXJtaW5hbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVyc2UtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93UmV2ZXJzZWRCaWtlcyhiYXR0ZXJ5KTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fT57cG9seS50KFwiQXBwbGljYXRpb25MaXN0XCIpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvbHkudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5aW5mb21vZGFsLnRzeCIsImV4cG9ydCB7IEZpbHRlckNvbnRhaW5lciB9IGZyb20gXCIuL2ZpbHRlcmNvbnRhaW5lclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9maWx0ZXJzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyTGlzdCB9IGZyb20gXCIuL2ZpbHRlcmxpc3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEltYWdlTW9kYWwsIFJldmVyc2VNb2RhbCB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcbmludGVyZmFjZSBJRmlsdGVyQ29udGFpbmVyUHJvcHMge1xyXG4gICAgc3RvcmU6IEZpbHRlclN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgbWFuYWdpbmcgdGhlIHN0YXRlIG9mIGEgbGlzdCBvZiBmaWx0ZXJzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRmlsdGVyQ29udGFpbmVyUHJvcHMsIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSUZpbHRlckNvbnRhaW5lclByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuZmlsdGVycy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJJbWFnZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUZpbHRlckltYWdlKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJGaWx0ZXJJbWFnZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkZpbHRlckltYWdlTW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJEcmF3aW5nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckRyYXdpbmdNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVGaWx0ZXJEcmF3aW5nKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJGaWx0ZXJEcmF3aW5nTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiRmlsdGVyRHJhd2luZ01vZGFsSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJJbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJldmVyc2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZVJldmVyc2VkQmlrZXMoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5GaWx0ZXJSZXZlcnNlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmV2ZXJzZU1vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyY29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEZpbHRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIElGaWx0ZXJMaXN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEZpbHRlclN0b3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUZpbHRlckxpc3RTdGF0ZSB7XHJcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEZpbHRlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUZpbHRlckxpc3RQcm9wcywgSUZpbHRlckxpc3RTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJRmlsdGVyTGlzdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGFwc2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCAhPSBpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogaXNDb2xsYXBzZWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGVmYXVsdCgpIHtcclxuICAgICAgICBsZXQgdGhlUGFydHMgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnByb3BzLnN0b3JlLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoZVBhcnRzID0gZmlsdGVycy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpLnRvU3RyaW5nKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkl0ZW1cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlBhcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkVBTlwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBcHBsaWNhdGlvbnNcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWZhbS5jb20vd3AtY29udGVudC90aGVtZXMvbmV0QWZhbS9hZmFtcGFydHMvYmlrZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd1JldmVyc2VkQmlrZXMocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93RmlsdGVySW1hZ2Uocywgcy5QaG90byk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5EcmF3aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJEcmF3aW5nKHMsIHMuRHJhd2luZyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj4sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0cmFuc2xhdGUudChcIkFwcGxpY2FibGVGaWx0ZXJzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJUeXBlXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhdGlvbnNcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkltYWdlXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJEcmF3aW5nXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGVQYXJ0c31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNvbGxhcHNlZCgpIHtcclxuICAgICAgICBsZXQgdGhlVGFibGVzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5wcm9wcy5zdG9yZS5maWx0ZXJzO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICB0aGVUYWJsZXMgPSBmaWx0ZXJzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlIGNvbGxhcHNlZFwiIGtleT17aS50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkl0ZW1cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cy5QYXJ0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkVBTlwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzLkVBTn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJUeXBlXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiA+e3MuVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhdGlvbnNcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWZhbS5jb20vd3AtY29udGVudC90aGVtZXMvbmV0QWZhbS9hZmFtcGFydHMvYmlrZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93UmV2ZXJzZWRCaWtlcyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkltYWdlXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkltYWdlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0ZpbHRlckltYWdlKHMsIHMuUGhvdG8pOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiRHJhd2luZ1wiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJEcmF3aW5nXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3MuRHJhd2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93RmlsdGVyRHJhd2luZyhzLCBzLkRyYXdpbmcpOyBlLnByZXZlbnREZWZhdWx0KCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUZpbHRlcnNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIHt0aGVUYWJsZXN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVybGlzdC50c3giXSwic291cmNlUm9vdCI6IiJ9