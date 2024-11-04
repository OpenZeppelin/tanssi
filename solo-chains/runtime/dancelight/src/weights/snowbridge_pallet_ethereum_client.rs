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


//! Autogenerated weights for snowbridge_pallet_ethereum_client
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 42.0.0
//! DATE: 2024-10-11, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `girazoki-XPS-15-9530`, CPU: `13th Gen Intel(R) Core(TM) i9-13900H`
//! EXECUTION: , WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// target/release/tanssi-relay
// benchmark
// pallet
// --execution=wasm
// --wasm-execution=compiled
// --pallet
// snowbridge_pallet_ethereum_client
// --extrinsic
// *
// --chain=dev
// --steps
// 50
// --repeat
// 20
// --template=./benchmarking/frame-weight-runtime-template.hbs
// --json-file
// raw.json
// --output
// tmp/snowbridge_pallet_ethereum_client.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weights for snowbridge_pallet_ethereum_client using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> snowbridge_pallet_ethereum_client::WeightInfo for SubstrateWeight<T> {
	/// Storage: `EthereumBeaconClient::FinalizedBeaconStateIndex` (r:1 w:1)
	/// Proof: `EthereumBeaconClient::FinalizedBeaconStateIndex` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::FinalizedBeaconStateMapping` (r:1 w:1)
	/// Proof: `EthereumBeaconClient::FinalizedBeaconStateMapping` (`max_values`: None, `max_size`: Some(36), added: 2511, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::NextSyncCommittee` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::NextSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::InitialCheckpointRoot` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::InitialCheckpointRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::ValidatorsRoot` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::ValidatorsRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::LatestFinalizedBlockRoot` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::LatestFinalizedBlockRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::CurrentSyncCommittee` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::CurrentSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::FinalizedBeaconState` (r:0 w:1)
	/// Proof: `EthereumBeaconClient::FinalizedBeaconState` (`max_values`: None, `max_size`: Some(72), added: 2547, mode: `MaxEncodedLen`)
	fn force_checkpoint() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `109`
		//  Estimated: `3501`
		// Minimum execution time: 74_948_835_000 picoseconds.
		Weight::from_parts(75_200_136_000, 3501)
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().writes(8_u64))
	}
	/// Storage: `EthereumBeaconClient::OperatingMode` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::OperatingMode` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::LatestFinalizedBlockRoot` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::LatestFinalizedBlockRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::FinalizedBeaconState` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::FinalizedBeaconState` (`max_values`: None, `max_size`: Some(72), added: 2547, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::NextSyncCommittee` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::NextSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::CurrentSyncCommittee` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::CurrentSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::ValidatorsRoot` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::ValidatorsRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	fn submit() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `92782`
		//  Estimated: `93857`
		// Minimum execution time: 18_237_384_000 picoseconds.
		Weight::from_parts(18_313_625_000, 93857)
			.saturating_add(T::DbWeight::get().reads(6_u64))
	}
	/// Storage: `EthereumBeaconClient::OperatingMode` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::OperatingMode` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::LatestFinalizedBlockRoot` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::LatestFinalizedBlockRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::FinalizedBeaconState` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::FinalizedBeaconState` (`max_values`: None, `max_size`: Some(72), added: 2547, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::NextSyncCommittee` (r:1 w:1)
	/// Proof: `EthereumBeaconClient::NextSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::CurrentSyncCommittee` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::CurrentSyncCommittee` (`max_values`: Some(1), `max_size`: Some(92372), added: 92867, mode: `MaxEncodedLen`)
	/// Storage: `EthereumBeaconClient::ValidatorsRoot` (r:1 w:0)
	/// Proof: `EthereumBeaconClient::ValidatorsRoot` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	fn submit_with_sync_committee() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `92782`
		//  Estimated: `93857`
		// Minimum execution time: 93_102_798_000 picoseconds.
		Weight::from_parts(93_339_834_000, 93857)
			.saturating_add(T::DbWeight::get().reads(6_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
}