"use strict";

module.exports = (req, res, next) => {
  // Searching & Sorting & Pagination:

  // Filter
  const filter = req.query?.filter || {};

  // Search
  const search = req.query?.search || "";
  let searchQuery = {};
  if (search) {
    searchQuery = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };
  }

  // Sort
  const sort = req.query?.sort || {};

  // PAGINATION: URL?page=1&limit=10
  // Limit
  let limit = Number(req.query?.limit);
  limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20);
  // Page
  let page = Number(req.query?.page);
  page = (page > 0 ? page : 1) - 1;
  // Skip
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : page * limit;

  // Run SearchingSortingPagination engine for Model:
  res.getModelList = async function (
    Model,
    customFilter = {},
    populate = null
  ) {
    const filtersAndSearch = { ...filter, ...searchQuery, ...customFilter };

    return await Model.find(filtersAndSearch)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  // Details:
  res.getModelListDetails = async (Model, customFilter = {}) => {
    const filtersAndSearch = { ...filter, ...searchQuery, ...customFilter };
    const data = await Model.find(filtersAndSearch);

    let details = {
      filter,
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: page > 0 ? page : false,
        current: page + 1,
        next: page + 2,
        total: Math.ceil(data.length / limit),
      },
      totalRecords: data.length,
    };
    details.pages.next =
      details.pages.next > details.pages.total ? false : details.pages.next;
    if (details.totalRecords <= limit) details.pages = false;
    return details;
  };

  next();
};
