export type User = {
    id: number
    email: string
    email_verified: string
    first_name: string
    last_name: string
    avatar: string
}

export type HeaderProps = {
    user?: any,
    loading: boolean
}

export type LayoutProps = {
    user?: any,
    loading?: boolean,
    children: React.ReactNode  
}

export type userProps = {
    user: any
}