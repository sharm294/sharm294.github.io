import React from "react"

import Cpu from "../content/assets/images/skills/circuit.svg"
import Eye from "../content/assets/images/skills/eye.svg"
import Fpga from "../content/assets/images/skills/fpga.svg"
import Gears from "../content/assets/images/skills/gears.svg"
import Infinity from "../content/assets/images/skills/infinity.svg"
import Laptop from "../content/assets/images/skills/laptop.svg"

import "./CustomIcons.scss";

export const BackendIcon = () => <Gears className="backend" />;
export const CpuIcon = () => <Cpu className="cpu" />;
export const DevOpsIcon = () => <Infinity className="devops" />;
export const FpgaIcon = () => <Fpga className="fpga" />;
export const FrontendIcon = () => <Eye className="frontend" />;
export const LaptopIcon = () => <Laptop className="laptop" />;

