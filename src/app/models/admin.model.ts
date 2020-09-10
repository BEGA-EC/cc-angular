export interface Admin {
    taxType: String,
    taxNumber: String,
    keepAccounting?: Boolean,
    personType: String,
    businessName: String,
    socialReason: String,
    productsBeingSold: Product[],
    originOfProducts: String,
    numberLocals: Number,
    locals: Local[],
    qualifiedCraftman: Boolean,
    craftmanCalification: Number,
    sellerType: String,
    bloodType: String,
    height: Number,
    allergy: Boolean,
    allergicTo: String,
    consumingMedicine: Boolean,
    medicamentBeingConsumed: String,
    illness: String,
    affiliatedTo: String,
    affiliatedToPrivate: String,
    conadisLicense: Boolean,
    disability: String, 
    disabilityPer: String,
    retirement: Boolean,
    retirementDetails: String
}

interface Local {
    localNumber: String,
    predioNumber: String,
    sector: String,
    floor: String,
    hallNumber: String
}

interface Product {
    productName: String
}
