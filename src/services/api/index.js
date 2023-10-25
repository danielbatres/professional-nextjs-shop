const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}${VERSION}/auth/login`,
    profile: `${API}${VERSION}/auth/profile`
  },
  products: {
    getProduct: id => `${API}${VERSION}/products/${id}`
  }
}

export { endPoints }