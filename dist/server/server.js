"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
// import routerEmail from "../routes/email"
// import routerUser from "../routes/user"
const category_1 = __importDefault(require("../routes/category"));
// import routerConfig from "../routes/config"
// import routerMarketing from "../routes/marketing"
// import routerAdmin from "../routes/admin"
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3002';
        this.listen();
        this.midlewares();
        this.router();
        // this.conexionDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Estoy ejecuntado en el puerto: " + this.port);
        });
    }
    router() {
        this.app.use(category_1.default);
        // this.app.use(routerEmail)
        // this.app.use(routerUser)
        // this.app.use(routerConfig)
        // this.app.use(routerMarketing)
        // this.app.use(routerAdmin)
    }
    // async conexionDB() {
    //     try {
    //         console.log("Conexion Exitosa");
    //     } catch (error) {
    //         console.log("Error de conexion" + error);
    //     }
    // }
    midlewares() {
        // Protecciones de seguridad
        // this.app.use(helmet());
        // this.app.use(cors({ origin: ['http://localhost:3002/'] }));
        // Límite de solicitudes
        // const limiter = rateLimit({
        //     windowMs: 1 * 60 * 1000,
        //     max: 1000,
        //     message: "Demasiadas solicitudes desde esta IP, inténtelo de nuevo más tarde."
        // });
        // this.app.use(limiter);
        this.app.use('/assets', express_1.default.static(path_1.default.resolve('assets')));
        this.app.use(express_1.default.json());
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use((0, express_1.json)());
        //
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
