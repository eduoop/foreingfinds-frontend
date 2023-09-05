import { format } from 'date-fns'

const GetYearFromDate = (dateParam: string) => {
    const date = new Date(dateParam)
    const formatted = format(date, "yyyy")
    return formatted
}

export default GetYearFromDate