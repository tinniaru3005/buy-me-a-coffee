// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract BuyMeACoffee {
    // Event to emit when a memo is created.
    event NewMemo(
        address indexed from,
        uint256 indexed timestamp,
        string name,
        string message
    );

    // Memo struct
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // list of all memos received
    Memo[] public memos;

    // address of contract deployer
    address payable public owner;

    // Deploy logic
    constructor() {
        owner = payable(msg.sender);
    }

    /**
     * @dev buy a coffee for the contract owner
     * @param _name name of the coffee buyer
     * @param _message a message
     */
    function buyCoffee(string memory _name, string memory _message) public payable {
        // require that the value sent is greater than 0 ether
        require(msg.value >= 0 ether, "Value must be greater than 0 ether");

        // create a new memo
        memos.push(Memo(msg.sender, block.timestamp, _name, _message));

        // emit the NewMemo event
        emit NewMemo(msg.sender, block.timestamp, _name, _message);
    }

    /**
     * @dev withdraw tips from the contract
     */
    function withdrawTips() public {
        // require that the caller is the owner
        require(msg.sender == owner, "Only the owner can withdraw tips");

        // transfer the balance to the owner
        owner.transfer(address(this).balance);
    }

    /**
     * @dev get all memos
     */
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
