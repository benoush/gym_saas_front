export const generateUrl = (path: string) => `${process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '')}${path}`
