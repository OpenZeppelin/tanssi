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


//! Autogenerated weights for pallet_author_noting
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 42.0.0
//! DATE: 2024-09-30, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `benchmark-1`, CPU: `Intel(R) Xeon(R) Platinum 8375C CPU @ 2.90GHz`
//! EXECUTION: , WASM-EXECUTION: Compiled, CHAIN: Some("dancelight-dev"), DB CACHE: 1024

// Executed Command:
// target/release/tanssi-relay
// benchmark
// pallet
// --execution=wasm
// --wasm-execution=compiled
// --pallet
// pallet_author_noting
// --extrinsic
// *
// --chain=dancelight-dev
// --steps
// 50
// --repeat
// 20
// --template=benchmarking/frame-weight-runtime-template.hbs
// --json-file
// raw.json
// --output
// tmp/starlight_weights/pallet_author_noting.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weights for pallet_author_noting using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_author_noting::WeightInfo for SubstrateWeight<T> {
	/// Storage: `AuthorNoting::DidSetContainerAuthorData` (r:1 w:1)
	/// Proof: `AuthorNoting::DidSetContainerAuthorData` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `MaxEncodedLen`)
	/// Storage: `ContainerRegistrar::RegisteredParaIds` (r:1 w:0)
	/// Proof: `ContainerRegistrar::RegisteredParaIds` (`max_values`: Some(1), `max_size`: Some(402), added: 897, mode: `MaxEncodedLen`)
	/// Storage: `Babe::CurrentSlot` (r:1 w:0)
	/// Proof: `Babe::CurrentSlot` (`max_values`: Some(1), `max_size`: Some(8), added: 503, mode: `MaxEncodedLen`)
	/// Storage: `Paras::Heads` (r:99 w:0)
	/// Proof: `Paras::Heads` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `TanssiCollatorAssignment::CollatorContainerChain` (r:1 w:0)
	/// Proof: `TanssiCollatorAssignment::CollatorContainerChain` (`max_values`: Some(1), `max_size`: None, mode: `Measured`)
	/// Storage: `AuthorNoting::LatestAuthor` (r:99 w:99)
	/// Proof: `AuthorNoting::LatestAuthor` (`max_values`: None, `max_size`: Some(64), added: 2539, mode: `MaxEncodedLen`)
	/// The range of component `x` is `[1, 100]`.
	fn set_latest_author_data(x: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `301 + x * (206 ±0)`
		//  Estimated: `6858 + x * (2561 ±0)`
		// Minimum execution time: 8_841_000 picoseconds.
		Weight::from_parts(8_961_000, 6858)
			// Standard Error: 156_576
			.saturating_add(Weight::from_parts(21_144_399, 0).saturating_mul(x.into()))
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().reads((2_u64).saturating_mul(x.into())))
			.saturating_add(T::DbWeight::get().writes((1_u64).saturating_mul(x.into())))
			.saturating_add(Weight::from_parts(0, 2561).saturating_mul(x.into()))
	}
	/// Storage: `AuthorNoting::LatestAuthor` (r:0 w:1)
	/// Proof: `AuthorNoting::LatestAuthor` (`max_values`: None, `max_size`: Some(64), added: 2539, mode: `MaxEncodedLen`)
	fn set_author() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 8_461_000 picoseconds.
		Weight::from_parts(8_735_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: `AuthorNoting::LatestAuthor` (r:0 w:1)
	/// Proof: `AuthorNoting::LatestAuthor` (`max_values`: None, `max_size`: Some(64), added: 2539, mode: `MaxEncodedLen`)
	fn kill_author_data() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 7_919_000 picoseconds.
		Weight::from_parts(8_059_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
}