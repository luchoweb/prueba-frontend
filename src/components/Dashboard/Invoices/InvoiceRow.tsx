import { InvoiceRowProps } from "../../../types";

const InvoiceRow = ({ invoice }: InvoiceRowProps) => {
  return (
    <tr>
      <td scope="row">{invoice.id}</td>
      <td>
        <ul className="m-0 ps-3">
          {invoice.items.map(item =>(
          <li>
            {item.name} ({item.quantity})
          </li>
          ))}
        </ul>
      </td>
      <td>{invoice.seller.name}</td>
    </tr>
  )
}

export default InvoiceRow;
