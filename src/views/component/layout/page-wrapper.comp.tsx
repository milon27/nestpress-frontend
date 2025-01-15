interface IPageWrapper {
    hideHeaderFooter?: boolean
    children: React.ReactNode
}

export function PageWrapper({ children, hideHeaderFooter = false }: IPageWrapper) {
    return (
        <div>
            {!hideHeaderFooter && "Header"}
            {children}
            {!hideHeaderFooter && "Footer"}
        </div>
    )
}
