function buildRequestPath(relativePath: string): string {
    return `${process.env.SERVICE_BACK}${relativePath}`
}

export default buildRequestPath;