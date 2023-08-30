// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/events";

import type { ApiTypes, AugmentedEvent } from "@polkadot/api-base/types";
import type { Bytes, Null, Option, Result, U8aFixed, Vec, u128, u16, u32, u64, u8 } from "@polkadot/types-codec";
import type { AccountId32, H256 } from "@polkadot/types/interfaces/runtime";
import type {
    DanceboxRuntimeProxyType,
    FrameSupportDispatchDispatchInfo,
    FrameSupportTokensMiscBalanceStatus,
    SpRuntimeDispatchError,
    SpWeightsWeightV2Weight,
    XcmV3MultiLocation,
    XcmV3MultiassetMultiAssets,
    XcmV3Response,
    XcmV3TraitsError,
    XcmV3TraitsOutcome,
    XcmV3Xcm,
    XcmVersionedMultiAssets,
    XcmVersionedMultiLocation,
} from "@polkadot/types/lookup";

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module "@polkadot/api-base/types/events" {
    interface AugmentedEvents<ApiType extends ApiTypes> {
        authorNoting: {
            /** Latest author changed */
            LatestAuthorChanged: AugmentedEvent<
                ApiType,
                [paraId: u32, blockNumber: u32, newAuthor: AccountId32],
                { paraId: u32; blockNumber: u32; newAuthor: AccountId32 }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        balances: {
            /** A balance was set by root. */
            BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32; free: u128 }>;
            /** Some amount was burned from an account. */
            Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some amount was deposited (e.g. for transaction fees). */
            Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. */
            DustLost: AugmentedEvent<
                ApiType,
                [account: AccountId32, amount: u128],
                { account: AccountId32; amount: u128 }
            >;
            /** An account was created with some free balance. */
            Endowed: AugmentedEvent<
                ApiType,
                [account: AccountId32, freeBalance: u128],
                { account: AccountId32; freeBalance: u128 }
            >;
            /** Some balance was frozen. */
            Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Total issuance was increased by `amount`, creating a credit to be balanced. */
            Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
            /** Some balance was locked. */
            Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some amount was minted into an account. */
            Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Total issuance was decreased by `amount`, creating a debt to be balanced. */
            Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
            /** Some balance was reserved (moved from free to reserved). */
            Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /**
             * Some balance was moved from the reserve of the first account to the second account. Final argument indicates
             * the destination balance type.
             */
            ReserveRepatriated: AugmentedEvent<
                ApiType,
                [
                    from: AccountId32,
                    to: AccountId32,
                    amount: u128,
                    destinationStatus: FrameSupportTokensMiscBalanceStatus
                ],
                {
                    from: AccountId32;
                    to: AccountId32;
                    amount: u128;
                    destinationStatus: FrameSupportTokensMiscBalanceStatus;
                }
            >;
            /** Some amount was restored into an account. */
            Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some amount was removed from the account (e.g. for misbehavior). */
            Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some amount was suspended from an account (it can be restored later). */
            Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some balance was thawed. */
            Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Transfer succeeded. */
            Transfer: AugmentedEvent<
                ApiType,
                [from: AccountId32, to: AccountId32, amount: u128],
                { from: AccountId32; to: AccountId32; amount: u128 }
            >;
            /** Some balance was unlocked. */
            Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Some balance was unreserved (moved from reserved to free). */
            Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** An account was upgraded. */
            Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
            /** Some amount was withdrawn from the account (e.g. for transaction fees). */
            Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        collatorSelection: {
            CandidateAdded: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, deposit: u128],
                { accountId: AccountId32; deposit: u128 }
            >;
            CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
            NewCandidacyBond: AugmentedEvent<ApiType, [bondAmount: u128], { bondAmount: u128 }>;
            NewDesiredCandidates: AugmentedEvent<ApiType, [desiredCandidates: u32], { desiredCandidates: u32 }>;
            NewInvulnerables: AugmentedEvent<
                ApiType,
                [invulnerables: Vec<AccountId32>],
                { invulnerables: Vec<AccountId32> }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        cumulusXcm: {
            /** Downward message executed with the given outcome. [ id, outcome ] */
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
            /** Downward message is invalid XCM. [ id ] */
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
            /** Downward message is unsupported version of XCM. [ id ] */
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        dmpQueue: {
            /** Downward message executed with the given outcome. */
            ExecutedDownward: AugmentedEvent<
                ApiType,
                [messageId: U8aFixed, outcome: XcmV3TraitsOutcome],
                { messageId: U8aFixed; outcome: XcmV3TraitsOutcome }
            >;
            /** Downward message is invalid XCM. */
            InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
            /** The maximum number of downward messages was. */
            MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
            /** Downward message is overweight and was placed in the overweight queue. */
            OverweightEnqueued: AugmentedEvent<
                ApiType,
                [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight],
                { messageId: U8aFixed; overweightIndex: u64; requiredWeight: SpWeightsWeightV2Weight }
            >;
            /** Downward message from the overweight queue was executed. */
            OverweightServiced: AugmentedEvent<
                ApiType,
                [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight],
                { overweightIndex: u64; weightUsed: SpWeightsWeightV2Weight }
            >;
            /** Downward message is unsupported version of XCM. */
            UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
            /** The weight limit for handling downward messages was reached. */
            WeightExhausted: AugmentedEvent<
                ApiType,
                [
                    messageId: U8aFixed,
                    remainingWeight: SpWeightsWeightV2Weight,
                    requiredWeight: SpWeightsWeightV2Weight
                ],
                {
                    messageId: U8aFixed;
                    remainingWeight: SpWeightsWeightV2Weight;
                    requiredWeight: SpWeightsWeightV2Weight;
                }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        invulnerables: {
            /** A new Invulnerable was added. */
            InvulnerableAdded: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
            /** An Invulnerable was removed. */
            InvulnerableRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
            /** New Invulnerables were set. */
            NewInvulnerables: AugmentedEvent<
                ApiType,
                [invulnerables: Vec<AccountId32>],
                { invulnerables: Vec<AccountId32> }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        maintenanceMode: {
            /** The chain was put into Maintenance Mode */
            EnteredMaintenanceMode: AugmentedEvent<ApiType, []>;
            /** The call to resume on_idle XCM execution failed with inner error */
            FailedToResumeIdleXcmExecution: AugmentedEvent<
                ApiType,
                [error: SpRuntimeDispatchError],
                { error: SpRuntimeDispatchError }
            >;
            /** The call to suspend on_idle XCM execution failed with inner error */
            FailedToSuspendIdleXcmExecution: AugmentedEvent<
                ApiType,
                [error: SpRuntimeDispatchError],
                { error: SpRuntimeDispatchError }
            >;
            /** The chain returned to its normal operating state */
            NormalOperationResumed: AugmentedEvent<ApiType, []>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        migrations: {
            /** XCM execution resume failed with inner error */
            FailedToResumeIdleXcmExecution: AugmentedEvent<
                ApiType,
                [error: SpRuntimeDispatchError],
                { error: SpRuntimeDispatchError }
            >;
            /** XCM execution suspension failed with inner error */
            FailedToSuspendIdleXcmExecution: AugmentedEvent<
                ApiType,
                [error: SpRuntimeDispatchError],
                { error: SpRuntimeDispatchError }
            >;
            /** Migration completed */
            MigrationCompleted: AugmentedEvent<
                ApiType,
                [migrationName: Bytes, consumedWeight: SpWeightsWeightV2Weight],
                { migrationName: Bytes; consumedWeight: SpWeightsWeightV2Weight }
            >;
            /** Migration started */
            MigrationStarted: AugmentedEvent<ApiType, [migrationName: Bytes], { migrationName: Bytes }>;
            /** Runtime upgrade completed */
            RuntimeUpgradeCompleted: AugmentedEvent<
                ApiType,
                [weight: SpWeightsWeightV2Weight],
                { weight: SpWeightsWeightV2Weight }
            >;
            /** Runtime upgrade started */
            RuntimeUpgradeStarted: AugmentedEvent<ApiType, []>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        parachainSystem: {
            /** Downward messages were processed using the given weight. */
            DownwardMessagesProcessed: AugmentedEvent<
                ApiType,
                [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256],
                { weightUsed: SpWeightsWeightV2Weight; dmqHead: H256 }
            >;
            /** Some downward messages have been received and will be processed. */
            DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
            /** An upgrade has been authorized. */
            UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
            /** An upward message was sent to the relay chain. */
            UpwardMessageSent: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>],
                { messageHash: Option<U8aFixed> }
            >;
            /** The validation function was applied as of the contained relay chain block number. */
            ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
            /** The relay-chain aborted the upgrade process. */
            ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
            /** The validation function has been scheduled to apply. */
            ValidationFunctionStored: AugmentedEvent<ApiType, []>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        polkadotXcm: {
            /**
             * Some assets have been claimed from an asset trap
             *
             * [ hash, origin, assets ]
             */
            AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
            /**
             * Some assets have been placed in an asset trap.
             *
             * [ hash, origin, assets ]
             */
            AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
            /**
             * Execution of an XCM message was attempted.
             *
             * [ outcome ]
             */
            Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
            /**
             * Fees were paid from a location for an operation (often for using `SendXcm`).
             *
             * [ paying location, fees ]
             */
            FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * Expected query response has been received but the querier location of the response does not match the expected.
             * The query remains registered for a later, valid, response to be received and acted upon.
             *
             * [ origin location, id, expected querier, maybe actual querier ]
             */
            InvalidQuerier: AugmentedEvent<
                ApiType,
                [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]
            >;
            /**
             * Expected query response has been received but the expected querier location placed in storage by this runtime
             * previously cannot be decoded. The query remains registered.
             *
             * This is unexpected (since a location placed in storage in a previously executing runtime should be readable
             * prior to query timeout) and dangerous since the possibly valid response will be dropped. Manual governance
             * intervention is probably going to be needed.
             *
             * [ origin location, id ]
             */
            InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
            /**
             * Expected query response has been received but the origin location of the response does not match that expected.
             * The query remains registered for a later, valid, response to be received and acted upon.
             *
             * [ origin location, id, expected location ]
             */
            InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
            /**
             * Expected query response has been received but the expected origin location placed in storage by this runtime
             * previously cannot be decoded. The query remains registered.
             *
             * This is unexpected (since a location placed in storage in a previously executing runtime should be readable
             * prior to query timeout) and dangerous since the possibly valid response will be dropped. Manual governance
             * intervention is probably going to be needed.
             *
             * [ origin location, id ]
             */
            InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
            /**
             * Query response has been received and query is removed. The registered notification has been dispatched and
             * executed successfully.
             *
             * [ id, pallet index, call index ]
             */
            Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
            /**
             * Query response has been received and query is removed. The dispatch was unable to be decoded into a `Call`;
             * this might be due to dispatch function having a signature which is not `(origin, QueryId, Response)`.
             *
             * [ id, pallet index, call index ]
             */
            NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
            /**
             * Query response has been received and query is removed. There was a general error with dispatching the notification call.
             *
             * [ id, pallet index, call index ]
             */
            NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
            /**
             * Query response has been received and query is removed. The registered notification could not be dispatched
             * because the dispatch weight is greater than the maximum weight originally budgeted by this runtime for the query result.
             *
             * [ id, pallet index, call index, actual weight, max budgeted weight ]
             */
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
            /**
             * A given location which had a version change subscription was dropped owing to an error migrating the location
             * to our new XCM format.
             *
             * [ location, query ID ]
             */
            NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
            /**
             * A given location which had a version change subscription was dropped owing to an error sending the notification to it.
             *
             * [ location, query ID, error ]
             */
            NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
            /**
             * Query response has been received and is ready for taking with `take_response`. There is no registered notification call.
             *
             * [ id, response ]
             */
            ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
            /**
             * Received query response has been read and removed.
             *
             * [ id ]
             */
            ResponseTaken: AugmentedEvent<ApiType, [u64]>;
            /**
             * A XCM message was sent.
             *
             * [ origin, destination, message ]
             */
            Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
            /**
             * The supported version of a location has been changed. This might be through an automatic notification or a
             * manual intervention.
             *
             * [ location, XCM version ]
             */
            SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
            /**
             * Query response received which does not match a registered query. This may be because a matching query was never
             * registered, it may be because it is a duplicate response, or because the query timed out.
             *
             * [ origin location, id ]
             */
            UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
            /**
             * An XCM version change notification message has been attempted to be sent.
             *
             * The cost of sending it (borne by the chain) is included.
             *
             * [ destination, result, cost ]
             */
            VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
            /**
             * We have requested that a remote chain sends us XCM version change notifications.
             *
             * [ destination location, cost ]
             */
            VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * A remote has requested XCM version change notification from us and we have honored it. A version information
             * message is sent to them and its cost is included.
             *
             * [ destination location, cost ]
             */
            VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * We have requested that a remote chain stops sending us XCM version change notifications.
             *
             * [ destination location, cost ]
             */
            VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        proxy: {
            /** An announcement was placed to make a call in the future. */
            Announced: AugmentedEvent<
                ApiType,
                [real: AccountId32, proxy: AccountId32, callHash: H256],
                { real: AccountId32; proxy: AccountId32; callHash: H256 }
            >;
            /** A proxy was added. */
            ProxyAdded: AugmentedEvent<
                ApiType,
                [delegator: AccountId32, delegatee: AccountId32, proxyType: DanceboxRuntimeProxyType, delay: u32],
                { delegator: AccountId32; delegatee: AccountId32; proxyType: DanceboxRuntimeProxyType; delay: u32 }
            >;
            /** A proxy was executed correctly, with the given. */
            ProxyExecuted: AugmentedEvent<
                ApiType,
                [result: Result<Null, SpRuntimeDispatchError>],
                { result: Result<Null, SpRuntimeDispatchError> }
            >;
            /** A proxy was removed. */
            ProxyRemoved: AugmentedEvent<
                ApiType,
                [delegator: AccountId32, delegatee: AccountId32, proxyType: DanceboxRuntimeProxyType, delay: u32],
                { delegator: AccountId32; delegatee: AccountId32; proxyType: DanceboxRuntimeProxyType; delay: u32 }
            >;
            /** A pure account has been created by new proxy with given disambiguation index and proxy type. */
            PureCreated: AugmentedEvent<
                ApiType,
                [pure: AccountId32, who: AccountId32, proxyType: DanceboxRuntimeProxyType, disambiguationIndex: u16],
                { pure: AccountId32; who: AccountId32; proxyType: DanceboxRuntimeProxyType; disambiguationIndex: u16 }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        registrar: {
            /** The list of boot_nodes */
            BootNodesChanged: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
            /** A para id has been deregistered. [para_id] */
            ParaIdDeregistered: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
            /** A new para id has been registered. [para_id] */
            ParaIdRegistered: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
            /** A new para id is now valid for collating. [para_id] */
            ParaIdValidForCollating: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        session: {
            /** New session has happened. Note that the argument is the session index, not the block number as the type might suggest. */
            NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        sudo: {
            /** The [sudoer] just switched identity; the old key is supplied if one existed. */
            KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
            /** A sudo just took place. [result] */
            Sudid: AugmentedEvent<
                ApiType,
                [sudoResult: Result<Null, SpRuntimeDispatchError>],
                { sudoResult: Result<Null, SpRuntimeDispatchError> }
            >;
            /** A sudo just took place. [result] */
            SudoAsDone: AugmentedEvent<
                ApiType,
                [sudoResult: Result<Null, SpRuntimeDispatchError>],
                { sudoResult: Result<Null, SpRuntimeDispatchError> }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        system: {
            /** `:code` was updated. */
            CodeUpdated: AugmentedEvent<ApiType, []>;
            /** An extrinsic failed. */
            ExtrinsicFailed: AugmentedEvent<
                ApiType,
                [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo],
                { dispatchError: SpRuntimeDispatchError; dispatchInfo: FrameSupportDispatchDispatchInfo }
            >;
            /** An extrinsic completed successfully. */
            ExtrinsicSuccess: AugmentedEvent<
                ApiType,
                [dispatchInfo: FrameSupportDispatchDispatchInfo],
                { dispatchInfo: FrameSupportDispatchDispatchInfo }
            >;
            /** An account was reaped. */
            KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
            /** A new account was created. */
            NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
            /** On on-chain remark happened. */
            Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32; hash_: H256 }>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        transactionPayment: {
            /** A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee, has been paid by `who`. */
            TransactionFeePaid: AugmentedEvent<
                ApiType,
                [who: AccountId32, actualFee: u128, tip: u128],
                { who: AccountId32; actualFee: u128; tip: u128 }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        utility: {
            /** Batch of dispatches completed fully with no error. */
            BatchCompleted: AugmentedEvent<ApiType, []>;
            /** Batch of dispatches completed but has errors. */
            BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
            /** Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. */
            BatchInterrupted: AugmentedEvent<
                ApiType,
                [index: u32, error: SpRuntimeDispatchError],
                { index: u32; error: SpRuntimeDispatchError }
            >;
            /** A call was dispatched. */
            DispatchedAs: AugmentedEvent<
                ApiType,
                [result: Result<Null, SpRuntimeDispatchError>],
                { result: Result<Null, SpRuntimeDispatchError> }
            >;
            /** A single item within a Batch of dispatches has completed with no error. */
            ItemCompleted: AugmentedEvent<ApiType, []>;
            /** A single item within a Batch of dispatches has completed with error. */
            ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
        xcmpQueue: {
            /** Bad XCM format used. */
            BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
            /** Bad XCM version used. */
            BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
            /** Some XCM failed. */
            Fail: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight],
                { messageHash: Option<U8aFixed>; error: XcmV3TraitsError; weight: SpWeightsWeightV2Weight }
            >;
            /** An XCM exceeded the individual message weight budget. */
            OverweightEnqueued: AugmentedEvent<
                ApiType,
                [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight],
                { sender: u32; sentAt: u32; index: u64; required: SpWeightsWeightV2Weight }
            >;
            /** An XCM from the overweight queue was executed with the given actual weight used. */
            OverweightServiced: AugmentedEvent<
                ApiType,
                [index: u64, used: SpWeightsWeightV2Weight],
                { index: u64; used: SpWeightsWeightV2Weight }
            >;
            /** Some XCM was executed ok. */
            Success: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight],
                { messageHash: Option<U8aFixed>; weight: SpWeightsWeightV2Weight }
            >;
            /** An HRMP message was sent to a sibling parachain. */
            XcmpMessageSent: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>],
                { messageHash: Option<U8aFixed> }
            >;
            /** Generic event */
            [key: string]: AugmentedEvent<ApiType>;
        };
    } // AugmentedEvents
} // declare module