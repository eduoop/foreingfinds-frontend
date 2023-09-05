import { format } from 'date-fns'

const GetHoursFromDate = (dateParam: string) => {
    const date = new Date(dateParam)
    const formatted = format(date, "HH:mm")
    return formatted
}

export default GetHoursFromDate