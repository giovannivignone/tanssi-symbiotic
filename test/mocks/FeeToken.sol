// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {console2} from "forge-std/console2.sol";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockFeeToken is ERC20 {
    uint256 public fee;

    constructor(string memory name_, uint256 _fee) ERC20(name_, "") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
        fee = _fee;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function transferFrom(address from, address to, uint256 value) public override returns (bool) {
        address spender = _msgSender();
        uint256 feeAmount = (value * fee) / 100;
        _spendAllowance(from, spender, value);
        _transfer(from, to, value - feeAmount);
        return true;
    }
}
