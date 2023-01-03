import validator from 'validator'
import { ValidateEmailResponse, ValidatePasswordResponse } from '../../../domain/entities/login/login-response'

export class LoginLocalDatasource {
  regexPass = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/

  checkValidateEmail = async (email: string): Promise<ValidateEmailResponse> => {
    let isValid = false
    let message = ''
    if (email.length === 0) {
      isValid = false
      message = ''
    } else if (validator.isEmail(email)) {
      isValid = true
      message = ''
    } else {
      isValid = false
      message = 'Khong dung dinh dang email'
    }
    return await Promise.resolve({
      isValid,
      message
    })
  }

  checkValidatePassword = async (pass: string): Promise<ValidatePasswordResponse> => {
    let isValid = false
    let message = ''
    if (pass.length === 0) {
      isValid = false
      message = ''
    } else if (pass.length < 8) {
      isValid = false
      message = 'mat khau phai dai hon 8 ky tu'
    } else if (this.regexPass.test(pass)) {
      isValid = false
      message = 'Khong dung dinh dang pass'
    } else {
      isValid = true
      message = ''
    }
    return await Promise.resolve({
      isValid,
      message
    })
  }
}
