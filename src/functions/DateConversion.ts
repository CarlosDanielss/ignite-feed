import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface DateConversionReturn {
  dateFormatted: string;
  dateRelativeToNow: string;
  dateFormattedToIso: string;
}

export function DateConversion(date: Date): DateConversionReturn {
  const dateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  const dateFormattedToIso = date.toISOString();

  return {
    dateFormatted,
    dateRelativeToNow,
    dateFormattedToIso,
  };
}
