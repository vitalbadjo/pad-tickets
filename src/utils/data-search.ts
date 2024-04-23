import { TicketsResponse } from "../services/api";

export const searchTicketsByStops = (
  tickets: TicketsResponse,
  conditions: number[]
): TicketsResponse => {
  return tickets.filter(ticket => conditions.includes(ticket.stops))
}