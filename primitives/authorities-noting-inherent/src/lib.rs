//! # Authorities Noting Inherent Primitives
//!
//! This crate defines those primitives that should be taken into account when building
//! the authorities-noting pallet inherent
//!
//! In particular this crate contains:
//! - The Inherent identifier
//! - The client side trait implementations to introduce the inherent
//! - The mock version that gets used both in test files and manual seal
//! - The sproof builder that generates a fake proof that mimics the relay chain sproof

#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(feature = "std")]
mod client_side;
#[cfg(feature = "std")]
pub use client_side::*;

use {
    parity_scale_codec::{Decode, Encode},
    scale_info::TypeInfo,
    sp_inherents::InherentIdentifier,
};

#[derive(Encode, Decode, sp_core::RuntimeDebug, Clone, PartialEq, TypeInfo)]
pub struct ContainerChainAuthoritiesInherentData {
    pub relay_chain_state: sp_trie::StorageProof,
    pub orchestrator_chain_state: sp_trie::StorageProof,
}

// Identifier of the author-noting inherent
pub const INHERENT_IDENTIFIER: InherentIdentifier = *b"ccno1337";