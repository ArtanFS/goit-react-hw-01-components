export const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  // <section className="statistics">
  //   {title && <h2 className="title">{title}</h2>}
  //   <ul className="stat-list">
  //     {stats.map(el => (
  //       <li className="item" key={el.id}>
  //         <span className="label">{el.label}</span>
  //         <span className="percentage">{el.percentage}%</span>
  //       </li>
  //     ))}
  //   </ul>
  // </section>
);
