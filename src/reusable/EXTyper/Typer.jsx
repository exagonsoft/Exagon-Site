import React, { useEffect, useState } from "react";
import "./extyper.css";

export const Phases = {
  TYPING: "typing",
  PAUSING: "pausing",
  DELETING: "deleting",
};

const type_interval = 150;
const pause_time = 2000;
const delete_interval = 50;

const useTypeText = (texts = []) => {
  const [textToType, setTextToType] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phases.TYPING);

  useEffect(() => {
    switch (phase) {
      case Phases.TYPING:
        {
          const nextText = texts[selectedIndex].slice(0, textToType.length + 1);
          if (nextText === textToType) {
            setPhase(Phases.PAUSING);
            return
          }

          const _timeout = setTimeout(() => {
            setTextToType(nextText);
          }, type_interval);

          return () => clearTimeout(_timeout);
        }
      case Phases.DELETING:
        {
          if (!textToType) {
            const netIndex = selectedIndex + 1;
            setSelectedIndex(texts[netIndex] ? netIndex : 0)
            setPhase(Phases.TYPING);
            return;
          }

          const nextRemaining = texts[selectedIndex].slice(0, textToType.length - 1);

          const _timeout = setTimeout(() => {
            setTextToType(nextRemaining);
          }, delete_interval);

          return () => clearTimeout(_timeout);
        }
        break;
      case Phases.PAUSING:
      default:
        const phaseTimeout = setTimeout(() => {
          setPhase(Phases.DELETING);
        }, pause_time);
        return () => clearTimeout(phaseTimeout);
    }
  }, [textToType, texts, phase, selectedIndex]);

  let _holetext = texts[selectedIndex];
  return {textToType, phase, _holetext};
};

const Typer = (props) => {
  const { texts } = props;
  const {textToType, phase, _holetext} = useTypeText(texts);
  return <span className={(phase == Phases.DELETING) ? "" : (phase == Phases.PAUSING) ? "Cursor Blinking" : "Cursor"} aria-label={_holetext}>{textToType}</span>;
};

export default Typer;
