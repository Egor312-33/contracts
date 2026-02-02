

export const PROTO_PATHS = {
    AUTH: require.resolve('@trash-streamers/contracts/proto/auth.proto'),
    ACCOUNT: require.resolve('@trash-streamers/contracts/proto/account.proto'),
    USERS: require.resolve('@trash-streamers/contracts/proto/users.proto')
} as const
