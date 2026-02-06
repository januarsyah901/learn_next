import Card from "@/component/card";

const Main = () => {
    return (
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </section>
    );
};

export default Main;