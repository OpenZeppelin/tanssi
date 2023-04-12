use crate::mock::*;
use cumulus_primitives_core::ParaId;
use hex_literal::hex;
use parity_scale_codec::Encode;
use sp_consensus_aura::inherents::InherentType;
use sp_consensus_aura::AURA_ENGINE_ID;
use sp_core::H256;
use sp_runtime::generic::DigestItem;
use sp_runtime::traits::BlakeTwo256;
use tp_authorities_noting_inherent::AuthorNotingSproofBuilderItem;
use tp_authorities_noting_inherent::HeaderAs;
use tp_collator_assignment::CollatorAssignmentSproofBuilder;

#[test]
fn test_author_id_insertion() {
    let mut assignment = CollatorAssignmentSproofBuilder::<u64>::default();
    assignment.collator_assignment.container_chains.insert(ParachainId::get().into(), vec![10u64, 11u64]);

    let (orchestrator_chain_root, orchestrator_chain_state) = assignment.into_state_root_and_proof();

    BlockTests::new()
        .with_relay_sproof_builder(move |_, relay_block_num, sproof| match relay_block_num {
            1 => {
                let slot: InherentType = 13u64.into();
                let mut s = AuthorNotingSproofBuilderItem::default();
                s.para_id = OrchestratorParachainId::get().into();
                s.author_id =
                    HeaderAs::NonEncoded(sp_runtime::generic::Header::<u32, BlakeTwo256> {
                        parent_hash: Default::default(),
                        number: Default::default(),
                        state_root: orchestrator_chain_root.clone(),
                        extrinsics_root: Default::default(),
                        digest: sp_runtime::generic::Digest {
                            logs: vec![DigestItem::PreRuntime(AURA_ENGINE_ID, slot.encode())],
                        },
                    });
                sproof.items.push(s);
            }
            _ => unreachable!(),
        })
        .with_orchestrator_storage_proof(orchestrator_chain_state)
        .add(1, || {
            assert_eq!(AuthoritiesNoting::authorities(), vec![10u64, 11u64]);
        });
}