import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BottomBtns = ({ handleClear }: { handleClear: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className="bottomBtns">
      <Button
        variant="contained"
        color="success"
        style={{ width: "20px", marginTop: "20px" }}
        onClick={() => navigate('/add')}
      >
        Add
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ width: "30px", marginTop: "20px" }}
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  );
};

export default BottomBtns;
