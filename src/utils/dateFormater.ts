const language = navigator?.language || "pt-BR"

const generate = (conf: Intl.DateTimeFormatOptions) => (date: string | Date) =>
    Intl.DateTimeFormat(language, conf)
        .format(typeof date === "string" ? new Date(date) : date)

export const Weekday = generate({
    weekday: "long",
})

export const format = generate({
    day: "2-digit", month: "long"
})

export const getTime = generate({
    timeStyle: "short",
})

