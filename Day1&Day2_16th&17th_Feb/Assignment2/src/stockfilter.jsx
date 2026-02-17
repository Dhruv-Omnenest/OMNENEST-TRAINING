import  { useState, useMemo } from "react";
import stockData from "./data/data";

export default function StockFilter() {

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [priceLow, setPriceLow] = useState("");
  const [priceHigh, setPriceHigh] = useState("");
  const [volume, setVolume] = useState("");

  const filteredData = useMemo(() => {
    return stockData.filter((row) => {

      if (dateFrom && row.Date < dateFrom) return false;
      if (dateTo && row.Date > dateTo) return false;
      if (priceLow && row.Low < Number(priceLow)) return false;
      if (priceHigh && row.High > Number(priceHigh)) return false;
      if (volume && row.Volume < Number(volume)) return false;

      return true;
    });
  }, [dateFrom, dateTo, priceLow, priceHigh, volume]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Stock Filter</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input type="date" onChange={(e) => setDateFrom(e.target.value)} />
        <input type="date" onChange={(e) => setDateTo(e.target.value)} />
        <input type="number" placeholder="Min Low" onChange={(e) => setPriceLow(e.target.value)} />
        <input type="number" placeholder="Max High" onChange={(e) => setPriceHigh(e.target.value)} />
        <input type="number" placeholder="Min Volume" onChange={(e) => setVolume(e.target.value)} />
      </div>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i}>
              <td>{row.Date}</td>
              <td>{row.Open}</td>
              <td>{row.High}</td>
              <td>{row.Low}</td>
              <td>{row.Close}</td>
              <td>{row.Volume}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total Rows: {filteredData.length}</p>
    </div>
  );
}
