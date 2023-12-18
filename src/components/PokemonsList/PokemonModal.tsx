import { FC } from "react";
import { Typography, Button, Dialog, DialogContent, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@components/ProgressBar";
import { Pokemon } from "@lib/types";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  info: Pokemon;
};

const PokemonModal: FC<ModalProps> = ({ open, handleClose, info }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Typography mb={2} align="center">
          {info?.name.toUpperCase()}
        </Typography>
        <Box align="center">
          {(!!info?.image1 || !!info?.image2) && (
            <Image
              src={info?.image1 ? info?.image1 : info?.image2}
              width={250}
              height={250}
              alt="Picture of the author"
            />
          )}
        </Box>
        {info?.abilities?.map((ability, index) => (
          <ProgressBar
            key={index}
            title={ability.name}
            value={ability.value < 100 ? ability.value : 100}
          />
        ))}
        <Link href={`pokemon/${info?.name}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Button color="inherit" sx={{ mt: 2 }} variant="outlined" onClick={handleClose}>
            Check Abilities
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonModal;
