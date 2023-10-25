const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const base = `${API}${VERSION}`

const endPoints = {
  auth: {
    login: `${base}/auth/login`,
    profile: `${base}/auth/profile`
  },
  products: {
    getProduct: id => `${base}/products/${id}`,
    getProducts: (limit, offset) => `${base}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${base}/products`,
    updateProducts: id => `${base}/products/${id}`,
    deleteProducts: id => `${base}/products/${id}`
  },
  categories: {
    getCategoriesList: `${base}/categories`,
    addCategory: `${base}/categories`,
    getCategoryItems: id => `${base}/categories/${id}/products`,
    updateCategory: id => `${base}/categories/${id}`
  },
  files: {
    addImage: `${base}/files/upload`
  }
}

export { endPoints }