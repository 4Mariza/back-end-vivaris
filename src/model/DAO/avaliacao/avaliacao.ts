import { PrismaClient } from "@prisma/client";
import { TAssessment } from "../../../domain/entities/assessment";
const prisma = new PrismaClient()

export async function criarAvaliacao(avalicacao : TAssessment) {
    try {
        let assessment  = await prisma.tbl_avaliacoes.create({
            data : {
                texto : avalicacao.texto,
                avaliacao : avalicacao.avaliacao,
                id_cliente : avalicacao.id_cliente,
                id_psicologo : avalicacao.id_psicologo
            }
        })

        if(!assessment){
            return false
        }

        return assessment
    } catch (error) {
        console.error("Erro ao criar nova avaliacao:", error);
        throw new Error("Não foi possível criar a avaliação");
    }
}