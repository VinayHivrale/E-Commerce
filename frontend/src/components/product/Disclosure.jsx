import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { useNavigate, useLocation } from 'react-router-dom';

const Disclosure = ({ filters, singleFilters }) => {
  const [openSections, setOpenSections] = useState(Array(filters.length).fill(false));
  const [singleOpenSections, setSingleOpenSections] = useState(Array(singleFilters.length).fill(false));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    console.log("useeffect");

    const params = new URLSearchParams(location.search);
    const openSectionsArray = Array(filters.length).fill(false);
    const singleOpenSectionsArray = Array(singleFilters.length).fill(false);

    filters.forEach((section, index) => {
      if (params.has(section.id)) {
        openSectionsArray[index] = true;
        const filterValues = params.get(section.id).split(',');
        const updatedOptions = section.options.map((option) => ({
          ...option,
          checked: filterValues.includes(option.value),
        }));
        section.options = updatedOptions;
      } else {
        const updatedOptions = section.options.map((option) => ({
          ...option,
          checked: false,
        }));
        section.options = updatedOptions;
      }
    });
    

    singleFilters.forEach((section, index) => {
      if (params.has(section.id)) {
        singleOpenSectionsArray[index] = true;
        const filterValue = params.get(section.id);
        const updatedOptions = section.options.map((option) => ({
          ...option,
          checked: option.value === filterValue,
        }));
        section.options = updatedOptions;
      } else {
        const updatedOptions = section.options.map((option) => ({
          ...option,
          checked: false,
        }));
        section.options = updatedOptions;
      }
    });
    

    setOpenSections(openSectionsArray);
    setSingleOpenSections(singleOpenSectionsArray);
  }, [location.search, filters, singleFilters]);

  const toggleFilter = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  const toggleSingleFilter = (index) => {
    const newOpenSections = [...singleOpenSections];
    newOpenSections[index] = !newOpenSections[index];
    setSingleOpenSections(newOpenSections);
  };

  const handleFilter = (sectionId, value) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValues = searchParams.getAll(sectionId);

    if (filterValues.length && filterValues[0].split(',').includes(value)) {
      filterValues = filterValues[0].split(',').filter(item => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValues.push(value);
    }

    if (filterValues.length) {
      searchParams.set(sectionId, filterValues.join(','));
    }

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleSingleFilter = (sectionId, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <div className='overflow-y-auto h-screen'>
      {filters.map((section, index) => (
        <div key={section.id} className="border-b w-full border-gray-200 py-6">
          <>
            <h3 className="-my-3 flow-root">
              <button onClick={() => toggleFilter(index)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="font-medium text-gray-900">{section.name}</span>
                <span className="ml-6 flex items-center">
                  {openSections[index] ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            {openSections[index] && (
              <div className="pt-6">
                <div className="space-y-4 ml-2">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        value={option.value}
                        type="checkbox"
                        checked={option.checked}
                        onChange={() => handleFilter(section.id, option.value)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-black"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        </div>
      ))}
      {singleFilters.map((section, index) => (
        <div key={section.id} className="border-b w-full border-gray-200 py-6">
          <>
            <h3 className="-my-3 flow-root">
              <button onClick={() => toggleSingleFilter(index)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="font-medium text-gray-900">{section.name}</span>
                <span className="ml-6 flex items-center">
                  {singleOpenSections[index] ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            {singleOpenSections[index] && (
              <div className="pt-6">
                <div className="space-y-4 ml-2">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`single-filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        value={option.value}
                        type="radio"
                        checked={option.checked}
                        onChange={() => handleSingleFilter(section.id, option.value)}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`single-filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-black"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Disclosure;
