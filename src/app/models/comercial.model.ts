export interface Comercial {
    personType: String,
    businessName: String,
    socialReason: String,
    productsBeingSold: String,
    numberLocals: String,
    originOfProducts: String,
    qualifiedCraftman: Boolean,
    craftmanCalification: String,
    sellerType: String,
    locals: Local[]
}

interface Local {
    localNumber: String,
    predioNumber: String,
    sector: String,
    floor: String,
    hallNumber: String,
}
