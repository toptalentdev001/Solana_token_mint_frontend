import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

function Dashboard() {
  return (
    <>
      <div className="mb-[40px]">
        <h1>Solana token mint program</h1>
      </div>
      <div className="flex flex-col gap-4 itmes-center">
        <div className="flex gap-4 items-center">
          <label htmlFor="token_image" className="w-[160px]">
            Token avatar
          </label>
          <div className="w-[300px]">
            <input
              type="file"
              className="w-[200px] h-[200px] border-[1px] rounded-[12px]"
              placeholder="Token avatar"
              name="token_image"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="token_description p-[30px]" className="w-[160px]">
            Token Name
          </label>
          <input
            type="text"
            className="w-[300px] border-[1px] text-[20px] p-2"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="token_description" className="w-[160px]">
            Token Description
          </label>
          <input
            type="text"
            className="w-[300px] border-[1px] text-[20px] p-2"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="token_description" className="w-[160px]">
            Mint amount
          </label>
          <input
            type="text"
            className="w-[300px] border-[1px] text-[20px] p-2"
          />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <WalletMultiButton />
          <button className="">Mint</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
