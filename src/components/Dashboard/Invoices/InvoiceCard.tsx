import { InvoiceCardProps } from "../../../types";

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <p>{invoice.id}</p>
  )
}

export default InvoiceCard;
