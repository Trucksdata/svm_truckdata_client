const Faq = ({ faq }) => {
  const faqContent = faq
    ? faq?.map((item, index) => {
        return {
          id: index,
          collapseTarget: item?.question,
          title: item?.question,
          content: item?.answer,
        };
      })
    : [];

  return (
    <>
      {faqContent.map((item) => {
        const sanitizedId = item?.collapseTarget?.replace(/[^a-zA-Z0-9-_]/g, "");

        return (
          <div className="col-12" key={item.id}>
            <div className="accordion__item px-20 py-20 border-light rounded-4">
              <div
                className="accordion__button d-flex items-center"
                data-bs-toggle="collapse"
                data-bs-target={`#${sanitizedId}`}
              >
                <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                  <i className="icon-plus" />
                  <i className="icon-minus" />
                </div>
                <div className="button text-dark-1 text-start">
                  {item.title}
                </div>
              </div>

              <div
                className="accordion-collapse collapse"
                id={sanitizedId}
                data-bs-parent="#Faq1"
              >
                <div className="pt-15 pl-60">
                  <p className="text-15">{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Faq;
