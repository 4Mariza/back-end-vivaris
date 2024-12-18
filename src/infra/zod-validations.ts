/** 
 * Os comentários estão sendo criados com a extensão betterComents para melhorar a legibilidade
 */

import { z } from "zod";

export function isValidId(id:number) : boolean {

    console.log(id);
    
    const idSchema = z.number().int().positive()

    const testId = idSchema.safeParse(id)

    return testId.success
}

export function isValidEmail(email:string) : boolean{
 // TODO: Quando a aplicação estiver na fase final, trocar o .max(256) por .email()
 
  const emailSchema = z.string().max(256)
  
  const testEmail = emailSchema.safeParse(email)

  return testEmail.success
}

export function isValidName(name:string) : boolean{
    const nameSchema = z.string().max(50).refine((name) => /^[A-Za-zÀ-ÖØ-ÿ ]+$/.test(name))

    const testName = nameSchema.safeParse(name)
    

    return testName.success
}

export function isValidPassword(password: string) : boolean{
    const passwordSchema = z.string().min(8).max(20)

    const testPassword = passwordSchema.safeParse(password)
    

    return testPassword.success
}

export function isValidWeekDay(date: string) : boolean{

    //? Verificar se o tipo 'date' do zod corresponde ao tipo de data que estamos utilizando
    //* ^  Possível uso quando a aplicação estiver na fase final
    const dateSchema = z.string().min(5).max(7)

    const testDate = dateSchema.safeParse(date)

    if(!testDate.success){
        return false
    }

    const weekDaysArray = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'] as const;

    const weekDaySchema = z.enum(weekDaysArray)

    const finalDayTest = weekDaySchema.safeParse(date)
    

    return finalDayTest.success
}

export function isValidHour(hour: string) : boolean{
    const hourSchema = z.string().length(8)

    const validateHour = hourSchema.safeParse(hour)  
    
    return validateHour.success
}


export function isValidNumberArray(numberArray : Array<number>) : boolean{
    const numberArraySchema = z.array(z.number().int().positive()).min(1)

    const testNumberArray = numberArraySchema.safeParse(numberArray)

    return testNumberArray.success
}


export function isValidAvailbilityStatus(availabilityStatus : string) : boolean{
    const availabilityStatusSchema = z.string().min(4).max(11)

    const testStatus = availabilityStatusSchema.safeParse(availabilityStatus)

    if(!testStatus.success){
        return false
    }

    const availabilityStatusArray = ['Livre', 'Selecionado', 'Pago', 'Concluido'] as const

   const availabilityStatusArraySchema = z.enum(availabilityStatusArray)

   const finalStatusTest = availabilityStatusArraySchema.safeParse(availabilityStatus)

   return finalStatusTest.success
}

export async function isValidAssessment(avaliacao:string) {
    const assessmentSchema = z.enum(['Um', 'Dois', 'Tres', 'Quatro', 'Cinco'])

    const testAssessment = assessmentSchema.safeParse(avaliacao)

    return testAssessment.success
}

export async function isValidUser(user:string) {
    const firstUserSchema = z.enum(['cliente', 'psicologo'])

    const testUser = firstUserSchema.safeParse(user)

    return testUser.success
}

export async function isValidMood(mood:string) {
    const moodArray = ["Muito_triste", "Triste", "Neutro", "Feliz", "Muito_feliz"] as const

    const moodSchema = z.enum(moodArray)

    const testMood = moodSchema.safeParse(mood)

    return testMood.success
}