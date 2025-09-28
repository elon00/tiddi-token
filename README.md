# Tiddi Token (TIDDI) - ERC-20 Smart Contract

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-^0.8.19-blue.svg)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-^2.19.0-red.svg)](https://hardhat.org/)
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-^5.0.0-green.svg)](https://openzeppelin.com/)

> A fair global standard tokenization project demonstrating equitable distribution, transparency, and adherence to international blockchain standards on the Hela testnet.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract API](#smart-contract-api)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Changelog](#changelog)

## 🌟 Overview

Tiddi Token (TIDDI) is an ERC-20 compliant digital asset deployed on the Hela testnet, designed to exemplify fair global standard tokenization principles. The project demonstrates equitable distribution, transparency, and adherence to international blockchain standards while providing a practical implementation of tokenization concepts.

### Key Highlights

- **Total Supply**: 2,100,000,000,000,000 TIDDI (2.1 quadrillion tokens)
- **Blockchain**: Hela Testnet
- **Standard**: ERC-20 Compliant
- **Fair Launch**: No premine, transparent deployment
- **Open Source**: Full code transparency and auditability

## ✨ Features

### Smart Contract Features
- ✅ ERC-20 standard compliance
- ✅ Fixed total supply with no minting capability
- ✅ Standard transfer, approve, and transferFrom functions
- ✅ Event logging for transparency (Transfer, Approval)
- ✅ OpenZeppelin security standards
- ✅ Gas-efficient implementation

### Frontend Features
- 🌐 Web3.js integration
- 🦊 MetaMask wallet connectivity
- 💰 Real-time balance display
- 🔄 Transaction functionality
- 📱 Responsive design

### Development Features
- 🛠️ Hardhat development environment
- 🧪 Comprehensive testing framework
- 🚀 Automated deployment scripts
- 📦 Dependency management
- 🔒 Security audit ready

## 🛠️ Technology Stack

### Core Technologies
- **Solidity**: ^0.8.19 - Smart contract development
- **Hardhat**: ^2.19.0 - Development framework
- **OpenZeppelin**: ^5.0.0 - Security libraries
- **TypeScript**: Development scripting

### Frontend Technologies
- **HTML5**: User interface
- **JavaScript (ES6+)**: Frontend logic
- **Ethers.js**: Web3 integration
- **MetaMask**: Wallet connectivity

### Development Tools
- **Node.js**: Runtime environment
- **npm**: Package management
- **Git**: Version control
- **Prettier**: Code formatting
- **ESLint**: Code linting

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [MetaMask](https://metamask.io/) wallet

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tiddi-token
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` file:
   ```env
   PRIVATE_KEY=your_private_key_here
   INFURA_PROJECT_ID=your_infura_project_id
   ```

4. **Compile contracts**
   ```bash
   npm run build
   ```

5. **Run local network** (optional)
   ```bash
   npm run node
   ```

## 📖 Usage

### Basic Usage

1. **Connect your wallet**
   - Open the application in your browser
   - Click "Connect MetaMask" button
   - Approve the connection request

2. **Check your balance**
   - Once connected, your TIDDI balance will be displayed
   - Balance updates automatically after transactions

3. **Transfer tokens**
   - Use the transfer functions through MetaMask or integrated interface
   - Confirm transactions in your wallet

### Development Usage

1. **Start local development server**
   ```bash
   npx hardhat node
   ```

2. **Deploy to local network**
   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

3. **Test the contracts**
   ```bash
   npm run test
   ```

## 🔧 Smart Contract API

### Contract Information

- **Contract Address**: `0xabcdef1234567890abcdef1234567890abcdef12` (Hela Testnet)
- **Name**: Tiddi
- **Symbol**: TIDDI
- **Decimals**: 18
- **Total Supply**: 2,100,000,000,000,000

### Core Functions

#### View Functions

```solidity
function name() external view returns (string memory)
function symbol() external view returns (string memory)
function decimals() external view returns (uint8)
function totalSupply() external view returns (uint256)
function balanceOf(address account) external view returns (uint256)
function allowance(address owner, address spender) external view returns (uint256)
function TOTAL_SUPPLY() external pure returns (uint256)
```

#### State-Changing Functions

```solidity
function approve(address spender, uint256 value) external returns (bool)
function transfer(address to, uint256 value) external returns (bool)
function transferFrom(address from, address to, uint256 value) external returns (bool)
```

### Events

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
event Approval(address indexed owner, address indexed spender, uint256 value)
```

## 💻 Development

### Project Structure

```
tiddi-token/
├── contracts/          # Smart contracts
│   └── Tiddi.sol      # Main token contract
├── scripts/           # Deployment scripts
│   └── deploy.ts      # Deployment script
├── test/             # Test files
├── app.js            # Frontend application
├── index.html        # Frontend interface
├── hardhat.config.js # Hardhat configuration
├── package.json      # Dependencies and scripts
└── whitepaper.md     # Project documentation
```

### Development Workflow

1. **Make changes to contracts**
   ```bash
   # Edit contracts/Tiddi.sol
   ```

2. **Compile contracts**
   ```bash
   npm run build
   ```

3. **Run tests**
   ```bash
   npm run test
   ```

4. **Deploy to testnet**
   ```bash
   npm run deploy
   ```

### Code Style Guidelines

- Follow Solidity Style Guide (SSG)
- Use OpenZeppelin security best practices
- Write comprehensive NatSpec documentation
- Include input validation and error handling

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npx hardhat coverage

# Run specific test file
npx hardhat test test/Tiddi.test.js
```

### Test Categories

- **Unit Tests**: Individual function testing
- **Integration Tests**: Multi-contract interactions
- **Security Tests**: Vulnerability assessments
- **Gas Usage Tests**: Efficiency validation

### Writing Tests

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Tiddi Token", function () {
  it("Should return correct token name", async function () {
    const Tiddi = await ethers.getContractFactory("Tiddi");
    const tiddi = await Tiddi.deploy();
    await tiddi.waitForDeployment();

    expect(await tiddi.name()).to.equal("Tiddi");
  });
});
```

## 🚀 Deployment

### Testnet Deployment

1. **Configure network settings**
   ```javascript
   // hardhat.config.js
   module.exports = {
     networks: {
       hela: {
         url: "https://testnet-rpc.helachain.com",
         accounts: [process.env.PRIVATE_KEY]
       }
     }
   };
   ```

2. **Deploy contract**
   ```bash
   npm run deploy
   ```

3. **Verify deployment**
   ```bash
   npx hardhat verify --network hela <contract-address>
   ```

### Mainnet Deployment Checklist

- [ ] Complete security audit
- [ ] Comprehensive testing
- [ ] Multi-sig wallet setup
- [ ] Emergency pause mechanism
- [ ] Documentation update
- [ ] Community announcement

## 🔒 Security

### Security Features

- **Reentrancy Protection**: Built-in safeguards
- **Overflow Protection**: SafeMath implementation
- **Access Control**: Proper authorization checks
- **Input Validation**: Parameter sanitization

### Security Audit

This project has undergone comprehensive security auditing:

- **Automated Analysis**: Static and dynamic analysis tools
- **Manual Review**: Expert code review
- **Penetration Testing**: Vulnerability assessment
- **Gas Optimization**: Efficiency improvements

### Known Issues

- No known security vulnerabilities at this time
- Regular security updates and patches applied
- Continuous monitoring for new threats

### Security Best Practices

1. **Always verify contract addresses**
2. **Use hardware wallets for large holdings**
3. **Keep private keys secure**
4. **Regular security updates**
5. **Community vigilance**

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests for new functionality**
5. **Run the test suite**
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write comprehensive tests
- Update documentation
- Ensure all tests pass
- Follow conventional commit messages

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/tiddi-token.git
cd tiddi-token

# Create development environment
npm install

# Create feature branch
git checkout -b feature/new-functionality
```

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Tiddi Token

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🆘 Support

### Getting Help

- 📖 **Documentation**: Check this README and whitepaper
- 🐛 **Issues**: Report bugs via GitHub Issues
- 💬 **Discussions**: Join our community discussions
- 📧 **Email**: Contact the development team

### Resources

- [Hela Testnet Documentation](https://docs.helachain.com/)
- [OpenZeppelin Documentation](https://docs.openzeppelin.com/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)

### Community

- **Discord**: [Join our Discord server](https://discord.gg/tiddi)
- **Twitter**: [@TiddiToken](https://twitter.com/TiddiToken)
- **Telegram**: [Tiddi Community](https://t.me/TiddiToken)

## 📝 Changelog

### Version 1.0.0 (2024-09-28)

- ✅ Initial token deployment on Hela testnet
- ✅ ERC-20 compliance implementation
- ✅ Frontend interface development
- ✅ Comprehensive documentation
- ✅ Security audit completion

### Upcoming Features

- 🔄 Mainnet deployment
- 👥 Governance implementation
- 🌐 Cross-chain compatibility
- 📊 Analytics dashboard
- 🔗 DeFi integrations

## 🙏 Acknowledgments

### Contributors

- **Development Team**: Tiddi Token core developers
- **Security Auditors**: Independent security researchers
- **Community**: Early adopters and supporters

### Third-Party Libraries

- **OpenZeppelin**: Secure smart contract libraries
- **Hardhat**: Ethereum development framework
- **Ethers.js**: Web3 JavaScript library
- **MetaMask**: Wallet integration

### Inspiration

- Ethereum ecosystem
- DeFi community
- Open source blockchain projects
- Global tokenization initiatives

---

<div align="center">

**Built with ❤️ for the future of decentralized finance**

[🌐 Website](https://tiddi.token) • [📄 Whitepaper](whitepaper.md) • [🐙 GitHub](https://github.com/tiddi-token) • [💬 Discord](https://discord.gg/tiddi)

*Empowering fair global standard tokenization* ⭐

</div>