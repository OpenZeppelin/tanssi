use cumulus_primitives_core::relay_chain::HeadData;
use cumulus_primitives_core::ParaId;
use frame_support::Hashable;
use sp_runtime::traits::BlakeTwo256;
use sp_runtime::traits::HashFor;
use sp_trie::MemoryDB;
use crate::*;
use parity_scale_codec::Encode;
/// Builds a sproof (portmanteau of 'spoof' and 'proof') of the relay chain state.
#[derive(Clone, Encode, Default)]
pub struct CollatorAssignmentSproofBuilder<AccountId> {
    /// The para id of the current parachain.
    pub collator_assignment: AssignedCollators<AccountId>,

}

impl<AccountId: Encode> CollatorAssignmentSproofBuilder<AccountId> {
    pub fn into_state_root_and_proof(
        self,
    ) -> (
        polkadot_primitives::v2::Hash,
        sp_state_machine::StorageProof,
    ) {
        let (db, root) = MemoryDB::<HashFor<polkadot_primitives::v2::Block>>::default_with_root();
        let state_version = Default::default();
        let mut backend = sp_state_machine::TrieBackendBuilder::new(db, root).build();
        let mut relevant_keys = Vec::new();

        let mut insert = |key: Vec<u8>, value: Vec<u8>| {
            relevant_keys.push(key.clone());
            backend.insert(vec![(None, vec![(key, Some(value))])], state_version);
        };

        insert(COLLATOR_ASSIGNMENT_INDEX.to_vec(), self.encode());

        let root = backend.root().clone();
        let proof = sp_state_machine::prove_read(backend, relevant_keys).expect("prove read");

        (root, proof)
    }
}
