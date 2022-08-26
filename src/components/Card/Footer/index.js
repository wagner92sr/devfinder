import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from "react-icons/fa";
import "./footer.css";
import { Item } from "./Item";

export function Footer() {
  return (
    <footer className="card-footer">
      <section>
        <Item title="Porto Alegre">
          <FaMapMarkerAlt size={20} color="inherit" />
        </Item>

        <Item title="Youtube" link="#">
          <FaLink size={20} color="inherit" />
        </Item>
      </section>

      <section>
        <Item title="Twitter" link="#">
          <FaTwitter size={20} color="inherit" />
        </Item>

        <Item title="DBC Company">
          <FaBuilding size={20} color="inherit" />
        </Item>
      </section>
    </footer>
  );
}
