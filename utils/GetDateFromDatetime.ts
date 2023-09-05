import { format } from 'date-fns'

const GetDateFromDatetime = (dateParam: string) => {
    const date = new Date(dateParam)
    const formatted = format(date, "dd/MM/yyyy")
    return formatted
}

export default GetDateFromDatetime