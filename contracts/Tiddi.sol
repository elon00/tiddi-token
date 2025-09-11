// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tiddi is ERC20 {
    uint256 public constant TOTAL_SUPPLY = 2100000000000000; // 2100 trillion = 2.1e15

    constructor() ERC20("Tiddi", "TIDDI") {
        _mint(0xa4E1f98c20abD77F198b8899b8D97c38CA7bDfCc, TOTAL_SUPPLY);
    }
}