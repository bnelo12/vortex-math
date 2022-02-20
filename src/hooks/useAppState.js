import { useState, useEffect } from 'react';

export default function useAppState(initial_modulus, initial_multiplier) {
  const modulus_state = useState(initial_modulus);
  const multiplier_state = useState(initial_multiplier);
  const color_loops_state = useState(true);

  return {
    "modulus": modulus_state,
    "multiplier": multiplier_state,
    "color_loops": color_loops_state,
  };
}
