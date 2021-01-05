webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PartStore = void 0;
var PartStore = /** @class */ (function () {
    function PartStore() {
    }
    return PartStore;
}());
exports.PartStore = PartStore;


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var partservice_1 = __webpack_require__(80);
Object.defineProperty(exports, "PartService", { enumerable: true, get: function () { return partservice_1.PartService; } });
var bikeservice_1 = __webpack_require__(98);
Object.defineProperty(exports, "BikeService", { enumerable: true, get: function () { return bikeservice_1.BikeService; } });
var reverseservice_1 = __webpack_require__(99);
Object.defineProperty(exports, "ReverseService", { enumerable: true, get: function () { return reverseservice_1.ReverseService; } });


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(101);
Object.defineProperty(exports, "PartBrands", { enumerable: true, get: function () { return constants_1.PartBrands; } });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imagemodal_1 = __webpack_require__(111);
Object.defineProperty(exports, "ImageModal", { enumerable: true, get: function () { return imagemodal_1.ImageModal; } });
var reversemodal_1 = __webpack_require__(112);
Object.defineProperty(exports, "ReverseModal", { enumerable: true, get: function () { return reversemodal_1.ReverseModal; } });


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
exports.BikeStore = void 0;
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
var kitmodel_1 = __webpack_require__(74);
Object.defineProperty(exports, "KitModel", { enumerable: true, get: function () { return kitmodel_1.KitModel; } });
var kitstate_1 = __webpack_require__(27);
Object.defineProperty(exports, "DefaultKitState", { enumerable: true, get: function () { return kitstate_1.DefaultKitState; } });
Object.defineProperty(exports, "KitState", { enumerable: true, get: function () { return kitstate_1.KitState; } });
var chainmodel_1 = __webpack_require__(28);
Object.defineProperty(exports, "ChainModel", { enumerable: true, get: function () { return chainmodel_1.ChainModel; } });
var sprocketmodel_1 = __webpack_require__(29);
Object.defineProperty(exports, "SprocketModel", { enumerable: true, get: function () { return sprocketmodel_1.SprocketModel; } });
var bikemodel_1 = __webpack_require__(75);
Object.defineProperty(exports, "BikeModel", { enumerable: true, get: function () { return bikemodel_1.BikeModel; } });
var batterymodel_1 = __webpack_require__(76);
Object.defineProperty(exports, "BatteryModel", { enumerable: true, get: function () { return batterymodel_1.BatteryModel; } });
var filtermodel_1 = __webpack_require__(77);
Object.defineProperty(exports, "FilterModel", { enumerable: true, get: function () { return filtermodel_1.FilterModel; } });
var bikereversemodel_1 = __webpack_require__(78);
Object.defineProperty(exports, "BikeReverseModel", { enumerable: true, get: function () { return bikereversemodel_1.BikeReverseModel; } });
var chaininfomodel_1 = __webpack_require__(79);
Object.defineProperty(exports, "ChainInfoModel", { enumerable: true, get: function () { return chaininfomodel_1.ChainInfoModel; } });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KitState = exports.DefaultKitState = void 0;
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
exports.ChainModel = exports.DefaultChain = void 0;
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
exports.SprocketModel = exports.DefaultSprocket = void 0;
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
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
exports.KitStore = void 0;
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(6);
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
        enumerable: false,
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
        enumerable: false,
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
/* 39 */
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
exports.BatteryStore = void 0;
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(6);
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
        enumerable: false,
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
        enumerable: false,
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
/* 40 */
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
exports.FilterStore = void 0;
var mobx_1 = __webpack_require__(4);
var partstore_1 = __webpack_require__(6);
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
        enumerable: false,
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
        enumerable: false,
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
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(10);
var parts_1 = __webpack_require__(56);
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
/* 54 */,
/* 55 */,
/* 56 */
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
exports.Parts = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
var stores_1 = __webpack_require__(57);
var bikes_1 = __webpack_require__(102);
var kits_1 = __webpack_require__(105);
var batteries_1 = __webpack_require__(114);
var filters_1 = __webpack_require__(118);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appstore_1 = __webpack_require__(58);
Object.defineProperty(exports, "AppStore", { enumerable: true, get: function () { return appstore_1.AppStore; } });
var bikestore_1 = __webpack_require__(25);
Object.defineProperty(exports, "BikeStore", { enumerable: true, get: function () { return bikestore_1.BikeStore; } });
var kitstore_1 = __webpack_require__(38);
Object.defineProperty(exports, "KitStore", { enumerable: true, get: function () { return kitstore_1.KitStore; } });
var partstore_1 = __webpack_require__(6);
Object.defineProperty(exports, "PartStore", { enumerable: true, get: function () { return partstore_1.PartStore; } });
var batterystore_1 = __webpack_require__(39);
Object.defineProperty(exports, "BatteryStore", { enumerable: true, get: function () { return batterystore_1.BatteryStore; } });
var filterstore_1 = __webpack_require__(40);
Object.defineProperty(exports, "FilterStore", { enumerable: true, get: function () { return filterstore_1.FilterStore; } });


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStore = void 0;
var Polyglot = __webpack_require__(16);
var translations_1 = __webpack_require__(72);
var bikestore_1 = __webpack_require__(25);
var partstore_1 = __webpack_require__(6);
var kitstore_1 = __webpack_require__(38);
var batterystore_1 = __webpack_require__(39);
var filterstore_1 = __webpack_require__(40);
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
        enumerable: false,
        configurable: true
    });
    return AppStore;
}());
exports.AppStore = AppStore;
exports.default = AppStore;


/***/ }),
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
Object.defineProperty(exports, "Translations", { enumerable: true, get: function () { return translations_1.Translations; } });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Translations = void 0;
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
exports.KitModel = void 0;
var kitstate_1 = __webpack_require__(27);
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
exports.BikeModel = void 0;
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
exports.BatteryModel = void 0;
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
exports.FilterModel = void 0;
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
exports.BikeReverseModel = void 0;
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
exports.ChainInfoModel = void 0;
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
exports.PartService = void 0;
var axios_1 = __webpack_require__(5);
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
exports.BikeService = void 0;
var axios_1 = __webpack_require__(5);
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
exports.ReverseService = void 0;
var axios_1 = __webpack_require__(5);
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
exports.InfoService = void 0;
var axios_1 = __webpack_require__(5);
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
exports.PartBrands = void 0;
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
Object.defineProperty(exports, "BikeSelect", { enumerable: true, get: function () { return bikeselect_1.BikeSelect; } });


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
exports.BikeSelect = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
exports.BikeSelectRow = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
Object.defineProperty(exports, "KitList", { enumerable: true, get: function () { return kitlist_1.KitList; } });


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
exports.KitList = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
var kit_1 = __webpack_require__(107);
var common_1 = __webpack_require__(14);
var chaininfomodal_1 = __webpack_require__(113);
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
exports.Kit = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
exports.KitBom = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
exports.Chain = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
exports.Sprocket = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
exports.ImageModal = void 0;
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
exports.ReverseModal = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
var react_paginate_1 = __webpack_require__(41);
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
exports.ChainInfoModal = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var batterycontainer_1 = __webpack_require__(115);
Object.defineProperty(exports, "BatteryContainer", { enumerable: true, get: function () { return batterycontainer_1.BatteryContainer; } });


/***/ }),
/* 115 */
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
exports.BatteryContainer = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
var batterylist_1 = __webpack_require__(116);
var common_1 = __webpack_require__(14);
var batteryinfomodal_1 = __webpack_require__(117);
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
/* 116 */
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
exports.BatteryList = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
/* 117 */
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
exports.BatteryInfoModal = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filtercontainer_1 = __webpack_require__(119);
Object.defineProperty(exports, "FilterContainer", { enumerable: true, get: function () { return filtercontainer_1.FilterContainer; } });


/***/ }),
/* 119 */
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
exports.FilterContainer = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
var filterlist_1 = __webpack_require__(120);
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
exports.FilterList = void 0;
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(1);
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
],[42]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL3BhcnRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9iaWtlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2tpdHN0YXRlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMvY2hhaW5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL3Nwcm9ja2V0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9raXRzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2JhdHRlcnlzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL2ZpbHRlcnN0b3JlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hZmFtYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFydHMudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9hcHBzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHJhbnNsYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tb2RlbHMva2l0bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iaWtlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9iYXR0ZXJ5bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9maWx0ZXJtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbW9kZWxzL2Jpa2VyZXZlcnNlbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGVscy9jaGFpbmluZm9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvcGFydHNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9yZXZlcnNlc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvaW5mb3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRsaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2tpdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXRib20udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2tpdHMvc3Byb2NrZXQudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9pbWFnZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vcmV2ZXJzZW1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9raXRzL2NoYWluaW5mb21vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnljb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2JhdHRlcmllcy9iYXR0ZXJ5bGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVybGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBSUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQztBQUpZLDhCQUFTOzs7Ozs7Ozs7Ozs7QUNIdEIsNENBQTRDO0FBQW5DLHFIQUFXO0FBQ3BCLDRDQUE0QztBQUFuQyxxSEFBVztBQUNwQiwrQ0FBa0Q7QUFBekMsOEhBQWM7Ozs7Ozs7Ozs7Ozs7QUNGdkIsMkNBQXlDO0FBQWhDLGlIQUFVOzs7Ozs7Ozs7O0FDQW5CLDRDQUEwQztBQUFqQyxrSEFBVTtBQUNuQiw4Q0FBOEM7QUFBckMsd0hBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQixvQ0FBMEM7QUFHMUMsdUNBQXNDO0FBQ3RDLHdDQUEwQztBQUUxQztJQVNJLG1CQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pDLElBQUks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LENBQ0o7d0JBQ0w7NEJBQ0ksNEJBQUksU0FBUyxFQUFDLFVBQVUsSUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFNOzRCQUN0RCwwQ0FBZSxTQUFTLEVBQUMsU0FBUyxFQUFDLGFBQWE7Z0NBQzVDLDJCQUFHLFNBQVMsRUFBQyx1QkFBdUIsRUFBQyxJQUFJLEVBQUMsR0FBRztvQ0FDekMsNkJBQ0ksR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQ2QsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQzNDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxZQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBaEMsQ0FBZ0MsRUFDaEQsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQyxHQUMxRixDQUNGLENBQ0gsQ0FDSixDQUNELENBQ0o7WUFwRFIsQ0FvRFEsQ0FDWCxDQUFDO1NBQ0w7UUFFRCxPQUFPLENBQ0g7WUFDSSxnQ0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQU07WUFDMUMsU0FBUyxDQUNSLENBQ1QsQ0FBQztJQUNOLENBQUM7SUF6TFEsVUFBVTtRQUR0QixxQkFBUTtPQUNJLFVBQVUsQ0EyTHRCO0lBQUQsaUJBQUM7Q0FBQSxDQTNMK0IsS0FBSyxDQUFDLFNBQVMsR0EyTDlDO0FBM0xZLGdDQUFVIiwiZmlsZSI6ImFmYW1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRTdG9yZSB7XHJcbiAgICBwdWJsaWMgQmlrZUlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUmV2ZXJzZWRCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdO1xyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL3BhcnRzdG9yZS50cyIsImV4cG9ydCB7IFBhcnRTZXJ2aWNlIH0gZnJvbSBcIi4vcGFydHNlcnZpY2VcIjtcclxuZXhwb3J0IHsgQmlrZVNlcnZpY2UgfSBmcm9tIFwiLi9iaWtlc2VydmljZVwiO1xyXG5leHBvcnQgeyBSZXZlcnNlU2VydmljZSB9IGZyb20gXCIuL3JldmVyc2VzZXJ2aWNlXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9pbmRleC50cyIsImV4cG9ydCB7IFBhcnRCcmFuZHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9pbmRleC50cyIsImV4cG9ydCB7IEltYWdlTW9kYWwgfSBmcm9tIFwiLi9pbWFnZW1vZGFsXCI7XHJcbmV4cG9ydCB7IFJldmVyc2VNb2RhbCB9IGZyb20gXCIuL3JldmVyc2Vtb2RhbFwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vaW5kZXgudHMiLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmltcG9ydCB7IEJpa2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmlrZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaWtlU3RvcmUge1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgYmlrZTogQmlrZU1vZGVsO1xyXG5cclxuICAgIHByaXZhdGUgcGFydGJyYW5kOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlID0gbmV3IEJpa2VNb2RlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdEJyYW5kID0gdGhpcy5zZWxlY3RCcmFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2MgPSB0aGlzLnNlbGVjdENjLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb2RlbCA9IHRoaXMuc2VsZWN0TW9kZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSB0aGlzLnNlbGVjdFllYXIuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCcmFuZHMgPSB0aGlzLnVwZGF0ZUJyYW5kcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2NzID0gdGhpcy51cGRhdGVDY3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVscyA9IHRoaXMudXBkYXRlTW9kZWxzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJpa2VzID0gdGhpcy51cGRhdGVCaWtlcy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRicmFuZCA9IHRoaXMuYXBwU3RvcmUucGFydHM7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSB0aGlzLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRCcmFuZHModGhpcy5wYXJ0YnJhbmQsIHRoaXMuYmlrZSwgdGhpcy51cGRhdGVCcmFuZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlQnJhbmRzKGJyYW5kczogc3RyaW5nW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGJyYW5kcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGJyYW5kcy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdEJyYW5kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5icmFuZHMgPSBicmFuZHM7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQnJhbmQgPSBicmFuZHNbMF07XHJcblxyXG4gICAgICAgIGlmIChicmFuZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnJhbmQodGhpcy5iaWtlLnNlbGVjdGVkQnJhbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgc2VsZWN0QnJhbmQoYnJhbmQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZEJyYW5kID0gYnJhbmQ7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5jY3MgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRDYyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5tb2RlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS55ZWFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLkJpa2VJZCA9IDA7XHJcblxyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldENDcyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLnVwZGF0ZUNjcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDY3MoY2NzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoY2NzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY2NzLnVuc2hpZnQodGhpcy5wb2x5Z2xvdC50KFwiU2VsZWN0Q2NcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLmNjcyA9IGNjcztcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRDYyA9IGNjc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGNjcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RDYyh0aGlzLmJpa2Uuc2VsZWN0ZWRDYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBzZWxlY3RDYyhjYzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkQ2MgPSBjYztcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLm1vZGVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZS5zZWxlY3RlZE1vZGVsID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaWtlLnllYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkWWVhciA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gMDtcclxuXHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0TW9kZWxzKHRoaXMucGFydGJyYW5kLCB0aGlzLmJpa2UsIHRoaXMudXBkYXRlTW9kZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZU1vZGVscyhtb2RlbHM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIG1vZGVscy51bnNoaWZ0KHRoaXMucG9seWdsb3QudChcIlNlbGVjdE1vZGVsXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmlrZS5tb2RlbHMgPSBtb2RlbHM7XHJcbiAgICAgICAgdGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwgPSBtb2RlbHNbMF07XHJcblxyXG4gICAgICAgIGlmIChtb2RlbHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZWwodGhpcy5iaWtlLnNlbGVjdGVkTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgc2VsZWN0TW9kZWwobW9kZWw6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRNb2RlbCA9IG1vZGVsO1xyXG5cclxuICAgICAgICB0aGlzLmJpa2UueWVhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAwO1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRZZWFycyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLnVwZGF0ZVllYXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZVllYXJzKHllYXJzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh5ZWFycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHllYXJzLnVuc2hpZnQodGhpcy5wb2x5Z2xvdC50KFwiU2VsZWN0WWVhclwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpa2UueWVhcnMgPSB5ZWFycztcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0geWVhcnNbMF07XHJcblxyXG4gICAgICAgIGlmICh5ZWFycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RZZWFyKHRoaXMuYmlrZS5zZWxlY3RlZFllYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgc2VsZWN0WWVhcih5ZWFyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpa2Uuc2VsZWN0ZWRZZWFyID0geWVhcjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5CaWtlSWQgPSAwO1xyXG5cclxuICAgICAgICBCaWtlU2VydmljZS5HZXRCaWtlcyh0aGlzLnBhcnRicmFuZCwgdGhpcy5iaWtlLCB0aGlzLmxhbmd1YWdlLCB0aGlzLnVwZGF0ZUJpa2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJpa2VzKGJpa2VzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuQmlrZUlkID0gKGJpa2VzLmxlbmd0aCA+IDApID8gYmlrZXNbMF0gOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWtlU3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvYmlrZXN0b3JlLnRzIiwiZXhwb3J0IHsgS2l0TW9kZWwgfSBmcm9tIFwiLi9raXRtb2RlbFwiO1xyXG5leHBvcnQgeyBEZWZhdWx0S2l0U3RhdGUsIEtpdFN0YXRlIH0gZnJvbSBcIi4va2l0c3RhdGVcIjtcclxuZXhwb3J0IHsgQ2hhaW5Nb2RlbCB9IGZyb20gXCIuL2NoYWlubW9kZWxcIjtcclxuZXhwb3J0IHsgU3Byb2NrZXRNb2RlbCB9IGZyb20gXCIuL3Nwcm9ja2V0bW9kZWxcIjtcclxuZXhwb3J0IHsgQmlrZU1vZGVsIH0gZnJvbSBcIi4vYmlrZW1vZGVsXCI7XHJcbmV4cG9ydCB7IEJhdHRlcnlNb2RlbCB9IGZyb20gXCIuL2JhdHRlcnltb2RlbFwiO1xyXG5leHBvcnQgeyBGaWx0ZXJNb2RlbCB9IGZyb20gXCIuL2ZpbHRlcm1vZGVsXCI7XHJcbmV4cG9ydCB7IEJpa2VSZXZlcnNlTW9kZWwgfSBmcm9tIFwiLi9iaWtlcmV2ZXJzZW1vZGVsXCI7XHJcbmV4cG9ydCB7IENoYWluSW5mb01vZGVsIH0gZnJvbSBcIi4vY2hhaW5pbmZvbW9kZWxcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9pbmRleC50cyIsImltcG9ydCB7IENoYWluTW9kZWwsIERlZmF1bHRDaGFpbiB9IGZyb20gXCIuL2NoYWlubW9kZWxcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFNwcm9ja2V0LCBTcHJvY2tldE1vZGVsIH0gZnJvbSBcIi4vc3Byb2NrZXRtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHRLaXRTdGF0ZTogS2l0U3RhdGUgPSB7XHJcbiAgICBDdXJyZW50Q2hhaW5zOiBbRGVmYXVsdENoYWluXSxcclxuICAgIEN1cnJlbnRDaGFpbkxlbmd0aDogMCxcclxuICAgIFNlbGVjdGVkQ2hhaW46IERlZmF1bHRDaGFpbixcclxuICAgIFNlbGVjdGVkRnJvbnRTcHJvY2tldDogRGVmYXVsdFNwcm9ja2V0LFxyXG4gICAgU2VsZWN0ZWRSZWFyU3Byb2NrZXQ6IERlZmF1bHRTcHJvY2tldCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaXRTdGF0ZSB7XHJcbiAgICBwdWJsaWMgQ3VycmVudENoYWluczogQ2hhaW5Nb2RlbFtdO1xyXG4gICAgcHVibGljIEN1cnJlbnRDaGFpbkxlbmd0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFNlbGVjdGVkQ2hhaW46IENoYWluTW9kZWw7XHJcbiAgICBwdWJsaWMgU2VsZWN0ZWRGcm9udFNwcm9ja2V0OiBTcHJvY2tldE1vZGVsO1xyXG4gICAgcHVibGljIFNlbGVjdGVkUmVhclNwcm9ja2V0OiBTcHJvY2tldE1vZGVsO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMva2l0c3RhdGUudHMiLCJleHBvcnQgY29uc3QgRGVmYXVsdENoYWluOiBDaGFpbk1vZGVsID0ge1xyXG4gICAgQ2hhaW5UeXBlOiBcIlwiLFxyXG4gICAgQ2hhaW5Db2xvcjogXCJcIixcclxuICAgIENoYWluQmFzZU5hbWU6IFwiXCIsXHJcbiAgICBDaGFpbk9yZGVyOiAwLFxyXG4gICAgSXNTdGFuZGFyZDogMCxcclxuICAgIExlbmd0aDogMCxcclxuICAgIEZ1bGxOYW1lOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYWluTW9kZWwge1xyXG4gICAgcHVibGljIENoYWluVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYWluQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFpbkJhc2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2hhaW5PcmRlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIElzU3RhbmRhcmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBMZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBGdWxsTmFtZTogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvY2hhaW5tb2RlbC50cyIsImV4cG9ydCBjb25zdCBEZWZhdWx0U3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWwgPSB7XHJcbiAgICBTcHJvY2tldE5hbWU6IFwiXCIsXHJcbiAgICBQYXJ0SWQ6IDAsXHJcbiAgICBTaWRlOiBcIlwiLFxyXG4gICAgQmFzZTogXCJcIixcclxuICAgIFRlZXRoOiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcm9ja2V0TW9kZWwge1xyXG4gICAgcHVibGljIFNwcm9ja2V0TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFBhcnRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIFNpZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBCYXNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVGVldGg6IG51bWJlcjtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL3Nwcm9ja2V0bW9kZWwudHMiLCJpbXBvcnQgeyBhY3Rpb24sIGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBDaGFpbk1vZGVsLCBLaXRNb2RlbCwgS2l0U3RhdGUsIFNwcm9ja2V0TW9kZWwsIENoYWluSW5mb01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuaW1wb3J0IHsgUGFydFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgSW5mb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaW5mb3NlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaXRTdG9yZSBleHRlbmRzIFBhcnRTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuXHJcbiAgICAvLyBUaGUga2l0cyBtYW5hZ2VkIGJ5IHRoaXMgc3RvcmVcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMga2l0czogS2l0TW9kZWxbXTtcclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgYSBcInBpY3R1cmVcIiBvZiBhIHNwcm9ja2V0XHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFNwcm9ja2V0SW1hZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgU3Byb2NrZXRJbWFnZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIFNwcm9ja2V0SW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgSGlkZVNwcm9ja2V0SW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5TcHJvY2tldEltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIFNob3dTcHJvY2tldEltYWdlKHNwcm9ja2V0OiBTcHJvY2tldE1vZGVsLCB1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZVRpdGxlID0gc3Byb2NrZXQuU3Byb2NrZXROYW1lO1xyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZVVybCA9IHVybDtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBhbiBpbWFnZSBvZiB0aGUgY2hhaW5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbWFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBDaGFpbkltYWdlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBIaWRlQ2hhaW5JbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgU2hvd0NoYWluSW1hZ2UoY2hhaW46IENoYWluTW9kZWwsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlVGl0bGUgPSBjaGFpbi5GdWxsTmFtZTtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5DaGFpbkltYWdlTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBIG1vZGFsIHRvIGRpc3BsYXkgY2hhaW4gdGVjaG5pY2FsIGluZm9ybWF0aW9uICBcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbmZvTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgQ2hhaW5JbmZvOiBDaGFpbkluZm9Nb2RlbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwdWJsaWMgSGlkZUNoYWluSW5mbygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dDaGFpbkluZm8oY2hhaW46IENoYWluTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBJbmZvU2VydmljZS5HZXRDaGFpbkluZm8oY2hhaW4uRnVsbE5hbWUsIHRoaXMuYXBwU3RvcmUubGFuZ3VhZ2UsIHRoaXMubG9hZENoYWluSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGJpa2UgZm9yIHdoaWNoIGtpdHMgYXJlIHNob3duXHJcbiAgICBwcml2YXRlIGJpa2VJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTdG9yZTogQXBwU3RvcmUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmtpdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IDA7XHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IHRoaXMuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHRoaXMuU3Byb2NrZXRJbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlNwcm9ja2V0SW1hZ2VVcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbWFnZVRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNoYWluSW1hZ2VVcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5DaGFpbkluZm8gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW5DaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYWluQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcHJvY2tldENoYW5nZSA9IHRoaXMuaGFuZGxlU3Byb2NrZXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEluaXRpYWxLaXRTdGF0ZSA9IHRoaXMuc2V0SW5pdGlhbEtpdFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGFpbkxlbmd0aHMgPSB0aGlzLnVwZGF0ZUNoYWluTGVuZ3Rocy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlS2l0cyA9IHRoaXMudXBkYXRlS2l0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDaGFpbiA9IHRoaXMudXBkYXRlU2VsZWN0ZWRDaGFpbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubG9hZENoYWluSW5mbyA9IHRoaXMubG9hZENoYWluSW5mby5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkhpZGVDaGFpbkluZm8gPSB0aGlzLkhpZGVDaGFpbkluZm8uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgaGFzS2l0cygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5raXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtpdHMubGVuZ3RoICE9PSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBCaWtlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaWtlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBCaWtlSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nZXRLaXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHVibGljIGhhbmRsZVNwcm9ja2V0Q2hhbmdlKGtpdDogS2l0TW9kZWwsIHNpZGU6IHN0cmluZywgc3Byb2NrZXQ6IFNwcm9ja2V0TW9kZWwpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qga2l0U3RhdGUgPSBraXQuQ3VycmVudFN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgZnJvbnQgPSBraXRTdGF0ZS5TZWxlY3RlZEZyb250U3Byb2NrZXQ7XHJcbiAgICAgICAgbGV0IHJlYXIgPSBraXRTdGF0ZS5TZWxlY3RlZFJlYXJTcHJvY2tldDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJvbnREZWZhdWx0ID0ga2l0LkZyb250RGVmYXVsdFRlZXRoO1xyXG4gICAgICAgIGNvbnN0IHJlYXJEZWZhdWx0ID0ga2l0LlJlYXJEZWZhdWx0VGVldGg7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENoYWluTGVuZ3RoID0ga2l0LkNoYWluTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGFpbkxlbmd0aCA9IGtpdFN0YXRlLkN1cnJlbnRDaGFpbkxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHNpZGUgPT09IFwiZnJvbnRcIikge1xyXG4gICAgICAgICAgICBmcm9udCA9IHNwcm9ja2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlYXIgPSBzcHJvY2tldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgbGlua3MgdG8gYWRkL3N1YnRyYWN0IGZyb20gdGhlIGRlZmF1bHQgY2hhaW4gbGVuZ3RoXHJcbiAgICAgICAgICAgYmFzZWQgb24gdGhlIG51bWJlciBvZiB0ZWV0aCBvZiB0aGUgc2VsZWN0ZWQgZnJvbnQgYW5kIHJlYXIgc3Byb2NrZXRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGxldCBleHRyYUxpbmtzID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgdGVldGhEaWZmZXJlbmNlID0gcmVhci5UZWV0aCAtIGZyb250RGVmYXVsdCArIGZyb250LlRlZXRoIC0gcmVhckRlZmF1bHQ7XHJcblxyXG4gICAgICAgIGlmICh0ZWV0aERpZmZlcmVuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGV4dHJhTGlua3MgPSAoTWF0aC5mbG9vcigodGVldGhEaWZmZXJlbmNlIC0gMSkgLyAzKSArIDEpICogMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRlZXRoRGlmZmVyZW5jZSA8IDApIHtcclxuICAgICAgICAgICAgZXh0cmFMaW5rcyA9IE1hdGguY2VpbCgodGVldGhEaWZmZXJlbmNlICsgMSkgLyAzKSAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3Q2hhaW5zID0ga2l0U3RhdGUuQ3VycmVudENoYWlucztcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWRDaGFpbiA9IGtpdFN0YXRlLlNlbGVjdGVkQ2hhaW47XHJcbiAgICAgICAgY29uc3QgbmV3Q2hhaW5MZW5ndGggPSBkZWZhdWx0Q2hhaW5MZW5ndGggKyBleHRyYUxpbmtzO1xyXG5cclxuICAgICAgICAvKiBVcGRhdGUgdGhlIGxlbmd0aCBvZiBhbGwgY2hhaW5zIGlmIHJlcXVpcmVkICovXHJcbiAgICAgICAgaWYgKG5ld0NoYWluTGVuZ3RoICE9PSBjdXJyZW50Q2hhaW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW5zID0gdGhpcy51cGRhdGVDaGFpbkxlbmd0aHMobmV3Q2hhaW5zLCBuZXdDaGFpbkxlbmd0aCk7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkQ2hhaW4gPSB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2hhaW4obmV3Q2hhaW5zLCBuZXdTZWxlY3RlZENoYWluLCBuZXdDaGFpbkxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBVcGRhdGUgdGhlIGtpdCAqL1xyXG4gICAgICAgIGtpdFN0YXRlLkN1cnJlbnRDaGFpbnMgPSBuZXdDaGFpbnM7XHJcbiAgICAgICAga2l0U3RhdGUuQ3VycmVudENoYWluTGVuZ3RoID0gbmV3Q2hhaW5MZW5ndGg7XHJcbiAgICAgICAga2l0U3RhdGUuU2VsZWN0ZWRDaGFpbiA9IG5ld1NlbGVjdGVkQ2hhaW47XHJcbiAgICAgICAga2l0U3RhdGUuU2VsZWN0ZWRGcm9udFNwcm9ja2V0ID0gZnJvbnQ7XHJcbiAgICAgICAga2l0U3RhdGUuU2VsZWN0ZWRSZWFyU3Byb2NrZXQgPSByZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBoYW5kbGVDaGFpbkNoYW5nZShraXQ6IEtpdE1vZGVsLCBjaGFpbjogQ2hhaW5Nb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIGtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRDaGFpbiA9IGNoYWluO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgZ2V0S2l0cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iaWtlSWQgIT09IDApIHtcclxuICAgICAgICAgICAgUGFydFNlcnZpY2UuR2V0S2l0cyh0aGlzLmFwcFN0b3JlLnBhcnRzLCB0aGlzLmJpa2VJZCwgdGhpcy5hcHBTdG9yZS5sYW5ndWFnZSwgdGhpcy51cGRhdGVLaXRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUtpdHMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUtpdHMobmV3S2l0czogS2l0TW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEtpdFN0YXRlKG5ld0tpdHMpO1xyXG4gICAgICAgIHRoaXMua2l0cyA9IG5ld0tpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsS2l0U3RhdGUoa2l0czogS2l0TW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIGtpdHMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZTogS2l0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBDdXJyZW50Q2hhaW5MZW5ndGg6IGsuQ2hhaW5MZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBDdXJyZW50Q2hhaW5zOiBrLkNoYWlucyxcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkQ2hhaW46IGsuQ2hhaW5zLmZpbmQoKGM6IENoYWluTW9kZWwpID0+IGMuRnVsbE5hbWUgPT09IGsuQ2hhaW4pIHx8IGsuQ2hhaW5zWzBdLFxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRGcm9udFNwcm9ja2V0OiBrLkZyb250U3Byb2NrZXRzLmZpbmQoKHM6IFNwcm9ja2V0TW9kZWwpID0+IHMuU3Byb2NrZXROYW1lID09PSBrLkZyb250U3Byb2NrZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgay5Gcm9udFNwcm9ja2V0c1swXSxcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkUmVhclNwcm9ja2V0OiBrLlJlYXJTcHJvY2tldHMuZmluZCgoczogU3Byb2NrZXRNb2RlbCkgPT4gcy5TcHJvY2tldE5hbWUgPT09IGsuUmVhclNwcm9ja2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGsuUmVhclNwcm9ja2V0c1swXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgay5DdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgbGVuZ3RoIG9mIGFsbCBjaGFpbnMgYW5kIHJldHVybiB0aGUgbmV3IGxpc3Qgb2YgY2hhaW5zXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Q2hhaW5MZW5ndGggLSBUaGUgbmV3IGxlbmd0aFxyXG4gICAgICovXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoYWluTGVuZ3RocyhjaGFpbnM6IENoYWluTW9kZWxbXSwgbmV3Q2hhaW5MZW5ndGg6IG51bWJlcik6IENoYWluTW9kZWxbXSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hhaW5zID0gY2hhaW5zO1xyXG5cclxuICAgICAgICBuZXdDaGFpbnMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICBjLkxlbmd0aCA9IG5ld0NoYWluTGVuZ3RoLFxyXG4gICAgICAgICAgICBjLkZ1bGxOYW1lID0gYy5DaGFpbkJhc2VOYW1lICsgXCIgXCIgKyBuZXdDaGFpbkxlbmd0aC50b0ZpeGVkKDApICsgXCJMXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdDaGFpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGxlbmd0aCBvZiB0aGUgc2VsZWN0ZWQgY2hhaW4gYW5kIHJldHVybiB0aGUgbmV3IGNoYWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Q2hhaW5MZW5ndGggLSBUaGUgbmV3IGxlbmd0aFxyXG4gICAgICovXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdGVkQ2hhaW4oY2hhaW5zOiBDaGFpbk1vZGVsW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFpbjogQ2hhaW5Nb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGFpbkxlbmd0aDogbnVtYmVyKTogQ2hhaW5Nb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIGNoYWlucy5maW5kKChjKSA9PiBjLkNoYWluQmFzZU5hbWUgPT09IHNlbGVjdGVkQ2hhaW4uQ2hhaW5CYXNlTmFtZSkgfHwgY2hhaW5zWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHB1YmxpYyBsb2FkQ2hhaW5JbmZvKGluZm86IENoYWluSW5mb01vZGVsKSB7XHJcbiAgICAgICAgaWYgKGluZm8gJiYgaW5mby5QaXRjaE1tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhaW5JbmZvID0gaW5mbztcclxuICAgICAgICAgICAgdGhpcy5DaGFpbkluZm9Nb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9raXRzdG9yZS50cyIsImltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gXCIuL2FwcHN0b3JlXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuL3BhcnRzdG9yZVwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5TW9kZWwsIEJpa2VSZXZlcnNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFBhcnRTZXJ2aWNlLCBSZXZlcnNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhdHRlcnlTdG9yZSBleHRlbmRzIFBhcnRTdG9yZSB7XHJcblxyXG4gICAgcHVibGljIHBvbHlnbG90OiBQb2x5Z2xvdDtcclxuXHJcbiAgICAvLyBUaGUgbGlzdCBvZiBiYXR0ZXJpZXMgbWFuYWdlZCBieSB0aGlzIHN0b3JlXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIGJhdHRlcmllczogQmF0dGVyeU1vZGVsW107XHJcblxyXG4gICAgLy8gQSBtb2RhbCB0byBkaXNwbGF5IGEgcGhvdG8gb2YgYSBzcGVjaWZpYyBiYXR0ZXJ5XHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlJbWFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW1hZ2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgSGlkZUJhdHRlcnlJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VUaXRsZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dCYXR0ZXJ5SW1hZ2UoYmF0dGVyeTogQmF0dGVyeU1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VVcmwgPSBiYXR0ZXJ5LlBob3RvO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUltYWdlVGl0bGUgPSBiYXR0ZXJ5LlBhcnQ7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBleHRyYSB0ZWNobmljYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGEgc3BlY2lmaWMgYmF0dGVyeVxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBCYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlJbmZvOiBCYXR0ZXJ5TW9kZWw7XHJcblxyXG4gICAgcHVibGljIEhpZGVCYXR0ZXJ5SW5mbygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUluZm9Nb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0JhdHRlcnlJbmZvKGJhdHRlcnk6IEJhdHRlcnlNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUluZm8gPSBiYXR0ZXJ5O1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeUluZm9Nb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEEgbW9kYWwgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYmlrZXMgaW4gd2hpY2ggYSBzcGVjaWZpYyBiYXR0ZXJ5IHdvdWxkIGFsc28gZml0XHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlSZXZlcnNlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgUmV2ZXJzZWRCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdO1xyXG5cclxuICAgIHB1YmxpYyBIaWRlUmV2ZXJzZWRCaWtlcygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuQmF0dGVyeVJldmVyc2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93UmV2ZXJzZWRCaWtlcyhiYXR0ZXJ5OiBCYXR0ZXJ5TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlVGl0bGUgPSBiYXR0ZXJ5LlBhcnQ7XHJcbiAgICAgICAgUmV2ZXJzZVNlcnZpY2UuR2V0QmlrZXMoYmF0dGVyeS5QYXJ0SWQsIHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzKTsgICAgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZVJldmVyc2VCaWtlcyhuZXdCaWtlczogQmlrZVJldmVyc2VNb2RlbFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gbmV3QmlrZXM7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhpcyBzdG9yZSBjb250YWlucyBiYXR0ZXJpZXNcclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBoYXNCYXR0ZXJpZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmF0dGVyaWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhdHRlcmllcy5sZW5ndGggIT09IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIG1vdG9yYmlrZSBpZCBmb3Igd2hpY2ggdGhpcyBzdG9yZSBtYW5hZ2VzIGJhdHRlcmllc1xyXG4gICAgcHJpdmF0ZSBiaWtlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgQmlrZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmlrZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQmlrZUlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJpa2VJZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2V0QmF0dGVyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVxdWVzdCBhIG5ldyBsaXN0IG9mIGJhdHRlcmllc1xyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSBnZXRCYXR0ZXJpZXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmlrZUlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIFBhcnRTZXJ2aWNlLkdldEJhdHRlcmllcyh0aGlzLmFwcFN0b3JlLnBhcnRzLCB0aGlzLmJpa2VJZCwgdGhpcy5hcHBTdG9yZS5sYW5ndWFnZSwgdGhpcy51cGRhdGVCYXR0ZXJpZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGVyaWVzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvY2VzcyB0aGUgcmV0cmlldmVkIGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAgICBAYWN0aW9uXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJhdHRlcmllcyhuZXdCYXR0ZXJpZXM6IEJhdHRlcnlNb2RlbFtdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGJhdHRlcnkgb2YgbmV3QmF0dGVyaWVzKSB7XHJcbiAgICAgICAgICAgIGJhdHRlcnkuTGF5b3V0RHJhd2luZyA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL2JhdHRlcmllcy9sYXlvdXQvXCIgKyBiYXR0ZXJ5LkxheW91dERyYXdpbmc7XHJcbiAgICAgICAgICAgIGJhdHRlcnkuVGVybWluYWxUb3AgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvdGVybWluYWwvdFwiICsgYmF0dGVyeS5UZXJtaW5hbFR5cGUgKyBcInQucG5nXCI7XHJcbiAgICAgICAgICAgIGJhdHRlcnkuVGVybWluYWxGcm9udCA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL2JhdHRlcmllcy90ZXJtaW5hbC90XCIgKyBiYXR0ZXJ5LlRlcm1pbmFsVHlwZSArIFwiZi5wbmdcIjtcclxuICAgICAgICAgICAgYmF0dGVyeS5UZXJtaW5hbFNpZGUgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9iYXR0ZXJpZXMvdGVybWluYWwvdFwiICsgYmF0dGVyeS5UZXJtaW5hbFR5cGUgKyBcInMucG5nXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhdHRlcmllcyA9IG5ld0JhdHRlcmllcztcclxuICAgIH0gICBcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgc3RvcmVcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTdG9yZTogQXBwU3RvcmUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmJhdHRlcmllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gMDtcclxuICAgICAgICB0aGlzLnBvbHlnbG90ID0gdGhpcy5hcHBTdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5SW1hZ2VUaXRsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuQmF0dGVyeUluZm9Nb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJhdHRlcnlJbmZvID0gbmV3IEJhdHRlcnlNb2RlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5CYXR0ZXJ5UmV2ZXJzZVRpdGxlID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXR0ZXJpZXMgPSB0aGlzLnVwZGF0ZUJhdHRlcmllcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzID0gdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9iYXR0ZXJ5c3RvcmUudHMiLCJpbXBvcnQgeyBhY3Rpb24sIGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0ICogYXMgUG9seWdsb3QgZnJvbSBcIm5vZGUtcG9seWdsb3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tIFwiLi9hcHBzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyTW9kZWwsIEJpa2VSZXZlcnNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFBhcnRTZXJ2aWNlLCBSZXZlcnNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclN0b3JlIGV4dGVuZHMgUGFydFN0b3JlIHtcclxuXHJcbiAgICBwdWJsaWMgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgZmlsdGVyczogRmlsdGVyTW9kZWxbXTtcclxuXHJcbiAgICAvKiBJbWFnZSBtb2RhbCAqL1xyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJJbWFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJJbWFnZU1vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIEhpZGVGaWx0ZXJJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1zaG93aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93RmlsdGVySW1hZ2UoZmlsdGVyOiBGaWx0ZXJNb2RlbCwgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBmaWx0ZXIuUGFydDtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIERyYXdpbmcgbW9kYWwgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlckRyYXdpbmdVcmw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgSGlkZUZpbHRlckRyYXdpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93RmlsdGVyRHJhd2luZyhmaWx0ZXI6IEZpbHRlck1vZGVsLCB1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VUaXRsZSA9IGZpbHRlci5QYXJ0O1xyXG4gICAgICAgIHRoaXMuRmlsdGVyRHJhd2luZ1VybCA9IHVybDtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gICAgfSBcclxuXHJcbiAgICAvKiBSZXZlcnNlIGFwcGxpY2F0aW9ucyAqL1xyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBGaWx0ZXJSZXZlcnNlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIEZpbHRlclJldmVyc2VNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIHB1YmxpYyBSZXZlcnNlZEJpa2VzOiBCaWtlUmV2ZXJzZU1vZGVsW107XHJcblxyXG4gICAgcHVibGljIEhpZGVSZXZlcnNlZEJpa2VzKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLXNob3dpbmdcIik7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlVGl0bGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93UmV2ZXJzZWRCaWtlcyhmaWx0ZXI6IEZpbHRlck1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5SZXZlcnNlZEJpa2VzID0gW107XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJSZXZlcnNlVGl0bGUgPSBmaWx0ZXIuUGFydDtcclxuICAgICAgICBSZXZlcnNlU2VydmljZS5HZXRCaWtlcyhmaWx0ZXIuUGFydElkLCB0aGlzLnVwZGF0ZVJldmVyc2VCaWtlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXZlcnNlQmlrZXMobmV3QmlrZXM6IEJpa2VSZXZlcnNlTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmV2ZXJzZWRCaWtlcyA9IG5ld0Jpa2VzO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyUmV2ZXJzZU1vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaWtlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSAwO1xyXG4gICAgICAgIHRoaXMucG9seWdsb3QgPSB0aGlzLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuRmlsdGVySW1hZ2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZpbHRlckltYWdlVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZpbHRlckRyYXdpbmdVcmwgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJldmVyc2VkQmlrZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkZpbHRlclJldmVyc2VUaXRsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVycyA9IHRoaXMudXBkYXRlRmlsdGVycy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmV2ZXJzZUJpa2VzID0gdGhpcy51cGRhdGVSZXZlcnNlQmlrZXMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIHB1YmxpYyBnZXQgaGFzRmlsdGVycygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMubGVuZ3RoICE9PSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgcHVibGljIGdldCBCaWtlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaWtlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBCaWtlSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmlrZUlkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nZXRGaWx0ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgcHJpdmF0ZSBnZXRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJpa2VJZCAhPT0gMCkge1xyXG4gICAgICAgICAgICBQYXJ0U2VydmljZS5HZXRGaWx0ZXJzKHRoaXMuYXBwU3RvcmUucGFydHMsIHRoaXMuYmlrZUlkLCB0aGlzLmFwcFN0b3JlLmxhbmd1YWdlLCB0aGlzLnVwZGF0ZUZpbHRlcnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVycyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBhY3Rpb25cclxuICAgIHByaXZhdGUgdXBkYXRlRmlsdGVycyhuZXdGaWx0ZXJzOiBGaWx0ZXJNb2RlbFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gbmV3RmlsdGVycztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9maWx0ZXJzdG9yZS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIi4vcGFydHNcIjtcclxuaW1wb3J0IHsgUGFydEJyYW5kcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQXBwKCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhY3QtYXBwXCIpO1xyXG5cclxuICAgIGlmIChyb290KSB7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2U6IHN0cmluZyA9IHJvb3QuZGF0YXNldC5sYW5ndWFnZSB8fCBcImVuXCI7XHJcbiAgICAgICAgbGV0IHBhcnRzOiBudW1iZXIgfCB1bmRlZmluZWQgPSBOdW1iZXIocm9vdC5kYXRhc2V0LnBhcnRzKTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJ0cykge1xyXG4gICAgICAgICAgICBjb25zdCBicmFuZHMgPSByb290LmRhdGFzZXQucGFydHM7XHJcbiAgICAgICAgICAgIGlmIChicmFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kQXJyYXkgPSBicmFuZHMucmVwbGFjZShcIiBcIixcIlwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGJyYW5kc1RvUGFydHMoYnJhbmRBcnJheSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICAgICAgPFBhcnRzIGxhbmd1YWdlPXtsYW5ndWFnZX0gcGFydHM9e3BhcnRzfT48L1BhcnRzPiwgcm9vdCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBicmFuZHNUb1BhcnRzKGJyYW5kczogc3RyaW5nW10pOiBudW1iZXIge1xyXG5cclxuICAgIGxldCBwYXJ0czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGJyYW5kIG9mIGJyYW5kcykge1xyXG4gICAgICAgIHBhcnRzICs9IFBhcnRCcmFuZHNbYnJhbmRdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnRzO1xyXG59XHJcblxyXG5yZW5kZXJBcHAoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FmYW1hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwU3RvcmUsIEJhdHRlcnlTdG9yZSwgRmlsdGVyU3RvcmUsIEtpdFN0b3JlIH0gZnJvbSBcIi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEJpa2VTZWxlY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jpa2VzXCI7XHJcbmltcG9ydCB7IEtpdExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL2tpdHNcIjtcclxuaW1wb3J0IHsgQmF0dGVyeUNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmF0dGVyaWVzXCI7XHJcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgeyBQYXJ0QnJhbmRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgSVBhcnRzUHJvcHMge1xyXG4gICAgcGFydHM6IG51bWJlcjtcclxuICAgIGxhbmd1YWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgUGFydHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVBhcnRzUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yZTogQXBwU3RvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQYXJ0c1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RvcmUgPSBuZXcgQXBwU3RvcmUodGhpcy5wcm9wcy5wYXJ0cywgdGhpcy5wcm9wcy5sYW5ndWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZFBhcnRzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3Qgc3RvcmU9e3RoaXMuc3RvcmUuYmlrZVN0b3JlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhcnRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5JbnZhbGlkIHBhcnQgY2F0ZWdvcmllczwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZFBhcnRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZCA9XHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuQUZBTSArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuREMgK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLlRocmVlZCArXHJcbiAgICAgICAgICAgIFBhcnRCcmFuZHMuTml0cm8gK1xyXG4gICAgICAgICAgICBQYXJ0QnJhbmRzLlNoaWRvICtcclxuICAgICAgICAgICAgUGFydEJyYW5kcy5Jc29uO1xyXG5cclxuICAgICAgICByZXR1cm4gKCh0aGlzLnByb3BzLnBhcnRzICYgc3VwcG9ydGVkKSAhPT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJQYXJ0cygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yZS5wYXJ0U3RvcmUgaW5zdGFuY2VvZiBLaXRTdG9yZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxLaXRMaXN0IHN0b3JlPXt0aGlzLnN0b3JlLnBhcnRTdG9yZX0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0b3JlLnBhcnRTdG9yZSBpbnN0YW5jZW9mIEJhdHRlcnlTdG9yZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxCYXR0ZXJ5Q29udGFpbmVyIHN0b3JlPXt0aGlzLnN0b3JlLnBhcnRTdG9yZX0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0b3JlLnBhcnRTdG9yZSBpbnN0YW5jZW9mIEZpbHRlclN0b3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEZpbHRlckNvbnRhaW5lciBzdG9yZT17dGhpcy5zdG9yZS5wYXJ0U3RvcmV9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BhcnRzLnRzeCIsImV4cG9ydCB7IEFwcFN0b3JlIH0gZnJvbSBcIi4vYXBwc3RvcmVcIjtcclxuZXhwb3J0IHsgQmlrZVN0b3JlIH0gZnJvbSBcIi4vYmlrZXN0b3JlXCI7XHJcbmV4cG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4va2l0c3RvcmVcIjtcclxuZXhwb3J0IHsgUGFydFN0b3JlIH0gZnJvbSBcIi4vcGFydHN0b3JlXCI7XHJcbmV4cG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuL2JhdHRlcnlzdG9yZVwiO1xyXG5leHBvcnQgeyBGaWx0ZXJTdG9yZSB9IGZyb20gXCIuL2ZpbHRlcnN0b3JlXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBQb2x5Z2xvdCBmcm9tIFwibm9kZS1wb2x5Z2xvdFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvbnMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zXCI7XHJcbmltcG9ydCB7IEJpa2VTdG9yZSB9IGZyb20gXCIuL2Jpa2VzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0U3RvcmUgfSBmcm9tIFwiLi9wYXJ0c3RvcmVcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi9raXRzdG9yZVwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi9iYXR0ZXJ5c3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi9maWx0ZXJzdG9yZVwiO1xyXG5pbXBvcnQgeyBQYXJ0QnJhbmRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFN0b3JlIHtcclxuXHJcbiAgICBwdWJsaWMgcG9seWdsb3Q6IFBvbHlnbG90O1xyXG4gICAgcHVibGljIGJpa2VTdG9yZTogQmlrZVN0b3JlO1xyXG4gICAgcHVibGljIHBhcnRTdG9yZTogUGFydFN0b3JlO1xyXG5cclxuICAgIHByaXZhdGUgYmlrZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcnRzOiBudW1iZXIgPSAxLCBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIikge1xyXG5cclxuICAgICAgICAvLyBDb25maWd1cmUgcG9seWdsb3RcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25UYWJsZSA9IFRyYW5zbGF0aW9uc1tsYW5ndWFnZV07XHJcblxyXG4gICAgICAgIGlmICghdHJhbnNsYXRpb25UYWJsZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblRhYmxlID0gVHJhbnNsYXRpb25zLmVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb2x5Z2xvdCA9IG5ldyBQb2x5Z2xvdCh7XHJcbiAgICAgICAgICAgIGxvY2FsZTogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgIHBocmFzZXM6IHRyYW5zbGF0aW9uVGFibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmlrZSBzdG9yZVxyXG4gICAgICAgIHRoaXMuYmlrZVN0b3JlID0gbmV3IEJpa2VTdG9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwYXJ0cyBzdG9yZVxyXG4gICAgICAgIGlmICgoKHBhcnRzICYgUGFydEJyYW5kcy5BRkFNKSAhPT0gMCkgfHxcclxuICAgICAgICAgICAgKChwYXJ0cyAmIFBhcnRCcmFuZHMuREMpICE9PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHBhcnRzICYgUGFydEJyYW5kcy5UaHJlZWQpICE9PSAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBLaXRTdG9yZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKChwYXJ0cyAmIFBhcnRCcmFuZHMuU2hpZG8pICE9PSAwKSB8fCAoKHBhcnRzICYgUGFydEJyYW5kcy5OaXRybykgIT09IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydFN0b3JlID0gbmV3IEJhdHRlcnlTdG9yZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHBhcnRzICYgUGFydEJyYW5kcy5Jc29uKSAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRTdG9yZSA9IG5ldyBGaWx0ZXJTdG9yZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydFN0b3JlID0gbmV3IFBhcnRTdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEJpa2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpa2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEJpa2VJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWtlSWQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFydFN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydFN0b3JlLkJpa2VJZCA9IHRoaXMuYmlrZUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvYXBwc3RvcmUudHMiLCJleHBvcnQgeyBUcmFuc2xhdGlvbnMgfSBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RyYW5zbGF0aW9ucy9pbmRleC50cyIsImV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICBlbjoge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiU2VsZWN0IGEgbW90b3JiaWtlXCIsXHJcbiAgICAgICAgQnJhbmQ6IFwiQnJhbmRcIixcclxuICAgICAgICBDYzogXCJDY1wiLFxyXG4gICAgICAgIE1vZGVsOiBcIk1vZGVsXCIsXHJcbiAgICAgICAgWWVhcjogXCJZZWFyXCIsXHJcbiAgICAgICAgU2VsZWN0QnJhbmQ6IFwiPFBsZWFzZSBzZWxlY3QgYSBicmFuZD5cIixcclxuICAgICAgICBTZWxlY3RDYzogXCI8UGxlYXNlIHNlbGVjdCBhIGNjPlwiLFxyXG4gICAgICAgIFNlbGVjdE1vZGVsOiBcIjxQbGVhc2Ugc2VsZWN0IGEgbW9kZWw+XCIsXHJcbiAgICAgICAgU2VsZWN0WWVhcjogXCI8UGxlYXNlIHNlbGVjdCBhIHllYXI+XCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUtpdHM6IFwiQXBwbGljYWJsZSBraXRzXCIsXHJcbiAgICAgICAgUGFydE51bWJlcjogXCJQYXJ0IG51bWJlclwiLFxyXG4gICAgICAgIEZyb250U3Byb2NrZXQ6IFwiRnJvbnQgc3Byb2NrZXRcIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiUmVhciBzcHJvY2tldFwiLFxyXG4gICAgICAgIFRlZXRoOiBcIlRlZXRoXCIsXHJcbiAgICAgICAgUGFydDogXCJQYXJ0XCIsXHJcbiAgICAgICAgQ2hhaW5zOiBcIkNoYWluc1wiLFxyXG4gICAgICAgIFR5cGU6IFwiVHlwZVwiLFxyXG4gICAgICAgIENvbG9yOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgTGVuZ3RoOiBcIkxlbmd0aFwiLFxyXG4gICAgICAgIEl0ZW06IFwiSXRlbVwiLFxyXG4gICAgICAgIEVBTjogXCJFQU4gY29kZVwiLFxyXG4gICAgICAgIFZvbHRhZ2U6IFwiVm9sdGFnZVwiLFxyXG4gICAgICAgIENhcGFjaXR5OiBcIkNhcGFjaXR5XCIsXHJcbiAgICAgICAgQ0NBOiBcIkNvbGQgY3JhbmsgY3VycmVudFwiLFxyXG4gICAgICAgIEFHTTogXCJBR01cIixcclxuICAgICAgICBHZWw6IFwiR2VsXCIsXHJcbiAgICAgICAgQWNpZDogXCJBY2lkXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiSW1hZ2VcIixcclxuICAgICAgICBBcHBsaWNhYmxlQmF0dGVyaWVzOiBcIkFwcGxpY2FibGUgYmF0dGVyaWVzXCIsXHJcbiAgICAgICAgRHJhd2luZzogXCJEcmF3aW5nXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiQXBwbGljYWJsZSBmaWx0ZXJzXCIsXHJcbiAgICAgICAgV2lkdGg6IFwiRGVwdGhcIixcclxuICAgICAgICBIZWlnaHQ6IFwiSGVpZ2h0XCIsXHJcbiAgICAgICAgRHJ5V2VpZ2h0OiBcIkRyeSB3ZWlnaHRcIixcclxuICAgICAgICBGaWxsZWRXZWlnaHQ6IFwiRmlsbGVkIHdlaWdodFwiLFxyXG4gICAgICAgIEFjaWRWb2x1bWU6IFwiQWNpZCB2b2x1bWVcIixcclxuICAgICAgICBMYXlvdXREcmF3aW5nOiBcIkxheW91dFwiLFxyXG4gICAgICAgIENoYXJnZVByZWZlcnJlZDogXCJQcmVmZXJyZWQgY2hhcmdpbmcgY3VycmVudFwiLFxyXG4gICAgICAgIENoYXJnZU1heDogXCJNYXhpbXVtIGNoYXJnaW5nIGN1cnJlbnRcIixcclxuICAgICAgICBUZXJtaW5hbFRvcDogXCJUZXJtaW5hbCB0b3Agdmlld1wiLFxyXG4gICAgICAgIFRlcm1pbmFsRnJvbnQ6IFwiVGVybWluYWwgZnJvbnQgdmlld1wiLFxyXG4gICAgICAgIFRlcm1pbmFsU2lkZTogXCJUZXJtaW5hbCBzaWRlIHZpZXdcIixcclxuICAgICAgICBMaXRlcjogXCJsaXRlclwiLFxyXG4gICAgICAgIFRlY2hub2xvZ3k6IFwiVGVjaG5vbG9neVwiLFxyXG4gICAgICAgIEZyb206IFwiRnJvbVwiLFxyXG4gICAgICAgIFRvOiBcIlRvXCIsXHJcbiAgICAgICAgUHJldmlvdXM6IFwiUHJldmlvdXNcIixcclxuICAgICAgICBOZXh0OiBcIk5leHRcIixcclxuICAgICAgICBBcHBsaWNhdGlvbkxpc3Q6IFwiQXBwbGljYXRpb24gbGlzdFwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uczogXCJBcHBsaWNhdGlvbnNcIixcclxuICAgICAgICBDaGFpblR5cGU6IFwiQ2hhaW4gdHlwZVwiLFxyXG4gICAgICAgIFBpdGNoTW06IFwiUGl0Y2hcIixcclxuICAgICAgICBQaXRjaFdpZHRoOiBcIldpZHRoXCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICBPdXRlckNvbG9yOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb246IFwiQXBwbGljYXRpb25cIixcclxuICAgICAgICBGcm9tQ0M6IFwiRnJvbSBDQ1wiLFxyXG4gICAgICAgIFRvQ0M6IFwiVG8gQ0NcIixcclxuICAgICAgICBCdXNoVHlwZTogXCJCdXNoaW5nIHR5cGVcIixcclxuICAgICAgICBQaW5UeXBlOiBcIlBpbiB0eXBlXCIsXHJcbiAgICAgICAgUm9sbGVyRGlhbWV0ZXI6IFwiUm9sbGVyIGRpYW1ldGVyXCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiUGluIGRpYW1ldGVyXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJJbnRlcm5hbCBwbGF0ZSB0aGlja25lc3NcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkV4dGVybmFsIHBsYXRlIHRoaWNrbmVzc1wiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVIZWlnaHQ6IFwiSW50ZXJuYWwgcGxhdGUgaGVpZ2h0XCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogXCJFeHRlcm5hbCBwbGF0ZSBoZWlnaHRcIixcclxuICAgICAgICBMMTogXCJMMVwiLFxyXG4gICAgICAgIEwyOiBcIkwyXCIsXHJcbiAgICAgICAgVGVuc2lsZVN0cmVuZ3RoOiBcIlRlbnNpbGUgc3RyZW5ndGhcIixcclxuICAgICAgICBXZWlnaHQ6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgU3RhbmRhcmRDbGlwOiBcIlN0YW5kYXJkIGNsaXBcIixcclxuICAgICAgICBTdGFuZGFyZFJpdmV0OiBcIlN0YW5kYXJkIHJpdmV0XCIsXHJcbiAgICAgICAgU2VhbFR5cGU6IFwiU2VhbCB0eXBlXCIsXHJcbiAgICAgICAgS2dQZXIxMDBMaW5rczogXCJrZyBwZXIgMTAwIGxpbmtzXCIsXHJcbiAgICAgICAgQ2xvc2U6IFwiQ2xvc2VcIixcclxuICAgIH0sXHJcbiAgICBubDoge1xyXG4gICAgICAgIEJpa2VTZWxlY3Q6IFwiS2llcyBlZW4gbW90b3JmaWV0c1wiLFxyXG4gICAgICAgIEJyYW5kOiBcIk1lcmtcIixcclxuICAgICAgICBDYzogXCJDY1wiLFxyXG4gICAgICAgIE1vZGVsOiBcIk1vZGVsXCIsXHJcbiAgICAgICAgWWVhcjogXCJKYWFyXCIsXHJcbiAgICAgICAgU2VsZWN0QnJhbmQ6IFwiPEtpZXMgZWVuIG1lcms+XCIsXHJcbiAgICAgICAgU2VsZWN0Q2M6IFwiPEtpZXMgZWVuIGN5bGluZGVyaW5ob3VkPlwiLFxyXG4gICAgICAgIFNlbGVjdE1vZGVsOiBcIjxLaWVzIGVlbiBtb2RlbD5cIixcclxuICAgICAgICBTZWxlY3RZZWFyOiBcIjxLaWVzIGVlbiBib3V3amFhcj5cIixcclxuICAgICAgICBBcHBsaWNhYmxlS2l0czogXCJHZXNjaGlrdGUga2l0c1wiLFxyXG4gICAgICAgIFBhcnROdW1iZXI6IFwiQXJ0aWtlbFwiLFxyXG4gICAgICAgIEZyb250U3Byb2NrZXQ6IFwiS2V0dGluZ3dpZWwgdm9vclwiLFxyXG4gICAgICAgIFJlYXJTcHJvY2tldDogXCJLZXR0aW5nd2llbCBhY2h0ZXJcIixcclxuICAgICAgICBUZWV0aDogXCJWZXJ0YW5kaW5nXCIsXHJcbiAgICAgICAgUGFydDogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgQ2hhaW5zOiBcIktldHRpbmdcIixcclxuICAgICAgICBUeXBlOiBcIlR5cGVcIixcclxuICAgICAgICBDb2xvcjogXCJLbGV1clwiLFxyXG4gICAgICAgIExlbmd0aDogXCJMZW5ndGVcIixcclxuICAgICAgICBJdGVtOiBcIkFydGlrZWxcIixcclxuICAgICAgICBFQU46IFwiRUFOIGNvZGVcIixcclxuICAgICAgICBWb2x0YWdlOiBcIlZvbHRhZ2VcIixcclxuICAgICAgICBDYXBhY2l0eTogXCJDYXBhY2l0ZWl0XCIsXHJcbiAgICAgICAgQ0NBOiBcIktvdWRzdGFydHN0cm9vbVwiLFxyXG4gICAgICAgIEFHTTogXCJBR01cIixcclxuICAgICAgICBHZWw6IFwiR2VsXCIsXHJcbiAgICAgICAgQWNpZDogXCJadXVyXCIsXHJcbiAgICAgICAgSW1hZ2U6IFwiQWZiZWVsZGluZ1wiLFxyXG4gICAgICAgIEFwcGxpY2FibGVCYXR0ZXJpZXM6IFwiR2VzY2hpa3RlIGJhdHRlcmlqZW5cIixcclxuICAgICAgICBEcmF3aW5nOiBcIlRla2VuaW5nXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUZpbHRlcnM6IFwiR2VzY2hpa3RlIGZpbHRlcnNcIixcclxuICAgICAgICBXaWR0aDogXCJEaWVwdGVcIixcclxuICAgICAgICBIZWlnaHQ6IFwiSG9vZ3RlXCIsXHJcbiAgICAgICAgRHJ5V2VpZ2h0OiBcIkRyb29nIGdld2ljaHRcIixcclxuICAgICAgICBGaWxsZWRXZWlnaHQ6IFwiR2V2dWxkIGdld2ljaHRcIixcclxuICAgICAgICBBY2lkVm9sdW1lOiBcIlp1dXIgdm9sdW1lXCIsXHJcbiAgICAgICAgTGF5b3V0RHJhd2luZzogXCJMYXlvdXRcIixcclxuICAgICAgICBDaGFyZ2VQcmVmZXJyZWQ6IFwiT3B0aW1hbGUgbGFhZHN0cm9vbVwiLFxyXG4gICAgICAgIENoYXJnZU1heDogXCJNYXhpbXVtIGxhYWRzdHJvb21cIixcclxuICAgICAgICBUZXJtaW5hbFRvcDogXCJUZXJtaW5hbCBib3ZlbmFhbnppY2h0XCIsXHJcbiAgICAgICAgVGVybWluYWxGcm9udDogXCJUZXJtaW5hbCB2b29yYWFuemljaHRcIixcclxuICAgICAgICBUZXJtaW5hbFNpZGU6IFwiVGVybWluYWwgemlqYWFuemljaHRcIixcclxuICAgICAgICBMaXRlcjogXCJsaXRlclwiLFxyXG4gICAgICAgIFRlY2hub2xvZ3k6IFwiVGVjaG5vbG9naWVcIixcclxuICAgICAgICBGcm9tOiBcIlZhblwiLFxyXG4gICAgICAgIFRvOiBcIlRvdFwiLFxyXG4gICAgICAgIFByZXZpb3VzOiBcIlZvcmlnZVwiLFxyXG4gICAgICAgIE5leHQ6IFwiVm9sZ2VuZGVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbkxpc3Q6IFwiVG9lcGFzc2luZ3NsaWpzdFwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uczogXCJUb2VwYXNzaW5nZW5cIixcclxuICAgICAgICBDaGFpblR5cGU6IFwiS2V0dGluZ3R5cGVcIixcclxuICAgICAgICBQaXRjaE1tOiBcIlN0YXBcIixcclxuICAgICAgICBQaXRjaFdpZHRoOiBcIkJyZWVkdGVcIiwgICAgICAgIFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIk9tc2NocmlqdmluZ1wiLFxyXG4gICAgICAgIE91dGVyQ29sb3I6IFwiS2xldXJcIixcclxuICAgICAgICBBcHBsaWNhdGlvbjogXCJUb2VwYXNzaW5nXCIsXHJcbiAgICAgICAgRnJvbUNDOiBcIlZhbiBDQ1wiLFxyXG4gICAgICAgIFRvQ0M6IFwiVG90IENDXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiQnVzIHR5cGVcIixcclxuICAgICAgICBQaW5UeXBlOiBcIlBpbiB0eXBlXCIsXHJcbiAgICAgICAgUm9sbGVyRGlhbWV0ZXI6IFwiUm9sIGRpYW1ldGVyXCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiUGluIGRpYW1ldGVyXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJEaWt0ZSBpbnRlcm5lIHBsYWF0XCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCJEaWt0ZSBleHRlcm5lIHBsYWF0XCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogXCJIb29ndGUgaW50ZXJuZSBwbGFhdFwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IFwiSG9vZ3RlIGV4dGVybmUgcGxhYXRcIixcclxuICAgICAgICBMMTogXCJMMVwiLFxyXG4gICAgICAgIEwyOiBcIkwyXCIsXHJcbiAgICAgICAgVGVuc2lsZVN0cmVuZ3RoOiBcIlRyZWtzdGVya3RlXCIsXHJcbiAgICAgICAgV2VpZ2h0OiBcIkdld2ljaHRcIixcclxuICAgICAgICBTdGFuZGFyZENsaXA6IFwiU3RhbmRhYXJkIHNsdWl0c2NoYWtlbFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiU3RhbmRhYXJkIHJpdmVlciBzbHVpdHNjaGFrZWxcIixcclxuICAgICAgICBTZWFsVHlwZTogXCJEaWNodGluZyB0eXBlXCIsXHJcbiAgICAgICAgS2dQZXIxMDBMaW5rczogXCJrZyBwZXIgMTAwIHNjaGFrZWxzXCIsXHJcbiAgICAgICAgQ2xvc2U6IFwiU2x1aXRlblwiLFxyXG4gICAgfSxcclxuICAgIGRlOiB7XHJcbiAgICAgICAgQmlrZVNlbGVjdDogXCJNb3RvcnJhZHdhaGxcIixcclxuICAgICAgICBCcmFuZDogXCJNYXJrZVwiLFxyXG4gICAgICAgIENjOiBcIkh1YnJhbVwiLFxyXG4gICAgICAgIE1vZGVsOiBcIk1vZGVsbFwiLFxyXG4gICAgICAgIFllYXI6IFwiSmFoclwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkaWUgTWFya2U+XCIsXHJcbiAgICAgICAgU2VsZWN0Q2M6IFwiPEJpdHRlIHfDpGhsZW4gU2llIGRlciBIdWJyYXVtPlwiLFxyXG4gICAgICAgIFNlbGVjdE1vZGVsOiBcIjxCaXR0ZSB3w6RobGVuIFNpZSBkYXMgTW9kZWxsPlwiLFxyXG4gICAgICAgIFNlbGVjdFllYXI6IFwiPEJpdHRlIHfDpGhsZW4gU2llIGRhcyBCYXVqYWhyPlwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVLaXRzOiBcIkdlZWlnbmV0ZSBLaXRzXCIsXHJcbiAgICAgICAgUGFydE51bWJlcjogXCJBcnRpa2VsXCIsXHJcbiAgICAgICAgRnJvbnRTcHJvY2tldDogXCJSaXR6ZWxcIixcclxuICAgICAgICBSZWFyU3Byb2NrZXQ6IFwiS2V0dGVucmFkXCIsXHJcbiAgICAgICAgVGVldGg6IFwiWsOkaG5lXCIsXHJcbiAgICAgICAgUGFydDogXCJUZWlsXCIsXHJcbiAgICAgICAgQ2hhaW5zOiBcIktldHRlXCIsXHJcbiAgICAgICAgVHlwZTogXCJUeXBcIixcclxuICAgICAgICBDb2xvcjogXCJGYXJiZVwiLFxyXG4gICAgICAgIExlbmd0aDogXCJMw6RuZ2VcIixcclxuICAgICAgICBJdGVtOiBcIkFydGlrZWxcIixcclxuICAgICAgICBFQU46IFwiRUFOIENvZGVcIixcclxuICAgICAgICBWb2x0YWdlOiBcIlNwYW5udW5nXCIsXHJcbiAgICAgICAgQ2FwYWNpdHk6IFwiS2FwYXppdMOkdFwiLFxyXG4gICAgICAgIENDQTogXCJLYWx0c3RhcnRzdHJvbVwiLFxyXG4gICAgICAgIEFHTTogXCJBR01cIixcclxuICAgICAgICBHZWw6IFwiR2VsXCIsXHJcbiAgICAgICAgQWNpZDogXCJTw6R1cmVcIixcclxuICAgICAgICBJbWFnZTogXCJCaWxkXCIsXHJcbiAgICAgICAgQXBwbGljYWJsZUJhdHRlcmllczogXCJHZWVpZ25ldGUgQmF0dGVyaWVuXCIsXHJcbiAgICAgICAgRHJhd2luZzogXCJaZWljaG51bmdcIixcclxuICAgICAgICBBcHBsaWNhYmxlRmlsdGVyczogXCJHZWVpZ25ldGUgRmlsdGVyXCIsXHJcbiAgICAgICAgV2lkdGg6IFwiVGllZmVcIixcclxuICAgICAgICBIZWlnaHQ6IFwiSMO2aGVcIixcclxuICAgICAgICBEcnlXZWlnaHQ6IFwiVHJvY2tlbmdld2ljaHRcIixcclxuICAgICAgICBGaWxsZWRXZWlnaHQ6IFwiR2V3aWNodCBnZWbDvGxsdFwiLFxyXG4gICAgICAgIEFjaWRWb2x1bWU6IFwiU8OkdXJldm9sdW1lblwiLFxyXG4gICAgICAgIExheW91dERyYXdpbmc6IFwiTGF5b3V0XCIsXHJcbiAgICAgICAgQ2hhcmdlUHJlZmVycmVkOiBcIkJldm9yenVndGVyIExhZGVzdHJvbVwiLFxyXG4gICAgICAgIENoYXJnZU1heDogXCJNYXhpbWFsZXIgTGFkZXN0cm9tXCIsXHJcbiAgICAgICAgVGVybWluYWxUb3A6IFwiQmF0dGVyaWVwb2wgQXVmc2ljaHRcIixcclxuICAgICAgICBUZXJtaW5hbEZyb250OiBcIkJhdHRlcmllcG9sIFZvcmRlcmFuc2ljaHRcIixcclxuICAgICAgICBUZXJtaW5hbFNpZGU6IFwiQmF0dGVyaWVwb2wgU2VpdGVuYW5zaWNodFwiLFxyXG4gICAgICAgIExpdGVyOiBcIkxpdGVyXCIsXHJcbiAgICAgICAgVGVjaG5vbG9neTogXCJUZWNobm9sb2dpZVwiLFxyXG4gICAgICAgIEZyb206IFwiVm9uXCIsXHJcbiAgICAgICAgVG86IFwiQmlzXCIsXHJcbiAgICAgICAgUHJldmlvdXM6IFwiVm9yaGVyaWdlXCIsXHJcbiAgICAgICAgTmV4dDogXCJOw6RjaHN0ZVwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uTGlzdDogXCJBbndlbmR1bmdzbGlzdGVcIixcclxuICAgICAgICBBcHBsaWNhdGlvbnM6IFwiQW53ZW5kdW5nZW5cIixcclxuICAgICAgICBDaGFpblR5cGU6IFwiS2V0dGVuIFR5cFwiLFxyXG4gICAgICAgIFBpdGNoTW06IFwiVGVpbHVuZ1wiLFxyXG4gICAgICAgIFBpdGNoV2lkdGg6IFwiQnJlaXRlXCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiVW1zY2hyZWlidW5nXCIsXHJcbiAgICAgICAgT3V0ZXJDb2xvcjogXCJGYXJiZVwiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uOiBcIkFud2VuZHVuZ1wiLFxyXG4gICAgICAgIEZyb21DQzogXCJWb24gSHVicmF1bVwiLFxyXG4gICAgICAgIFRvQ0M6IFwiQmlzIEh1YnJhdW1cIixcclxuICAgICAgICBCdXNoVHlwZTogXCJCdWNoc2UgVHlwXCIsXHJcbiAgICAgICAgUGluVHlwZTogXCJCb2x6ZW4gVHlwXCIsXHJcbiAgICAgICAgUm9sbGVyRGlhbWV0ZXI6IFwiV2FsemVuZHVyY2htZXNzZXJcIixcclxuICAgICAgICBQaW5EaWFtZXRlcjogXCJCb2x6ZW5kdXJjaG1lc3NlclwiLFxyXG4gICAgICAgIEludGVybmFsUGxhdGVUaGlja25lc3M6IFwiRGlja2UgaW50ZXJuZSBQbGF0dGVcIixcclxuICAgICAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBcIkRpY2tlIGV4dGVybmUgUGxhdHRlXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogXCJIw7ZoZSBpbnRlcm5lIFBsYXR0ZVwiLFxyXG4gICAgICAgIEV4dGVybmFsUGxhdGVIZWlnaHQ6IFwiSMO2aGUgZXh0ZXJuZSBQbGF0dGVcIixcclxuICAgICAgICBMMTogXCJMMVwiLFxyXG4gICAgICAgIEwyOiBcIkwyXCIsXHJcbiAgICAgICAgVGVuc2lsZVN0cmVuZ3RoOiBcIlp1Z2Zlc3RpZ2tlaXRcIixcclxuICAgICAgICBXZWlnaHQ6IFwiR2V3aWNodFwiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJTdGFuZGFyZCBCaW5kZWdsaWV0XCIsXHJcbiAgICAgICAgU3RhbmRhcmRSaXZldDogXCJTdGFuZGFhcmQgTmlldFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIkRpY2h0dW5nIFR5cFwiLFxyXG4gICAgICAgIEtnUGVyMTAwTGlua3M6IFwia2cgcHJvIDEwMCBHbGllZGVyXCIsXHJcbiAgICAgICAgQ2xvc2U6IFwiU2NobGllw59lblwiLFxyXG4gICAgfSxcclxuICAgIGZyOiB7XHJcbiAgICAgICAgQmlrZVNlbGVjdDogXCJDaG9pc2lzc2V6IHVuZSBtb3RvXCIsXHJcbiAgICAgICAgQnJhbmQ6IFwiTWFycXVlXCIsXHJcbiAgICAgICAgQ2M6IFwiQ3lsaW5kcsOpZVwiLFxyXG4gICAgICAgIE1vZGVsOiBcIk1vZMOobGVcIixcclxuICAgICAgICBZZWFyOiBcIkFubsOpZVwiLFxyXG4gICAgICAgIFNlbGVjdEJyYW5kOiBcIjxTLnYucC4gY2hvaXNpciB1bmUgbWFycXVlPlwiLFxyXG4gICAgICAgIFNlbGVjdENjOiBcIjxTLnYucC4gY2hvaXNpciB1bmUgY3lsaW5kcsOpZT5cIixcclxuICAgICAgICBTZWxlY3RNb2RlbDogXCI8Uy52LnAuIGNob2lzaXIgdW4gbW9kw6hsZT5cIixcclxuICAgICAgICBTZWxlY3RZZWFyOiBcIjxTLnYucC4gY2hvaXNpciB1bmUgYW5uw6llPlwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVLaXRzOiBcIktpdHMgcG9zc2libGVcIixcclxuICAgICAgICBQYXJ0TnVtYmVyOiBcIkFydGljbGVcIixcclxuICAgICAgICBGcm9udFNwcm9ja2V0OiBcIlBpZ25vblwiLFxyXG4gICAgICAgIFJlYXJTcHJvY2tldDogXCJDb3Vyb25uZVwiLFxyXG4gICAgICAgIFRlZXRoOiBcIkRlbnR1cmVcIixcclxuICAgICAgICBQYXJ0OiBcIlBpw6hjZVwiLFxyXG4gICAgICAgIENoYWluczogXCJDaGHDrm5lXCIsXHJcbiAgICAgICAgVHlwZTogXCJUeXBlXCIsXHJcbiAgICAgICAgQ29sb3I6IFwiQ291bGV1clwiLFxyXG4gICAgICAgIExlbmd0aDogXCJMb25ndWV1clwiLFxyXG4gICAgICAgIEl0ZW06IFwiQXJ0aWNsZVwiLFxyXG4gICAgICAgIEVBTjogXCJDb2RlIEVBTlwiLFxyXG4gICAgICAgIFZvbHRhZ2U6IFwiVm9sdGFnZVwiLFxyXG4gICAgICAgIENhcGFjaXR5OiBcIkNhcGFjaXTDqVwiLFxyXG4gICAgICAgIENDQTogXCJDb3VyYW50IGRlIGTDqW1hcnJhZ2Ugw6AgZnJvaWRcIixcclxuICAgICAgICBBR006IFwiQUdNXCIsXHJcbiAgICAgICAgR2VsOiBcIkdlbFwiLFxyXG4gICAgICAgIEFjaWQ6IFwiQWNpZGVcIixcclxuICAgICAgICBJbWFnZTogXCJJbWFnZVwiLFxyXG4gICAgICAgIEFwcGxpY2FibGVCYXR0ZXJpZXM6IFwiQmF0dGVyaWVzIHBvc3NpYmxlc1wiLFxyXG4gICAgICAgIERyYXdpbmc6IFwiVmlnbmV0dGVcIixcclxuICAgICAgICBBcHBsaWNhYmxlRmlsdGVyczogXCJGaWx0cmVzIHBvc3NpYmxlc1wiLFxyXG4gICAgICAgIFdpZHRoOiBcIlByb2ZvbmRldXJcIixcclxuICAgICAgICBIZWlnaHQ6IFwiSGF1dGV1clwiLFxyXG4gICAgICAgIERyeVdlaWdodDogXCJQb2lkcyDDoSBzZWNcIixcclxuICAgICAgICBGaWxsZWRXZWlnaHQ6IFwiUG9pZHMgcmVtcGxpXCIsXHJcbiAgICAgICAgQWNpZFZvbHVtZTogXCJWb2x1bWUgZCdhY2lkZVwiLFxyXG4gICAgICAgIExheW91dERyYXdpbmc6IFwiRGlzcG9zaXRpb25cIixcclxuICAgICAgICBDaGFyZ2VQcmVmZXJyZWQ6IFwiQ291cmFudCBkZSBjaGFyZ2Ugbm9ybWFsXCIsXHJcbiAgICAgICAgQ2hhcmdlTWF4OiBcIkNvdXJhbnQgZGUgY2hhcmdlIG1heGltdW1cIixcclxuICAgICAgICBUZXJtaW5hbFRvcDogXCJCb3JuZSwgdnVlIGRlIGRlc3N1c1wiLFxyXG4gICAgICAgIFRlcm1pbmFsRnJvbnQ6IFwiQm9ybmUsIHZ1ZSBkZSBmYWNlXCIsXHJcbiAgICAgICAgVGVybWluYWxTaWRlOiBcIkJvcm5lLCB2dWUgZGUgY8O0dMOpXCIsXHJcbiAgICAgICAgTGl0ZXI6IFwibGl0cmVcIixcclxuICAgICAgICBUZWNobm9sb2d5OiBcIlRlY2hub2xvZ2llXCIsXHJcbiAgICAgICAgRnJvbTogXCJEZVwiLFxyXG4gICAgICAgIFRvOiBcIsOAXCIsXHJcbiAgICAgICAgUHJldmlvdXM6IFwiUHLDqWPDqWRlbnRcIixcclxuICAgICAgICBOZXh0OiBcIlN1aXZhbnRcIixcclxuICAgICAgICBBcHBsaWNhdGlvbkxpc3Q6IFwiTGlzdGUgZGVzIGFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uczogXCJBcHBsaWNhdGlvbnNcIixcclxuICAgICAgICBDaGFpblR5cGU6IFwiVHlwZSBkZSBjaGHDrm5lXCIsXHJcbiAgICAgICAgUGl0Y2hNbTogXCJQYXNcIixcclxuICAgICAgICBQaXRjaFdpZHRoOiBcIkxhcmdldXJcIixcclxuICAgICAgICBEZXNjcmlwdGlvbjogXCJEw6lub21pbmF0aW9uXCIsXHJcbiAgICAgICAgT3V0ZXJDb2xvcjogXCJDb3VsZXVyXCIsXHJcbiAgICAgICAgQXBwbGljYXRpb246IFwiQXBwbGljYXRpb25cIixcclxuICAgICAgICBGcm9tQ0M6IFwiRGUgY3lsaW5kcsOpZVwiLFxyXG4gICAgICAgIFRvQ0M6IFwiQSBjeWxpbmRyw6llXCIsXHJcbiAgICAgICAgQnVzaFR5cGU6IFwiVHlwZSBkZSBsYSBiYWd1ZVwiLFxyXG4gICAgICAgIFBpblR5cGU6IFwiVHlwZSBkZSBsYSBnb3VwaWxsZVwiLFxyXG4gICAgICAgIFJvbGxlckRpYW1ldGVyOiBcIkRpYW3DqHRyZSByb3VsZWF1XCIsXHJcbiAgICAgICAgUGluRGlhbWV0ZXI6IFwiRGlhbcOodHJlIGRlIGxhIGdvdXBpbGxlXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCLDiXBhaXNzZXVyIGRlIGxhIHBsYXF1ZSBpbnRlcm5lXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzczogXCLDiXBhaXNzZXVyIGRlIGxhIHBsYXF1ZSBleHRlcm5lXCIsXHJcbiAgICAgICAgSW50ZXJuYWxQbGF0ZUhlaWdodDogXCJIYXV0ZXVyIGRlIGxhIHBsYXF1ZSBpbnRlcm5lXCIsXHJcbiAgICAgICAgRXh0ZXJuYWxQbGF0ZUhlaWdodDogXCJIYXV0ZXVyIGRlIGxhIHBsYXF1ZSBleHRlcm5lXCIsXHJcbiAgICAgICAgTDE6IFwiTDFcIixcclxuICAgICAgICBMMjogXCJMMlwiLFxyXG4gICAgICAgIFRlbnNpbGVTdHJlbmd0aDogXCJSw6lzaXN0YW5jZSDDoCBsYSB0cmFjdGlvblwiLFxyXG4gICAgICAgIFdlaWdodDogXCJQb2lkc1wiLFxyXG4gICAgICAgIFN0YW5kYXJkQ2xpcDogXCJBdHRhY2hlIHJhcGlkZSBzdGFuZGFyZFwiLFxyXG4gICAgICAgIFN0YW5kYXJkUml2ZXQ6IFwiTWFpbGxvbiBzdGFuZGFyZFwiLFxyXG4gICAgICAgIFNlYWxUeXBlOiBcIlR5cGUgZGUgam9pbnRcIixcclxuICAgICAgICBLZ1BlcjEwMExpbmtzOiBcImtnIHBhciAxMDAgbWFpbGxvbnNcIixcclxuICAgICAgICBDbG9zZTogXCJGZXJtZXJcIixcclxuICAgIH0sXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zLnRzIiwiaW1wb3J0IHsgRGVmYXVsdEtpdFN0YXRlLCBLaXRTdGF0ZSB9IGZyb20gXCIuL2tpdHN0YXRlXCI7XHJcbmltcG9ydCB7IENoYWluTW9kZWwgfSBmcm9tIFwiLi9jaGFpbm1vZGVsXCI7XHJcbmltcG9ydCB7IFNwcm9ja2V0TW9kZWwgfSBmcm9tIFwiLi9zcHJvY2tldG1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2l0TW9kZWwge1xyXG4gICAgcHVibGljIEtpdElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgS2l0QnJhbmQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIEtpdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBGcm9udFNwcm9ja2V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgRnJvbnREZWZhdWx0VGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZWFyU3Byb2NrZXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBSZWFyRGVmYXVsdFRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hhaW46IHN0cmluZztcclxuICAgIHB1YmxpYyAgQ2hhaW5MZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGFpbkJhc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaXRjaDogbnVtYmVyO1xyXG4gICAgcHVibGljIE1hdGVyaWFsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgS2l0Ym94OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSXNTdGFuZGFyZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb250TWluaW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRnJvbnRNYXhpbXVtVGVldGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBSZWFyTWluaW11bVRlZXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUmVhck1heGltdW1UZWV0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb250U3Byb2NrZXRzOiBTcHJvY2tldE1vZGVsW107XHJcbiAgICBwdWJsaWMgUmVhclNwcm9ja2V0czogU3Byb2NrZXRNb2RlbFtdO1xyXG4gICAgcHVibGljIENoYWluczogQ2hhaW5Nb2RlbFtdO1xyXG4gICAgcHVibGljIExhbmd1YWdlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgS2l0VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbnRTdGF0ZTogS2l0U3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5DdXJyZW50U3RhdGUgPSBEZWZhdWx0S2l0U3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9raXRtb2RlbC50cyIsImltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpa2VNb2RlbCB7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIGJyYW5kczogc3RyaW5nW107XHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgc2VsZWN0ZWRCcmFuZDogc3RyaW5nO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBjY3M6IHN0cmluZ1tdO1xyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHNlbGVjdGVkQ2M6IHN0cmluZztcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBwdWJsaWMgbW9kZWxzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZE1vZGVsOiBzdHJpbmc7XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIHllYXJzOiBzdHJpbmdbXTtcclxuICAgIEBvYnNlcnZhYmxlIHB1YmxpYyBzZWxlY3RlZFllYXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIHRoaXMuYnJhbmRzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRCcmFuZCA9IFwiXCI7XHJcblxyXG4gICAgICB0aGlzLmNjcyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2MgPSBcIlwiO1xyXG5cclxuICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gXCJcIjtcclxuXHJcbiAgICAgIHRoaXMueWVhcnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFllYXIgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlrZU1vZGVsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2Jpa2Vtb2RlbC50cyIsImV4cG9ydCBjbGFzcyBCYXR0ZXJ5TW9kZWwge1xyXG4gICAgcHVibGljIFBhcnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQYXJ0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBFQU46IHN0cmluZztcclxuICAgIHB1YmxpYyBCYXR0ZXJ5VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFZvbHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDYXBhY2l0eTogbnVtYmVyO1xyXG4gICAgcHVibGljIENDQTogbnVtYmVyO1xyXG4gICAgcHVibGljIEFHTTogc3RyaW5nO1xyXG4gICAgcHVibGljIEdlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIEFjaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaG90bzogc3RyaW5nO1xyXG4gICAgcHVibGljIExlbmd0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRHJ5V2VpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRmlsbGVkV2VpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQWNpZFZvbHVtZTogbnVtYmVyO1xyXG4gICAgcHVibGljIFRlcm1pbmFsVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlcm1pbmFsRHJhd2luZzogc3RyaW5nO1xyXG4gICAgcHVibGljIExheW91dERyYXdpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBDaGFyZ2VQcmVmZXJyZWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGFyZ2VNYXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBUZXJtaW5hbFRvcDogc3RyaW5nO1xyXG4gICAgcHVibGljIFRlcm1pbmFsRnJvbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBUZXJtaW5hbFNpZGU6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2JhdHRlcnltb2RlbC50cyIsImV4cG9ydCBjbGFzcyBGaWx0ZXJNb2RlbCB7XHJcbiAgICBwdWJsaWMgUGFydDogc3RyaW5nO1xyXG4gICAgcHVibGljIFBhcnRJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIEVBTjogc3RyaW5nO1xyXG4gICAgcHVibGljIFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBQaG90bzogc3RyaW5nO1xyXG4gICAgcHVibGljIERyYXdpbmc6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvbW9kZWxzL2ZpbHRlcm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIEJpa2VSZXZlcnNlTW9kZWwge1xyXG4gICAgcHVibGljIEJyYW5kOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2M6IG51bWJlcjtcclxuICAgIHB1YmxpYyBNb2RlbDogbnVtYmVyO1xyXG4gICAgcHVibGljIEZyb206IG51bWJlcjtcclxuICAgIHB1YmxpYyBUbzogbnVtYmVyO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L21vZGVscy9iaWtlcmV2ZXJzZW1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIENoYWluSW5mb01vZGVsIHtcclxuICAgIENoYWluTmFtZTogc3RyaW5nO1xyXG4gICAgUGl0Y2g6IG51bWJlcjtcclxuICAgIEJyYW5kOiBzdHJpbmc7XHJcbiAgICBCYXNlTmFtZTogc3RyaW5nO1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIENvbG9yTmFtZTogc3RyaW5nO1xyXG4gICAgT3V0ZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgSW5uZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgQXBwbGljYXRpb246IG51bWJlcjtcclxuICAgIFVzZU1vcGVkOiBudW1iZXI7XHJcbiAgICBVc2VDcm9zczogbnVtYmVyO1xyXG4gICAgVXNlT2Zmcm9hZDogbnVtYmVyO1xyXG4gICAgVXNlU3RyZWV0OiBudW1iZXI7XHJcbiAgICBVc2VTcG9ydDogbnVtYmVyO1xyXG4gICAgVXNlUmFjaW5nOiBudW1iZXI7XHJcbiAgICBGcm9tQ2M6IG51bWJlcjtcclxuICAgIFRvQ2M6IG51bWJlcjtcclxuICAgIFBpdGNoTW06IG51bWJlcjtcclxuICAgIFBpdGNoV2lkdGg6IG51bWJlcjtcclxuICAgIEJ1c2g6IHN0cmluZztcclxuICAgIFBpbjogc3RyaW5nO1xyXG4gICAgUm9sbGVyRGlhbWV0ZXI6IG51bWJlcjtcclxuICAgIFBpbkRpYW1ldGVyOiBudW1iZXI7XHJcbiAgICBJbnRlcm5hbFBsYXRlVGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBFeHRlcm5hbFBsYXRlVGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBJbnRlcm5hbFBsYXRlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBFeHRlcm5hbFBsYXRlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBMMTogbnVtYmVyO1xyXG4gICAgTDI6IG51bWJlcjtcclxuICAgIFRlbnNpbGVTdHJlbmd0aDogbnVtYmVyO1xyXG4gICAgV2VpZ2h0OiBudW1iZXI7XHJcbiAgICBTdGFuZGFyZENsaXA6IHN0cmluZztcclxuICAgIFNsaXBGaXRDbGlwOiBzdHJpbmc7XHJcbiAgICBQcmVzc0ZpdENsaXA6IHN0cmluZztcclxuICAgIFN0YW5kYXJkUml2ZXQ6IHN0cmluZztcclxuICAgIFNvZnRSaXZldDogc3RyaW5nO1xyXG4gICAgU2VhbFR5cGU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9tb2RlbHMvY2hhaW5pbmZvbW9kZWwudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlNb2RlbCwgRmlsdGVyTW9kZWwsIEtpdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEtpdHMocGFydEJyYW5kczogbnVtYmVyLCBiaWtlSWQ6IG51bWJlciwgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKHBhcnRzOiBLaXRNb2RlbFtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgUGFydFNlcnZpY2UuR2V0PEtpdE1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRCcmFuZHN9L2Jpa2UvJHtiaWtlSWR9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QmF0dGVyaWVzKHBhcnRCcmFuZHM6IG51bWJlciwgYmlrZUlkOiBudW1iZXIsIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCIsIGRvbmU6IChwYXJ0czogQmF0dGVyeU1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBQYXJ0U2VydmljZS5HZXQ8QmF0dGVyeU1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL2FwcGxpY2F0aW9ucy8ke3BhcnRCcmFuZHN9L2Jpa2UvJHtiaWtlSWR9LyR7bGFuZ3VhZ2V9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0RmlsdGVycyhwYXJ0QnJhbmRzOiBudW1iZXIsIGJpa2VJZDogbnVtYmVyLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAocGFydHM6IEZpbHRlck1vZGVsW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBQYXJ0U2VydmljZS5HZXQ8RmlsdGVyTW9kZWxbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydEJyYW5kc30vYmlrZS8ke2Jpa2VJZH0vJHtsYW5ndWFnZX1gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9wYXJ0c2VydmljZS50cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQmlrZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpa2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyYW5kcyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6IChicmFuZHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c31gLCBkb25lLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRDQ3MocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBkb25lOiAoY2NzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9P2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldE1vZGVscyhwYXJ0czogbnVtYmVyLCBiaWtlOiBCaWtlTW9kZWwsIGRvbmU6IChtb2RlbHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PHN0cmluZ1tdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9JmNjPSR7YmlrZS5zZWxlY3RlZENjfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFllYXJzKHBhcnRzOiBudW1iZXIsIGJpa2U6IEJpa2VNb2RlbCwgZG9uZTogKHllYXJzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEJpa2VTZXJ2aWNlLkdldDxzdHJpbmdbXT4oYGh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS9hcGkvYXBwbGljYXRpb25zLyR7cGFydHN9P2JyYW5kPSR7YmlrZS5zZWxlY3RlZEJyYW5kfSZjYz0ke2Jpa2Uuc2VsZWN0ZWRDY30mbW9kZWw9JHtiaWtlLnNlbGVjdGVkTW9kZWx9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QmlrZXMocGFydHM6IG51bWJlciwgYmlrZTogQmlrZU1vZGVsLCBsYW5ndWFnZTogc3RyaW5nID0gXCJlblwiLCBkb25lOiAoYmlrZXM6IG51bWJlcltdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgQmlrZVNlcnZpY2UuR2V0PG51bWJlcltdPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9hcHBsaWNhdGlvbnMvJHtwYXJ0c30vYmlrZXM/YnJhbmQ9JHtiaWtlLnNlbGVjdGVkQnJhbmR9JmNjPSR7YmlrZS5zZWxlY3RlZENjfSZtb2RlbD0ke2Jpa2Uuc2VsZWN0ZWRNb2RlbH0meWVhcj0ke2Jpa2Uuc2VsZWN0ZWRZZWFyfSZsYW5ndWFnZT0ke2xhbmd1YWdlfWAsIGRvbmUsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXQ8VD4oVVJMOiBzdHJpbmcsIGRvbmU6ICh2YWx1ZXM6IFQpID0+IHZvaWQsIGVycm9yVmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkb25lKGVycm9yVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlcnZpY2VzL2Jpa2VzZXJ2aWNlLnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCaWtlUmV2ZXJzZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJldmVyc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJpa2VzKHBhcnRpZDogbnVtYmVyLCBkb25lOiAocGFydHM6IEJpa2VSZXZlcnNlTW9kZWxbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIFJldmVyc2VTZXJ2aWNlLkdldDxCaWtlUmV2ZXJzZU1vZGVsW10+KGBodHRwczovL3NlcnZpY2UuYWZhbS5jb20vYXBpL3JldmVyc2UvJHtwYXJ0aWR9YCwgZG9uZSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldDxUPihVUkw6IHN0cmluZywgZG9uZTogKHZhbHVlczogVCkgPT4gdm9pZCwgZXJyb3JWYWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRvbmUoZXJyb3JWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2VydmljZXMvcmV2ZXJzZXNlcnZpY2UudHMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENoYWluSW5mb01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZm9TZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENoYWluSW5mbyhjaGFpbk5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZyA9IFwiZW5cIiwgZG9uZTogKGluZm86IENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgSW5mb1NlcnZpY2UuR2V0PENoYWluSW5mb01vZGVsIHwgdW5kZWZpbmVkPihgaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL2FwaS9pbmZvL2NoYWluLyR7Y2hhaW5OYW1lfS8ke2xhbmd1YWdlfWAsIGRvbmUsIHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0PFQ+KFVSTDogc3RyaW5nLCBkb25lOiAodmFsdWVzOiBUKSA9PiB2b2lkLCBlcnJvclZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChVUkwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZG9uZShlcnJvclZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZXJ2aWNlcy9pbmZvc2VydmljZS50cyIsImV4cG9ydCBlbnVtIFBhcnRCcmFuZHMge1xyXG4gICAgQUZBTSA9IDEsXHJcbiAgICBEQyA9IDIsXHJcbiAgICBUaHJlZWQgPSA0LFxyXG4gICAgU2hpZG8gPSA4LFxyXG4gICAgTml0cm8gPSAxNixcclxuICAgIFl1YXNhID0gMzIsXHJcbiAgICBJc29uID0gNjQsXHJcbiAgICBFQkNCcmFrZXMgPSAxMjgsXHJcbiAgICBFQkNDbHV0Y2hlcyA9IDI1NixcclxuICAgIE5HSyA9IDUxMixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29uc3RhbnRzL2NvbnN0YW50cy50cyIsImV4cG9ydCB7IEJpa2VTZWxlY3QgfSBmcm9tIFwiLi9iaWtlc2VsZWN0XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2Jpa2VzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQmlrZVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBCaWtlU2VsZWN0Um93IH0gZnJvbSBcIi4vYmlrZXNlbGVjdF9yb3dcIjtcclxuXHJcbmludGVyZmFjZSBJQmlrZVNlbGVjdFByb3BzIHtcclxuICAgIHN0b3JlOiBCaWtlU3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSBzcGVjaWZpYyBtb3RvcmJpa2VcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmlrZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmlrZVNlbGVjdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmlrZVNlbGVjdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGJpa2UgPSBzdG9yZS5iaWtlO1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLmFwcFN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2x5LnQoXCJCaWtlU2VsZWN0XCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLmJyYW5kc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3BvbHkudChcIkJyYW5kXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YmlrZS5zZWxlY3RlZEJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdEJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpa2VTZWxlY3RSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Jpa2UuY2NzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiQ2NcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtiaWtlLnNlbGVjdGVkQ2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbE9wdGlvbkNoYW5nZT17c3RvcmUuc2VsZWN0Q2N9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmlrZVNlbGVjdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YmlrZS5tb2RlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwb2x5LnQoXCJNb2RlbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3B0aW9uQ2hhbmdlPXtzdG9yZS5zZWxlY3RNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaWtlU2VsZWN0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtiaWtlLnllYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9seS50KFwiWWVhclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2Jpa2Uuc2VsZWN0ZWRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxPcHRpb25DaGFuZ2U9e3N0b3JlLnNlbGVjdFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iaWtlcy9iaWtlc2VsZWN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCaWtlU2VsZWN0Um93UHJvcGVydGllcyB7XHJcbiAgICBpdGVtczogc3RyaW5nW107XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcclxuICAgIHNpZ25hbE9wdGlvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSBzcGVjaWZpYyBtb3RvcmJpa2VcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmlrZVNlbGVjdFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmlrZVNlbGVjdFJvd1Byb3BlcnRpZXMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCaWtlU2VsZWN0Um93UHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNwYW4gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYikgPT4gPG9wdGlvbiBrZXk9e2J9IHZhbHVlPXtifT57Yn08L29wdGlvbj4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdENsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNwYW5DbGFzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdENsYXNzID0gXCJiaWtlLXNlbGVjdC1jZWxsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHNwYW5DbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Q2xhc3MgPSBcImJpa2Utc2VsZWN0LWNlbGxcIjtcclxuICAgICAgICAgICAgICAgIHNwYW5DbGFzcyA9IFwiYmlrZS1zZWxlY3QtY2VsbC1ub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCA9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e3NwYW5DbGFzc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtc1swXX1cclxuICAgICAgICAgICAgPC9zcGFuPjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2Utc2VsZWN0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1zZWxlY3QtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXNlbGVjdC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcGFufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaWduYWxPcHRpb25DaGFuZ2UoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmlrZXMvYmlrZXNlbGVjdF9yb3cudHN4IiwiZXhwb3J0IHsgS2l0TGlzdCB9IGZyb20gXCIuL2tpdGxpc3RcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBLaXQgfSBmcm9tIFwiLi9raXRcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2hhaW5JbmZvTW9kYWwgfSBmcm9tIFwiLi9jaGFpbmluZm9tb2RhbFwiO1xyXG5cclxuaW50ZXJmYWNlIElLaXRMaXN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGtpdHNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgS2l0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJS2l0TGlzdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJS2l0TGlzdFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICAgICBcclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5oYXNLaXRzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQga2l0Q29tcG9uZW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpdHMgPSB0aGlzLnByb3BzLnN0b3JlLmtpdHM7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2l0cykge1xyXG4gICAgICAgICAgICAgICAga2l0Q29tcG9uZW50cyA9IGtpdHMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImtpdF9cIiArIHMuUGFydElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQXBwbGljYWJsZUtpdHNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7a2l0Q29tcG9uZW50c31cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17dGhpcy5wcm9wcy5zdG9yZS5TcHJvY2tldEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLlNwcm9ja2V0SW1hZ2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyB0aGlzLnByb3BzLnN0b3JlLkhpZGVTcHJvY2tldEltYWdlKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJTcHJvY2tldEltYWdlTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiU3Byb2NrZXRNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuU3Byb2NrZXRJbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ9e3RoaXMucHJvcHMuc3RvcmUucG9seWdsb3QudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlQ2hhaW5JbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiQ2hhaW5JbWFnZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkNoYWluTW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkNoYWluSW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpbkluZm9Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbz17dGhpcy5wcm9wcy5zdG9yZS5DaGFpbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuQ2hhaW5JbmZvTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuc3RvcmUuSGlkZUNoYWluSW5mb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGFpbkluZm9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMva2l0bGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgS2l0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEtpdEJvbSB9IGZyb20gXCIuL2tpdGJvbVwiO1xyXG5cclxuaW50ZXJmYWNlIElLaXRQcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBraXRcclxuICogSXQgZGlzcGxheXMgdGhlIGtpdCB0eXBlLCBraXQgbmFtZSBhbmQga2l0IGNvbXBvbmVudHMgKHRocm91Z2ggYSBLaXRCb20gY2hpbGQgY29tcG9uZW50KVxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBLaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUtpdFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJS2l0UHJvcHMsIHt9KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGtpdCA9IHRoaXMucHJvcHMua2l0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10aXRsZVwiPntraXQuS2l0VHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXRhYmxlLWtpdHBhcnRcIj57dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiUGFydE51bWJlclwiKX06IDxzcGFuIGNsYXNzTmFtZT1cImtpdC10YWJsZS1raXRuYW1lXCI+e2tpdC5LaXROYW1lfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdC10YWJsZS1kZXNjcmlwdGlvblwiPntraXQuRGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEtpdEJvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wia2l0Ym9tX1wiICsga2l0LlBhcnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2l0PXtraXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9raXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDaGFpbiB9IGZyb20gXCIuL2NoYWluXCI7XHJcbmltcG9ydCB7IFNwcm9ja2V0IH0gZnJvbSBcIi4vc3Byb2NrZXRcIjtcclxuXHJcbmludGVyZmFjZSBJS2l0Qm9tUHJvcHMge1xyXG4gICAga2l0OiBLaXRNb2RlbDtcclxuICAgIHN0b3JlOiBLaXRTdG9yZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElLaXRCb21MaXN0U3RhdGUge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIHRoZSBwYXJ0cyB0aGF0IG1ha2UgdXAgYSBraXQ6IGZyb250IHNwcm9ja2V0LCByZWFyIHNwcm9ja2V0IGFuZCBjaGFpblxyXG4gKi9cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBLaXRCb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUtpdEJvbVByb3BzLCBJS2l0Qm9tTGlzdFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElLaXRCb21Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAod2luZG93LmlubmVyV2lkdGggPCA4MDApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhcHNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogd2luZG93LmlubmVyV2lkdGggPCA4MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0LXBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiRnJvbnRTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJvY2tldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdD17dGhpcy5wcm9wcy5raXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT1cImZyb250XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiQ2hhaW5zXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiUmVhclNwcm9ja2V0XCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwicmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGVmYXVsdCgpIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXQtcGFydHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIkZyb250U3Byb2NrZXRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWhlYWRlclwiID57cG9seS50KFwiQ2hhaW5zXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1oZWFkZXJcIiA+e3BvbHkudChcIlJlYXJTcHJvY2tldFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwcm9ja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPVwiZnJvbnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0PXt0aGlzLnByb3BzLmtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Byb2NrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQ9e3RoaXMucHJvcHMua2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9XCJyZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMva2l0Ym9tLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEtpdFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlc1wiO1xyXG5pbXBvcnQgeyBDaGFpbk1vZGVsLCBLaXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBJQ2hhaW5Qcm9wcyB7XHJcbiAgICBraXQ6IEtpdE1vZGVsO1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNoYWluU3RhdGUge1xyXG4gICAgdGh1bWJuYWlsVmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IGRpc3BsYXlpbmcgdGhlIGNoYWluIHRoYXQgaXMgcGFydCBvZiBhIGtpdC5cclxuICogSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGNoYWluIHR5cGUgYW5kIGNvbG9yIHdoZXJlIHJlbGV2YW50XHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIENoYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDaGFpblByb3BzLCBJQ2hhaW5TdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQ2hhaW5Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZENoYWluID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW47XHJcbiAgICAgICAgY29uc3QgY2hhaW5zID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcbiAgICAgICAgY29uc3QgY2hhaW5UeXBlcyA9IHRoaXMuZ2V0VHlwZXMoY2hhaW5zKTtcclxuICAgICAgICBjb25zdCBjaGFpbkNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKGNoYWlucywgc2VsZWN0ZWRDaGFpbi5DaGFpblR5cGUpO1xyXG5cclxuICAgICAgICBsZXQgY2hhaW5UeXBlT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluVHlwZVNpbmdsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluVHlwZVNlbGVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjaGFpbkNvbG9yT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNoYWluQ29sb3JTaW5nbGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBjaGFpbkNvbG9yU2VsZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICBCdWlsZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgY2hhaW4gdHlwZVxyXG4gICAgICAgICAgIFVzZSBhIHNwYW4gaW5zdGVhZCBvZiBhIHNlbGVjdCBpZiB0aGVyZSBpcyBvbmx5IG9uZSBpdGVtXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAoY2hhaW5UeXBlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNoYWluVHlwZU9wdGlvbnMgPSBjaGFpblR5cGVzLm1hcCgodCkgPT4gPG9wdGlvbiBrZXk9e3R9IHZhbHVlPXt0fT57dH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICBjaGFpblR5cGVTZWxlY3QgPVxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDaGFpbi5DaGFpblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHlwZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYWluVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlID0gY2hhaW5UeXBlc1swXTtcclxuICAgICAgICAgICAgY2hhaW5UeXBlU2luZ2xlID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC12YWx1ZSBraXRwYXJ0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaW5nbGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgIEJ1aWxkIHRoZSBzZWxlY3QgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBjaGFpbiBjb2xvclxyXG4gICAgICAgICAgIFVzZSBhIHNwYW4gaW5zdGVhZCBvZiBhIHNlbGVjdCBpZiB0aGVyZSBpcyBvbmx5IG9uZSBjb2xvclxyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKGNoYWluQ29sb3JzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY2hhaW5Db2xvck9wdGlvbnMgPSBjaGFpbkNvbG9ycy5tYXAoKHQpID0+IDxvcHRpb24ga2V5PXt0fSB2YWx1ZT17dH0+e3R9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgY2hhaW5Db2xvclNlbGVjdCA9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENoYWluLkNoYWluQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29sb3JDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFpbkNvbG9yT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGUgPSBjaGFpbkNvbG9yc1swXTtcclxuICAgICAgICAgICAgY2hhaW5Db2xvclNpbmdsZSA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2luZ2xlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBcImh0dHBzOi8vc2VydmljZS5hZmFtLmNvbS93ZWJzaG9wL2ltYWdlcy9jaGFpbnMvXCIgKyBzZWxlY3RlZENoYWluLkNoYWluQmFzZU5hbWUgKyBcIi5qcGdcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlR5cGVcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluVHlwZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpblR5cGVTaW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiQ29sb3JcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluQ29sb3JTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5Db2xvclNpbmdsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJMZW5ndGhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+e3NlbGVjdGVkQ2hhaW4uTGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRwYXJ0LWNvbXBvbmVudC1jZWxsLWxhYmVsIGtpdHBhcnQtaW5saW5lXCI+e3BvbHkudChcIlBhcnRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1wYXJ0bmFtZSBraXRwYXJ0LWlubGluZVwiPntzZWxlY3RlZENoYWluLkZ1bGxOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0NoYWluSW5mbyhzZWxlY3RlZENoYWluKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fT4mIzk0MzI7PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRodW1ibmFpbChzZWxlY3RlZENoYWluLCBpbWFnZVVSTCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHJpdmF0ZSB0aHVtYm5haWwoY2hhaW46IENoYWluTW9kZWwsIGltYWdlVVJMOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aHVtYm5haWxWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtdGh1bWJuYWlsIGtpdHBhcnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhaW4tdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0NoYWluSW1hZ2UoY2hhaW4sIGltYWdlVVJMKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgcG9zc2libGUgY2hhaW4gdHlwZXMgZnJvbSB0aGUgbGlzdCBvZiBjaGFpbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRUeXBlcyhjaGFpbnM6IENoYWluTW9kZWxbXSk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgIGlmICghdHlwZXMuZmluZCgocCkgPT4gcCA9PT0gY2hhaW4uQ2hhaW5UeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goY2hhaW4uQ2hhaW5UeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgcG9zc2libGUgY2hhaW4gY29sb3JzIGZvciBhIHNwZWNpZmljIHR5cGUgb2YgY2hhaW5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHlwZSAtIFRoZSB0eXBlIHRvIGZpbHRlciBvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENvbG9ycyhjaGFpbnM6IENoYWluTW9kZWxbXSwgYXR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBhdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb2xvcnMuZmluZCgocCkgPT4gcCA9PT0gY2hhaW4uQ2hhaW5Db2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5Db2xvciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjaGFpbi5DaGFpbkNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXNlciBzZWxlY3RlZCBhIG5ldyB0eXBlIG9mIGNoYWluXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlVHlwZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSB0aGlzLnByb3BzLmtpdC5DdXJyZW50U3RhdGUuU2VsZWN0ZWRDaGFpbi5DaGFpbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2hhaW5zID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLkN1cnJlbnRDaGFpbnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdDaGFpbjogQ2hhaW5Nb2RlbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyogVHJ5IHRvIGZpbmQgYSBjaGFpbiB3aXRoIHRoZSBzZWxlY3RlZCB0eXBlIGFuZCB0aGUgY29sb3IgdGhhdCBpcyBwYXJ0IG9mIHRoZSBwcm9wcyAoaS5lLiB0aGUgZGVmYXVsdCBjb2xvcikgKi9cclxuICAgICAgICBjb25zdCB0eXBlY29sb3JjaGFpbnM6IENoYWluTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgY2hhaW4gaGFzIHRoZSByZXF1aXJlZCB0eXBlIGFuZCBjb2xvclxyXG4gICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgY2hhaW4uQ2hhaW5Db2xvciA9PT0gc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQW5kIGl0IGlzIG5vdCB5ZXQgcHJlc2VudCBpbiB0aGUgb3V0cHV0IGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR5cGVjb2xvcmNoYWlucy5maW5kKChwKSA9PiAocC5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSAmJiBwLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZW4gYWRkIGl0IHRvIHRoZSBvdXRwdXQgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0eXBlY29sb3JjaGFpbnMucHVzaChjaGFpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlY29sb3JjaGFpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdDaGFpbiA9IHR5cGVjb2xvcmNoYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIElmIG5vIGNoYWluIGNvdWxkIGJlIGZvdW5kLCBzZWxlY3QgdGhlIGZpcnN0IGNoYWluIG9mIHRoZSBzZWxlY3RlZCB0eXBlICovXHJcbiAgICAgICAgaWYgKCFuZXdDaGFpbikge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlY2hhaW5zOiBDaGFpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW4uQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVjaGFpbnMuZmluZCgocCkgPT4gcC5DaGFpblR5cGUgPT09IHNlbGVjdGVkVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWNoYWlucy5wdXNoKGNoYWluKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlY2hhaW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld0NoYWluID0gdHlwZWNoYWluc1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSWYgc3RpbGwgbm8gY2hhaW4gY291bGQgYmUgZm91bmQsIHBpY2sgdGhlIGZpcnN0IG9uZSAqL1xyXG4gICAgICAgIGlmICghbmV3Q2hhaW4pIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSBjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBTZXQgdGh1bWJuYWlsIGJhY2sgdG8gdmlzaWJsZSAqL1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBTaWduYWwgdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgY2hhaW4gd2FzIGNoYW5nZWQgKi9cclxuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhbmRsZUNoYWluQ2hhbmdlKHRoaXMucHJvcHMua2l0LCBuZXdDaGFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXNlciBzZWxlY3RlZCBhIG5ldyBjaGFpbiBjb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUNvbG9yQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gdGhpcy5wcm9wcy5raXQuQ3VycmVudFN0YXRlLlNlbGVjdGVkQ2hhaW4uQ2hhaW5UeXBlO1xyXG4gICAgICAgIGNvbnN0IGNoYWlucyA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5DdXJyZW50Q2hhaW5zO1xyXG5cclxuICAgICAgICBsZXQgbmV3Q2hhaW46IENoYWluTW9kZWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qIFRyeSB0byBmaW5kIGEgY2hhaW4gd2l0aCB0aGUgc2VsZWN0ZWQgdHlwZSBhbmQgdGhlIGNvbG9yIHRoYXQgaXMgcGFydCBvZiB0aGUgcHJvcHMgKGkuZS4gdGhlIGRlZmF1bHQgY29sb3IpICovXHJcbiAgICAgICAgY29uc3QgdHlwZWNvbG9yY2hhaW5zOiBDaGFpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBjaGFpbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYWluLkNoYWluVHlwZSA9PT0gc2VsZWN0ZWRUeXBlICYmIGNoYWluLkNoYWluQ29sb3IgPT09IHNlbGVjdGVkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdHlwZWNvbG9yY2hhaW5zLmZpbmQoKHApID0+IHAuQ2hhaW5UeXBlID09PSBzZWxlY3RlZFR5cGUgJiYgcC5DaGFpbkNvbG9yID09PSBzZWxlY3RlZENvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVjb2xvcmNoYWlucy5wdXNoKGNoYWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVjb2xvcmNoYWlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld0NoYWluID0gdHlwZWNvbG9yY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSWYgbm8gY2hhaW4gY291bGQgYmUgZm91bmQsIHBpY2sgdGhlIGZpcnN0IG9uZSAqL1xyXG4gICAgICAgIGlmICghbmV3Q2hhaW4pIHtcclxuICAgICAgICAgICAgbmV3Q2hhaW4gPSBjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBTZXQgdGh1bWJuYWlsIGJhY2sgdG8gdmlzaWJsZSAqL1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBTaWduYWwgdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgY2hhaW4gd2FzIGNoYW5nZWQgKi9cclxuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmhhbmRsZUNoYWluQ2hhbmdlKHRoaXMucHJvcHMua2l0LCBuZXdDaGFpbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2tpdHMvY2hhaW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgS2l0U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEtpdE1vZGVsLCBTcHJvY2tldE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElTcHJvY2tldFByb3BzIHtcclxuICAgIGtpdDogS2l0TW9kZWw7XHJcbiAgICBzdG9yZTogS2l0U3RvcmU7XHJcbiAgICBzaWRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU3Byb2NrZXRTdGF0ZSB7XHJcbiAgICB0aHVtYm5haWxWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgZGlzcGxheWluZyBhIHNwcm9ja2V0IHRoYXQgaXMgcGFydCBvZiBhIGtpdFxyXG4gKiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IHRoZSBudW1iZXIgb2YgdGVldGhcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgU3Byb2NrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNwcm9ja2V0UHJvcHMsIElTcHJvY2tldFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElTcHJvY2tldFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc3Byb2NrZXRzID0gbnVsbDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTcHJvY2tldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHRoaXMucHJvcHMuc3RvcmUuYXBwU3RvcmUucG9seWdsb3Q7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNpZGUgPT09IFwiZnJvbnRcIikge1xyXG4gICAgICAgICAgICBzcHJvY2tldHMgPSB0aGlzLnByb3BzLmtpdC5Gcm9udFNwcm9ja2V0cztcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcHJvY2tldCA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZEZyb250U3Byb2NrZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3Byb2NrZXRzID0gdGhpcy5wcm9wcy5raXQuUmVhclNwcm9ja2V0cztcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcHJvY2tldCA9IHRoaXMucHJvcHMua2l0LkN1cnJlbnRTdGF0ZS5TZWxlY3RlZFJlYXJTcHJvY2tldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNwcm9ja2V0T3B0aW9ucyA9IHNwcm9ja2V0cy5tYXAoKHMpID0+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17cy5QYXJ0SWR9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cy5TcHJvY2tldE5hbWV9PntzLlRlZXRofVxyXG4gICAgICAgICAgICA8L29wdGlvbj4pO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZVVSTCA9IFwiaHR0cHM6Ly9zZXJ2aWNlLmFmYW0uY29tL3dlYnNob3AvaW1hZ2VzL3Nwcm9ja2V0cy8zZC92aWduZXR0ZXMvXCIgKyBzZWxlY3RlZFNwcm9ja2V0LlNwcm9ja2V0TmFtZSArIFwiLmpwZ1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia2l0cGFydC1jb21wb25lbnQtY2VsbC1sYWJlbCBraXRwYXJ0LWlubGluZVwiPntwb2x5LnQoXCJUZWV0aFwiKX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtdmFsdWUga2l0cGFydC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkU3Byb2NrZXQuU3Byb2NrZXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT57c3Byb2NrZXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdHBhcnQtY29tcG9uZW50LWNlbGwtbGFiZWwga2l0cGFydC1pbmxpbmVcIj57cG9seS50KFwiUGFydFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC1wYXJ0bmFtZSBraXRwYXJ0LWNvbXBvbmVudC1jZWxsLXZhbHVlIGtpdHBhcnQtaW5saW5lXCI+e3NlbGVjdGVkU3Byb2NrZXQuU3Byb2NrZXROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRodW1ibmFpbChzZWxlY3RlZFNwcm9ja2V0LCBpbWFnZVVSTCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEltYWdlRXJyb3IoaXRlbTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aHVtYm5haWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRodW1ibmFpbChzcHJvY2tldDogU3Byb2NrZXRNb2RlbCwgaW1hZ2VVUkw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRodW1ibmFpbFZpc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0cGFydC10aHVtYm5haWwga2l0cGFydC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcHJvY2tldC10aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93U3Byb2NrZXRJbWFnZShzcHJvY2tldCwgaW1hZ2VVUkwpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmZvcm0gdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBzZWxlY3RlZCBhIGRpZmZlcmVudCBudW1iZXIgb2YgdGVldGggKGkuZS4gYSBkaWZmZXJlbnQgc3Byb2NrZXQpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNwcm9ja2V0TmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3Byb2NrZXRzID0gKHRoaXMucHJvcHMuc2lkZSA9PT0gXCJmcm9udFwiKSA/IHRoaXMucHJvcHMua2l0LkZyb250U3Byb2NrZXRzIDogdGhpcy5wcm9wcy5raXQuUmVhclNwcm9ja2V0cztcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNwcm9ja2V0ID0gc3Byb2NrZXRzLmZpbmQoKHM6IFNwcm9ja2V0TW9kZWwpID0+IHMuU3Byb2NrZXROYW1lID09PSBjdXJyZW50U3Byb2NrZXROYW1lKSB8fCBzcHJvY2tldHNbMF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5oYW5kbGVTcHJvY2tldENoYW5nZSh0aGlzLnByb3BzLmtpdCwgdGhpcy5wcm9wcy5zaWRlLCBzZWxlY3RlZFNwcm9ja2V0KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9raXRzL3Nwcm9ja2V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElJbWFnZU1vZGFsUHJvcHMge1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxuICAgIG9uSGlkZTogRnVuY3Rpb247XHJcbiAgICBpbWFnZVVybDogc3RyaW5nO1xyXG4gICAgbW9kYWxJZDogc3RyaW5nO1xyXG4gICAgaW1hZ2VJZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNsb3NlVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW1hZ2VNb2RhbFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLm1vZGFsSWR9IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPXt0aGlzLnByb3BzLmltYWdlSWR9IHNyYz17dGhpcy5wcm9wcy5pbWFnZVVybH0gY2xhc3NOYW1lPVwibW9kYWxfaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2xvc2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL2ltYWdlbW9kYWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCB7IFBhcnRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuXHJcbmludGVyZmFjZSBJUmV2ZXJzZU1vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IFBhcnRTdG9yZTtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZXZlcnNlTW9kYWxTdGF0ZSB7XHJcbiAgICBzZWxlY3RlZFBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJldmVyc2VNb2RhbFByb3BzLCBJUmV2ZXJzZU1vZGFsU3RhdGU+IHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2Vfc2l6ZTogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElSZXZlcnNlTW9kYWxQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUGFnZTogMCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZSA9IHRoaXMudXBkYXRlUGFnZS5iaW5kKHRoaXMpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGFnZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQYWdlOiBkYXRhLnNlbGVjdGVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICAgICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmlrZWxpc3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsQmlrZXMgPSB0aGlzLnByb3BzLnN0b3JlLlJldmVyc2VkQmlrZXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChhbGxCaWtlcy5sZW5ndGggLyB0aGlzLnBhZ2Vfc2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpa2VzVG9EaXNwbGF5ID0gYWxsQmlrZXMuc2xpY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgKiB0aGlzLnBhZ2Vfc2l6ZSwgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICsgMSkgKiB0aGlzLnBhZ2Vfc2l6ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmlrZXNUb0Rpc3BsYXkpIHtcclxuICAgICAgICAgICAgICAgIGJpa2VsaXN0ID0gYmlrZXNUb0Rpc3BsYXkubWFwKChiLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcInJldmVyc2VfXCIgKyBpfSBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1sZWZ0XCI+e2IuQnJhbmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1jZW50ZXJcIj57Yi5DY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWxlZnRcIj57Yi5Nb2RlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtY2VsbCBjZWxsLWNlbnRlclwiPntiLkZyb219PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWNlbGwgY2VsbC1jZW50ZXJcIj57Yi5Ub308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JhY2tncm91bmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiQnJhbmRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlrZS1yZXZlcnNlLWhlYWRlciBjZWxsLWNlbnRlclwiPntwb2x5LnQoXCJDY1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIk1vZGVsXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpa2UtcmV2ZXJzZS1oZWFkZXIgY2VsbC1jZW50ZXJcIj57cG9seS50KFwiRnJvbVwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWtlLXJldmVyc2UtaGVhZGVyIGNlbGwtY2VudGVyXCI+e3BvbHkudChcIlRvXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaWtlbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17cG9seS50KFwiUHJldmlvdXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e3BvbHkudChcIk5leHRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMudXBkYXRlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJwYWdpbmF0b3ItYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWZCdWlsZGVyPXsoKSA9PiB7IHJldHVybiBcIiNcIjsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvbHkudChcIkNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL3JldmVyc2Vtb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBLaXRTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQ2hhaW5JbmZvTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUNoYWluSW5mb01vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IEtpdFN0b3JlO1xyXG4gICAgaW5mbzogQ2hhaW5JbmZvTW9kZWwgfCB1bmRlZmluZWQ7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgb25IaWRlOiBGdW5jdGlvbjtcclxufVxyXG5cclxuQG9ic2VydmVyIGV4cG9ydCBjbGFzcyBDaGFpbkluZm9Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2hhaW5JbmZvTW9kYWxQcm9wcywge30+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgJiYgdGhpcy5wcm9wcy5pbmZvKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wcm9wcy5pbmZvO1xyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXNob3dpbmdcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5mby5DaGFpbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoYWluLWluZm8tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNoYWluVHlwZVwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1BpdGNoXCI+e2luZm8uUGl0Y2h9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJEZXNjcmlwdGlvblwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0Rlc2NyaXB0aW9uXCI+e2luZm8uRGVzY3JpcHRpb259PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJPdXRlckNvbG9yXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvT3V0ZXJDb2xvclwiPntpbmZvLk91dGVyQ29sb3J9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiUGl0Y2hNbVwiKX0gKFApOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaXRjaE1tXCI+e2luZm8uUGl0Y2hNbX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlBpdGNoV2lkdGhcIil9IChXKTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGl0Y2hXaWR0aFwiPntpbmZvLlBpdGNoV2lkdGh9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkJ1c2hUeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvQnVzaFwiPntpbmZvLkJ1c2h9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaW5UeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvUGluXCI+e2luZm8uUGlufTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlJvbGxlckRpYW1ldGVyXCIpfSAoUik6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1JvbGxlckRpYW1ldGVyXCI+e2luZm8uUm9sbGVyRGlhbWV0ZXJ9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJQaW5EaWFtZXRlclwiKX0gKEQpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9QaW5EaWFtZXRlclwiPntpbmZvLlBpbkRpYW1ldGVyfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiSW50ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiKX0gKFQpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9JbnRlcm5hbFBsYXRlVGhpY2tuZXNzXCI+e2luZm8uSW50ZXJuYWxQbGF0ZVRoaWNrbmVzc308L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkV4dGVybmFsUGxhdGVUaGlja25lc3NcIil9ICh0KTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvRXh0ZXJuYWxQbGF0ZVRoaWNrbmVzc1wiPntpbmZvLkV4dGVybmFsUGxhdGVUaGlja25lc3N9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJJbnRlcm5hbFBsYXRlSGVpZ2h0XCIpfSAoSCk6PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0ludGVybmFsUGxhdGVIZWlnaHRcIj57aW5mby5JbnRlcm5hbFBsYXRlSGVpZ2h0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRXh0ZXJuYWxQbGF0ZUhlaWdodFwiKX0gKGgpOjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9FeHRlcm5hbFBsYXRlSGVpZ2h0XCI+e2luZm8uRXh0ZXJuYWxQbGF0ZUhlaWdodH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5tbTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJvd1wiPjxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTDFcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9MMVwiPntpbmZvLkwxfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbFwiPm1tPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tcm93XCI+PGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJMMlwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb0wyXCI+e2luZm8uTDJ9PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsLWxhYmVsXCI+bW08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlbnNpbGVTdHJlbmd0aFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1RlbnNpbGVTdHJlbmd0aFwiPntpbmZvLlRlbnNpbGVTdHJlbmd0aH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj5kYU48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIldlaWdodFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1dlaWdodFwiPntpbmZvLldlaWdodH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj57cG9seS50KFwiS2dQZXIxMDBMaW5rc1wiKX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlN0YW5kYXJkQ2xpcFwiKX06PC9kaXY+IDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImNoYWluSW5mb1N0YW5kYXJkQ2xpcFwiPntpbmZvLlN0YW5kYXJkQ2xpcH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlN0YW5kYXJkUml2ZXRcIil9OjwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJjaGFpbkluZm9TdGFuZGFyZFJpdmV0XCI+e2luZm8uU3RhbmRhcmRSaXZldH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhaW4taW5mby1yb3dcIj48ZGl2IGNsYXNzTmFtZT1cImNoYWluLWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlNlYWxUeXBlXCIpfTo8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiY2hhaW5JbmZvU2VhbFR5cGVcIj57aW5mby5TZWFsVHlwZX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLWNlbGwtbGFiZWxcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFpbi1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYWZhbS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdGhlbWVzL25ldEFmYW0vYWZhbXBhcnRzL2NoYWluX2RpbS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9seS50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMva2l0cy9jaGFpbmluZm9tb2RhbC50c3giLCJleHBvcnQgeyBCYXR0ZXJ5Q29udGFpbmVyIH0gZnJvbSBcIi4vYmF0dGVyeWNvbnRhaW5lclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcbmltcG9ydCB7IEJhdHRlcnlMaXN0IH0gZnJvbSBcIi4vYmF0dGVyeWxpc3RcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCwgUmV2ZXJzZU1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5SW5mb01vZGFsIH0gZnJvbSBcIi4vYmF0dGVyeWluZm9tb2RhbFwiO1xyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5Q29udGFpbmVyUHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIG1hbmFnaW5nIGEgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQmF0dGVyeUNvbnRhaW5lclByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElCYXR0ZXJ5Q29udGFpbmVyUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgIFxyXG4gICAgfSAgIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUuYmF0dGVyaWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmF0dGVyeUxpc3Qgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlJbWFnZU1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUJhdHRlcnlJbWFnZSgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiQmF0dGVyeU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZD1cIkJhdHRlcnlNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuQmF0dGVyeUltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmF0dGVyeUluZm9Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW5mb01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0dGVyeT17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUJhdHRlcnlJbmZvKCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmF0dGVyeUluZm9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZXJzZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlUmV2ZXJzZWRCaWtlcygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkJhdHRlcnlSZXZlcnNlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zdG9yZS5CYXR0ZXJ5UmV2ZXJzZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1JldmVyc2VNb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9iYXR0ZXJpZXMvYmF0dGVyeWNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5U3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJhdHRlcnlMaXN0UHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTsgICAgXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQmF0dGVyeUxpc3RTdGF0ZSB7XHJcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYmF0dGVyaWVzXHJcbiAqL1xyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEJhdHRlcnlMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElCYXR0ZXJ5TGlzdFByb3BzLCBJQmF0dGVyeUxpc3RTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJQmF0dGVyeUxpc3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAod2luZG93LmlubmVyV2lkdGggPCA4MDApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyA9IHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhcHNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXNDb2xsYXBzZWQgPSAod2luZG93LmlubmVyV2lkdGggPCA4MDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZWQgIT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGlzQ29sbGFwc2VkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbWFnZUVycm9yKGl0ZW06IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgICBcclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVBhcnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdDtcclxuICAgICAgICBjb25zdCBiYXR0ZXJpZXMgPSB0aGlzLnByb3BzLnN0b3JlLmJhdHRlcmllcztcclxuXHJcbiAgICAgICAgaWYgKGJhdHRlcmllcykge1xyXG4gICAgICAgICAgICB0aGVQYXJ0cyA9IGJhdHRlcmllcy5tYXAoKHMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpLnRvU3RyaW5nKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkl0ZW1cIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlBhcnR9PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkVBTlwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5CYXR0ZXJ5VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVm9sdFwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuVm9sdH0gVjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDYXBhY2l0eVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQ2FwYWNpdHl9IEFoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNDQVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQ0NBfSBBPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFHTVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQUdNfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJHZWxcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLkdlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQWNpZFwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuQWNpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW5mb1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5mby1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pbmZvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUluZm8ocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZS1wb3B1cC1maXQtd2lkdGhcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogXCIwcHhcIiwgd2lkdGg6IFwiNGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93QmF0dGVyeUltYWdlKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlQmF0dGVyaWVzXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGFydC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJUZWNobm9sb2d5XCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJWb2x0YWdlXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJDYXBhY2l0eVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQ0NBXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJBR01cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkdlbFwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiQWNpZFwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+SW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhlUGFydHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgbGV0IHRoZVRhYmxlcyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgYmF0dGVyaWVzID0gdGhpcy5wcm9wcy5zdG9yZS5iYXR0ZXJpZXM7XHJcblxyXG4gICAgICAgIGlmIChiYXR0ZXJpZXMpIHtcclxuICAgICAgICAgICAgdGhlVGFibGVzID0gYmF0dGVyaWVzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlIGNvbGxhcHNlZFwiIGtleT17aS50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuUGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJUZWNobm9sb2d5XCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiA+e3MuQmF0dGVyeVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUudChcIlZvbHRhZ2VcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVm9sdFwiPntzLlZvbHR9IFY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQ2FwYWNpdHlcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ2FwYWNpdHlcIj57cy5DYXBhY2l0eX0gQWg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZS50KFwiQ0NBXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNDQVwiPntzLkNDQX0gQTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJBR01cIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQUdNXCI+e3MuQUdNfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJHZWxcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiR2VsXCI+e3MuR2VsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJBY2lkXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFjaWRcIj57cy5BY2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5JbmZvPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW5mb1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9pbmZvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW5mbyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHJhbnNsYXRlLnQoXCJJbWFnZVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UtcG9wdXAtZml0LXdpZHRoXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dCYXR0ZXJ5SW1hZ2Uocyk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUJhdHRlcmllc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAge3RoZVRhYmxlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlsaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJhdHRlcnlTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgQmF0dGVyeU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElCYXR0ZXJ5SW5mb01vZGFsUHJvcHMge1xyXG4gICAgc3RvcmU6IEJhdHRlcnlTdG9yZTtcclxuICAgIGJhdHRlcnk6IEJhdHRlcnlNb2RlbDtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5Ab2JzZXJ2ZXIgZXhwb3J0IGNsYXNzIEJhdHRlcnlJbmZvTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJhdHRlcnlJbmZvTW9kYWxQcm9wcywge30+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRlcnkgPSB0aGlzLnByb3BzLmJhdHRlcnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvbHkgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2hvd2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXR0ZXJ5LlBhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYmF0dGVyeS1pbmZvLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVm9sdGFnZVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvVm9sdFwiPntiYXR0ZXJ5LlZvbHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPlY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNhcGFjaXR5XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DYXBhY2l0eVwiPntiYXR0ZXJ5LkNhcGFjaXR5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiQ0NBXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9DQ0FcIj57YmF0dGVyeS5DQ0F9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkFHTVwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQUdNXCI+e2JhdHRlcnkuQUdNfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkdlbFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvR0VMXCI+e2JhdHRlcnkuR2VsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkxlbmd0aFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvTGVuZ3RoXCI+e2JhdHRlcnkuTGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5tbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiV2lkdGhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb1dpZHRoXCI+e2JhdHRlcnkuV2lkdGh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPm1tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJIZWlnaHRcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0hlaWdodFwiPntiYXR0ZXJ5LkhlaWdodH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+bW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkRyeVdlaWdodFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvRHJ5V2VpZ2h0XCI+eyhiYXR0ZXJ5LkRyeVdlaWdodCA9PSAwKSA/IFwiLS1cIiA6IGJhdHRlcnkuRHJ5V2VpZ2h0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5rZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiRmlsbGVkV2VpZ2h0XCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9GaWxsZWRXZWlnaHRcIj57KGJhdHRlcnkuRmlsbGVkV2VpZ2h0ID09IDApID8gXCItLVwiIDogYmF0dGVyeS5GaWxsZWRXZWlnaHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPmtnPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJBY2lkVm9sdW1lXCIpfTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsIGNlbGwtcmlnaHRcIiBpZD1cImJhdHRlckluZm9BY2lkVm9sdW1lXCI+eyhiYXR0ZXJ5LkFjaWRWb2x1bWUgPT0gMCkgPyBcIi0tXCIgOiBiYXR0ZXJ5LkFjaWRWb2x1bWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbFwiPntwb2x5LnQoXCJMaXRlclwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIkNoYXJnZVByZWZlcnJlZFwiKX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbCBjZWxsLXJpZ2h0XCIgaWQ9XCJiYXR0ZXJJbmZvQ2hhcmdlUHJlZmVycmVkXCI+e2JhdHRlcnkuQ2hhcmdlUHJlZmVycmVkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGxcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwtbGFiZWwgY2VsbC1yaWdodFwiPntwb2x5LnQoXCJDaGFyZ2VNYXhcIil9OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWNlbGwgY2VsbC1yaWdodFwiIGlkPVwiYmF0dGVySW5mb0NoYXJnZU1heFwiPntiYXR0ZXJ5LkNoYXJnZU1heH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsXCI+QTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiTGF5b3V0RHJhd2luZ1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXR0ZXJ5LkxheW91dERyYXdpbmd9IGNsYXNzTmFtZT1cImJhdHRlcnktbGF5b3V0LWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVybWluYWxUb3BcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5UZXJtaW5hbFRvcH0gY2xhc3NOYW1lPVwiYmF0dGVyeS10ZXJtaW5hbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1kcmF3aW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXR0ZXJ5LWluZm8tY2VsbC1sYWJlbCBjZWxsLXJpZ2h0XCI+e3BvbHkudChcIlRlcm1pbmFsRnJvbnRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmF0dGVyeS5UZXJtaW5hbEZyb250fSBjbGFzc05hbWU9XCJiYXR0ZXJ5LXRlcm1pbmFsLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmF0dGVyeS1pbmZvLWRyYXdpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhdHRlcnktaW5mby1jZWxsLWxhYmVsIGNlbGwtcmlnaHRcIj57cG9seS50KFwiVGVybWluYWxTaWRlXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhdHRlcnkuVGVybWluYWxTaWRlfSBjbGFzc05hbWU9XCJiYXR0ZXJ5LXRlcm1pbmFsLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZXJzZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dSZXZlcnNlZEJpa2VzKGJhdHRlcnkpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19Pntwb2x5LnQoXCJBcHBsaWNhdGlvbkxpc3RcIil9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9seS50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYmF0dGVyaWVzL2JhdHRlcnlpbmZvbW9kYWwudHN4IiwiZXhwb3J0IHsgRmlsdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vZmlsdGVyY29udGFpbmVyXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJMaXN0IH0gZnJvbSBcIi4vZmlsdGVybGlzdFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXNcIjtcclxuaW1wb3J0IHsgSW1hZ2VNb2RhbCwgUmV2ZXJzZU1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuaW50ZXJmYWNlIElGaWx0ZXJDb250YWluZXJQcm9wcyB7XHJcbiAgICBzdG9yZTogRmlsdGVyU3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBtYW5hZ2luZyB0aGUgc3RhdGUgb2YgYSBsaXN0IG9mIGZpbHRlcnNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGaWx0ZXJDb250YWluZXJQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJRmlsdGVyQ29udGFpbmVyUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5maWx0ZXJzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlRmlsdGVySW1hZ2UoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkZpbHRlckltYWdlTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUlkPVwiRmlsdGVySW1hZ2VNb2RhbEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVySW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0PXt0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90LnQoXCJDbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckRyYXdpbmdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuc3RvcmUuRmlsdGVyRHJhd2luZ01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuSGlkZUZpbHRlckRyYXdpbmcoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIkZpbHRlckRyYXdpbmdNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSWQ9XCJGaWx0ZXJEcmF3aW5nTW9kYWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlckltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGV4dD17dGhpcy5wcm9wcy5zdG9yZS5wb2x5Z2xvdC50KFwiQ2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZXJzZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5IaWRlUmV2ZXJzZWRCaWtlcygpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlclJldmVyc2VNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnN0b3JlLkZpbHRlclJldmVyc2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXZlcnNlTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJjb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbHRlckxpc3RQcm9wcyB7XHJcbiAgICBzdG9yZTogRmlsdGVyU3RvcmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsdGVyTGlzdFN0YXRlIHtcclxuICAgIGNvbGxhcHNlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciB0byBkaXNwbGF5IGEgbGlzdCBvZiBiYXR0ZXJpZXNcclxuICovXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgRmlsdGVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRmlsdGVyTGlzdFByb3BzLCBJRmlsdGVyTGlzdFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElGaWx0ZXJMaXN0UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xsYXBzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2VkICE9IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBpc0NvbGxhcHNlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW1hZ2VFcnJvcihpdGVtOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgICAgIGxldCB0aGVQYXJ0cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUucG9seWdsb3Q7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMucHJvcHMuc3RvcmUuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgdGhlUGFydHMgPSBmaWx0ZXJzLm1hcCgocywgaSkgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2kudG9TdHJpbmcoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSXRlbVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3MuUGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRUFOXCIgY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57cy5FQU59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlR5cGVcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPntzLlR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFwcGxpY2F0aW9uc1wiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9iaWtlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93UmV2ZXJzZWRCaWtlcyhzKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLlBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLkltYWdlRXJyb3IoZS5jdXJyZW50VGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJJbWFnZShzLCBzLlBob3RvKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzLkRyYXdpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuc3RvcmUuU2hvd0ZpbHRlckRyYXdpbmcocywgcy5EcmF3aW5nKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RyYW5zbGF0ZS50KFwiQXBwbGljYWJsZUZpbHRlcnNcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYXJ0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJJdGVtXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VsbC1jZW50ZXJcIj57dHJhbnNsYXRlLnQoXCJFQU5cIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIlR5cGVcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkFwcGxpY2F0aW9uc1wiKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPnt0cmFuc2xhdGUudChcIkRyYXdpbmdcIil9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZVBhcnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ29sbGFwc2VkKCkge1xyXG4gICAgICAgIGxldCB0aGVUYWJsZXMgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnByb3BzLnN0b3JlLnBvbHlnbG90O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnByb3BzLnN0b3JlLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoZVRhYmxlcyA9IGZpbHRlcnMubWFwKChzLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBhcnQtdGFibGUgY29sbGFwc2VkXCIga2V5PXtpLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiSXRlbVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzLlBhcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiRUFOXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3MuRUFOfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIlR5cGVcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiID57cy5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmaXJzdGNvbFwiPnt0cmFuc2xhdGUudChcIkFwcGxpY2F0aW9uc1wiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hZmFtLmNvbS93cC1jb250ZW50L3RoZW1lcy9uZXRBZmFtL2FmYW1wYXJ0cy9iaWtlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dSZXZlcnNlZEJpa2VzKHMpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpcnN0Y29sXCI+e3RyYW5zbGF0ZS50KFwiSW1hZ2VcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiSW1hZ2VcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5QaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiBcIjBweFwiLCB3aWR0aDogXCI0ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMuSW1hZ2VFcnJvcihlLmN1cnJlbnRUYXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5zdG9yZS5TaG93RmlsdGVySW1hZ2Uocywgcy5QaG90byk7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlyc3Rjb2xcIj57dHJhbnNsYXRlLnQoXCJEcmF3aW5nXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkRyYXdpbmdcIiBjbGFzc05hbWU9XCJjZWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlLXBvcHVwLWZpdC13aWR0aFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cy5EcmF3aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMHB4XCIsIHdpZHRoOiBcIjRlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5JbWFnZUVycm9yKGUuY3VycmVudFRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLnN0b3JlLlNob3dGaWx0ZXJEcmF3aW5nKHMsIHMuRHJhd2luZyk7IGUucHJldmVudERlZmF1bHQoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57dHJhbnNsYXRlLnQoXCJBcHBsaWNhYmxlRmlsdGVyc1wiKX08L2gyPlxyXG4gICAgICAgICAgICAgICAge3RoZVRhYmxlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJsaXN0LnRzeCJdLCJzb3VyY2VSb290IjoiIn0=