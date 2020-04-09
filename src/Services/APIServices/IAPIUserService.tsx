import User from '../../Models/UserModel';
import Token from '../../Models/TokenModel'

export default interface IAPIUserService{
    Login(user:User):Promise<Token|null>
    Register(user: User):Promise<boolean>
    Delete(user: User,token:Token) : Promise<boolean>
}

