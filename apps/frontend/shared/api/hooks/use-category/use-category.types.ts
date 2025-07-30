export interface CategoryData {
    yaTraceId: string;
    offerId: string;
    layoutId: string;
    categoryGroup: CategoryGroup;
    categories: CategorySection[];
    products: Product[];
}

export interface CategoryGroup {
    id: string;
    title: string;
}

export interface CategorySection {
    id: string;
    deepLink: string;
    layout: Layout;
    index: number;
    value: CategoryMeta;
    items: ProductTile[];
    discountInformers: any[];
    banners: any[];
}

export interface CategoryMeta {
    id: string;
    deepLink: string;
    title: string;
    available: boolean;
    itemMeta: CategoryUI;
    type: string;
    viewType: string;
    imageSize: [number, number];
    hideTitle: boolean;
    backgroundColor: string;
}

export interface CategoryUI {
    $titleColor: string;
    $placeholderColor: string;
    $isHideTitleOnTile: boolean;
    skipInCaasPromo: boolean;
    isRecipesCategory: boolean;
    disableDiscountsCarousel: boolean;
}

export interface ProductTile {
    id: string;
    deepLink?: string;
    layout: Layout;
    index: number;
    value: ProductTileMeta;
    items: any[];
    discountInformers: any[];
    banners: any[];
}

export interface ProductTileMeta {
    id: string;
    deepLink?: string;
    title: string;
    longTitle: string;
    amount: string;
    available: boolean;
    quantityLimit: string;
    withVideo: boolean;
    stickers: any[];
    options: ProductOptions;
    snippetImage: ProductImage;
    recipe?: RecipeMeta;
    type: string;
    viewType: string;
    imageSize: [number, number];
    hideTitle: boolean;
    backgroundColor: string;
}

export interface ProductOptions {
    docsRequired: boolean;
    quantityType?: string;
}

export interface ProductImage {
    url: string;
    substrated: boolean;
}

export interface RecipeMeta {
    cookTimeMinutes: number;
    activeCookTimeMinutes: number;
    type: string;
}

export interface Product {
    type: string;
    id: string;
    isMarkdown: boolean;
    deepLink?: string;
    title: string;
    longTitle: string;
    stickers: any[];
    amount: string;
    snippetImage: ProductImage;
    isFavorite: boolean;
    pricing: ProductPricing;
    currentPrice: number;
    currentPriceSigned: string;
    isExpiring: boolean;
    adult: boolean;
    requiredRestriction: null;
    available: boolean;
    quantityLimit: string;
    maxAmount: number;
    baseStep: number;
    incrementStep: number;
    isLowStock: boolean;
    productTags: any[];
    recipe?: RecipeMeta;
    rewardedProductSamplingInfos: any[];
    withVideo: boolean;
    options: ProductOptions;
    children: any[];
}

export interface ProductPricing {
    amountPrice: number;
    amountPriceSigned: string;
    price: number;
    priceSigned: string;
}

export interface Layout {
    width: number;
    height: number;
    type: string;
    id: string;
    isHero: boolean;
}