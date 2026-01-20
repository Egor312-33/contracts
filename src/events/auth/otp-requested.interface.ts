import { AuthType } from "../../gen/ts/auth"


export interface OtpRequestedEvent {
    identifier: string
    type: AuthType
    code: string
}
