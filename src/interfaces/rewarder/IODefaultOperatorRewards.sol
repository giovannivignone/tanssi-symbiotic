// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) Moondance Labs Ltd.
// This file is part of Tanssi.
// Tanssi is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// Tanssi is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with Tanssi.  If not, see <http://www.gnu.org/licenses/>

pragma solidity ^0.8.0;

interface IODefaultOperatorRewards {
    error ODefaultOperatorRewards__InsufficientBalance();
    error ODefaultOperatorRewards__InsufficientTotalClaimable();
    error ODefaultOperatorRewards__InsufficientTransfer();
    error ODefaultOperatorRewards__NotNetworkMiddleware();
    error ODefaultOperatorRewards__RootNotSet();
    error ODefaultOperatorRewards__InvalidProof();
    error ODefaultOperatorRewards__InvalidTotalPoints();
    error ODefaultOperatorRewards__InvalidOperatorShare();
    error ODefaultOperatorRewards__InvalidAddress();
    error ODefaultOperatorRewards__AlreadySet();

    /**
     * @notice Emitted when rewards are distributed by providing a Merkle root.
     * @param epoch epoch of the rewards distribution
     * @param eraIndex era index of Starlight's rewards distribution
     * @param root Merkle root of the rewards distribution
     * @dev The Merkle tree's leaves must represent an account and a claimable amount (the total amount of the reward tokens for the whole time).
     */
    event DistributeRewards(
        uint48 indexed epoch, uint48 indexed eraIndex, uint256 tokensPerPoint, uint256 amount, bytes32 indexed root
    );

    /**
     * @notice Emitted when rewards are claimed by a particular account.
     * @param recipient address of the rewards' recipient
     * @param epoch network epoch of the middleware
     * @param claimer address of the rewards' claimer
     * @param amount amount of tokens claimed
     */
    event ClaimRewards(
        address indexed recipient, uint48 epoch, address indexed claimer, uint48 indexed eraIndex, uint256 amount
    );

    /**
     * @notice Emitted when the staker rewards contract's address is set for a particular vault.
     * @param stakerRewards address of the staker rewards contract
     * @param vault address of the vault
     */
    event SetStakerRewardContract(address indexed stakerRewards, address indexed vault);

    /**
     * @notice Emitted when the token's address is set.
     * @param token address of the reward token
     */
    event SetTokenAddress(address indexed token);

    /**
     * @notice Emitted when the operator share of the rewards is set.
     * @param operatorShare operator share of the rewards
     */
    event SetOperatorShare(uint48 indexed operatorShare);

    /**
     * @notice Struct to store the data related to rewards distribution per Starlight's era.
     * @param epoch network epoch of the middleware
     * @param amount amount of tokens received per eraIndex
     * @param tokensPerPoint amount of tokens per point
     * @param root Merkle root of the rewards distribution
     */
    struct EraRoot {
        uint48 epoch;
        uint256 amount;
        uint256 tokensPerPoint;
        bytes32 root;
    }

    /**
     * @notice Struct to store the data related to claim the rewards distribution per Starlight's era.
     * @param operatorKey operator key of the rewards' recipient
     * @param epoch network epoch of the middleware
     * @param eraIndex era index of Starlight's rewards distribution
     * @param totalPointsClaimable total amount of points that can be claimed
     * @param proof Merkle proof of the rewards distribution
     * @param data additional data to use to distribute rewards to stakers
     */
    struct ClaimRewardsInput {
        bytes32 operatorKey;
        uint48 eraIndex;
        uint32 totalPointsClaimable; //! Are we sure this won't be bigger than a uint32?
        bytes32[] proof;
        bytes data;
    }

    /**
     * @notice Get the network middleware service's address.
     * @return address of the network middleware service
     */
    function i_networkMiddlewareService() external view returns (address);

    /**
     * @notice Get the network identifier.
     * @return network identifier
     */
    function i_network() external view returns (address);

    /**
     * @notice Get the token's address.
     * @return address of the reward token
     */
    function s_token() external view returns (address);

    /**
     * @notice Get the operator share.
     * @return operator share
     */
    function s_operatorShare() external view returns (uint48);

    /**
     * @notice Get an information of a particular era rewards data distribution
     * @param eraIndex era index of Starlight's rewards distribution
     * @return epoch network epoch of the middleware
     * @return amount of tokens that can be claimed
     * @return tokensPerPoints amount of tokens per point
     * @return root Merkle root of the reward distribution
     */
    function s_eraRoot(
        uint48 eraIndex
    ) external view returns (uint48 epoch, uint256 amount, uint256 tokensPerPoints, bytes32 root);

    /**
     * @notice Get an array of era indexes for a particular epoch.
     * @param epoch network epoch of the middleware
     * @param index in the array of era indexes
     * @return eraIndex era index of Starlight's rewards distribution
     */
    function s_eraIndexesPerEpoch(uint48 epoch, uint256 index) external view returns (uint48 eraIndex);

    /**
     * @notice Get a claimed amount of rewards for a particular account and epoch
     * @param eraIndex era index of Starlight's rewards distribution
     * @param account address of the claimer
     * @return claimed amount of tokens
     */
    function s_claimed(uint48 eraIndex, address account) external view returns (uint256);

    /**
     * @notice Get the staker rewards contract's address for a particular vault
     * @param vault address of the vault
     * @return stakerRewardsAddress address of the staker rewards contract
     */
    function s_vaultToStakerRewardsContract(
        address vault
    ) external view returns (address stakerRewardsAddress);

    /**
     * @notice Distribute rewards for a specific era contained in an epoch by providing a Merkle root, total points, and total amount of tokens.
     * @param epoch network epoch of the middleware
     * @param eraIndex era index of Starlight's rewards distribution
     * @param totalPointsToken total amount of points for the reward distribution
     * @param amount amount of tokens to distribute
     * @param root Merkle root of the reward distribution
     * @dev Emit DistributeRewards event.
     */
    function distributeRewards(
        uint48 epoch,
        uint48 eraIndex,
        uint256 totalPointsToken,
        uint256 amount,
        bytes32 root
    ) external;

    /**
     * @notice Claim rewards for a particular epoch by providing a Merkle proof.
     * @param input data to claim rewards
     * @return amount amount of tokens claimed
     * @dev Emit ClaimRewards event.
     * @dev The input data must contain:
     * @dev - operatorKey operator key of the rewards' recipient
     * @dev - epoch network epoch of the middleware
     * @dev - eraIndex era index of Starlight's rewards distribution
     * @dev - totalPointsClaimable total amount of tokens that can be claimed
     * @dev - proof Merkle proof of the reward distribution
     * @dev - data additional data to use to distribute rewards to stakers
     */
    function claimRewards(
        ClaimRewardsInput calldata input
    ) external returns (uint256 amount);

    /**
     * @notice Set the staker rewards contract's address for a particular vault.
     * @param stakerRewards The address of the staker rewards contract
     * @param vault The address of the vault
     */
    function setStakerRewardContract(address stakerRewards, address vault) external;

    /**
     * @notice Set the operator share of the rewards.
     * @param operatorShare operator share of the rewards
     */
    function setOperatorShare(
        uint48 operatorShare
    ) external;

    /**
     * @notice Set the address of the reward token
     * @param token address of the reward token
     */
    function setTokenAddress(
        address token
    ) external;
}
