---
anchor: "Projects"
header: "Projects"
subheader: ""
portfolios: [
  {
    imageFileName: "projects/shoal.png",
    header: "Shoal",
    subheader: "Shared memory in FPGA and CPU clusters",
    link: "https://github.com/UofT-HPRC/shoal",
    content: "Shoal is the result of the work I did during my Masters. It's a communication API for processors and FPGAs to allow communication between them. It is intended to be used under the PGAS (partitioned global address space) memory model. Shoal leverages the Galapagos framework (also from UofT) to create networked clusters of compute.",
    extraInfo: ["Language(s): C++ (including HLS), Python, SystemVerilog, Tcl"]
  },
  {
    imageFileName: "projects/sonar.png",
    header: "Sonar",
    subheader: "Testbenching Verilog with Python",
    link: "https://github.com/sharm294/sonar",
    content: "Sonar is a Python library for writing System-Verilog (SV) testbenches in a convenient syntax. You describe your device-under-test, define what stimuli you want to send to it, and Sonar generates a pure SV (no DPI/VPI) testbench that you can use in your favorite simulator.",
    extraInfo: ["Language(s): Python, SystemVerilog"]
  },
  {
    imageFileName: "projects/Vitis-AI.png",
    header: "Neptune",
    subheader: "Python server for inference on Xilinx FPGAs",
    link: "https://github.com/Xilinx/Vitis-AI/tree/master/demo/neptune",
    content: "Neptune is a Python web server to serve machine learning models for inference on FPGAs. Released as part of Xilinx's MLsuite and Vitis-AI, Neptune allows custom graph construction and running multiple simultaneous services leveraging multiple Xilinx FPGAs.",
    extraInfo: ["Language(s): Python"]
  },
  {
    imageFileName: "projects/FPGA-Startup.png",
    header: "FPGA-Startup",
    subheader: "Orchestrate FPGAs with containers",
    link: "https://github.com/sharm294/FPGA-Startup",
    content: "FPGA-Startup is a collection of scripts to make using FPGAs with LXD containers easier. For a grad course, students were given access to an FPGA for project development. As the resident sysadmin, I used these scripts to program FPGAs, map their PCIe and USB interfaces to a container and provide a kernel module for students to rescan the PCIe bus.",
    extraInfo: ["Language(s): Shell"]
  },
  {
    imageFileName: "projects/website.png",
    header: "Website",
    subheader: "You're looking at it!",
    link: "https://github.com/sharm294/sharm294.github.io",
    content: "This website serves not only as a personal portfolio but also as a place for me to practice JavaScript/React. Over time, I'll add more content to this site.",
    extraInfo: ["Language(s): Javascript, React"]
  }
]
---
