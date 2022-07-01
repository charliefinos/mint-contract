// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "erc721a/contracts/ERC721A.sol";

error Mint_NotEnoughEther();

// add different payments
//

contract Mint is ERC721A {
    uint256 public immutable PRICE = 0.01 ether;
    mapping(address => bool) private wallets;

    constructor(uint256 _price) ERC721A("mint", "mint") {}

    function mint(uint256 quantity) external payable {
        if (msg.value < PRICE) {
            revert Mint_NotEnoughEther();
        }
        wallets[msg.sender] == true;
        _safeMint(msg.sender, quantity);
    }

    function walletMinted(address wallet) public view returns (bool) {
        return wallets[wallet];
    }
}
